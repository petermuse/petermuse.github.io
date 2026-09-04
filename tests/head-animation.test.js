import assert from 'node:assert/strict';
import test from 'node:test';
import { createAnimationLoop, updateHeadAnimation } from '../src/head-animation.js';
import { STATE } from '../src/head-config.js';

function createModel(state) {
    const symbol = (x, y) => ({
        position: { x, y },
        userData: { originalX: x, originalY: y },
    });
    return {
        state,
        baseY: -0.15,
        mouseX: 7,
        mouseY: -4,
        giggleStart: 0,
        head: {
            position: { y: -0.15 },
            rotation: {
                x: 0,
                y: 0,
                z: 0,
                set(x, y, z) { Object.assign(this, { x, y, z }); },
            },
        },
        zzzGroup: { children: [symbol(0.1, 1.6), symbol(0.3, 1.8), symbol(0.5, 2)] },
        musicNotesGroup: { children: [symbol(0.1, 1.5), symbol(0.25, 1.7), symbol(0.4, 1.9)] },
        lineMaterial: { opacity: 0.8 },
    };
}

function advance(state, framesPerSecond, seconds) {
    const model = createModel(state);
    for (let frame = 1; frame <= framesPerSecond * seconds; frame++) {
        updateHeadAnimation(model, 1 / framesPerSecond, frame / framesPerSecond);
    }
    return model;
}

function approximately(actual, expected, message, tolerance = 1e-10) {
    assert.ok(Number.isFinite(actual), `${message}: must be finite`);
    assert.ok(Math.abs(actual - expected) < tolerance, `${message}: ${actual} ≈ ${expected}`);
}

test('sleeping symbols travel and wrap equally at 60, 120, and 144 Hz', () => {
    const models = [60, 120, 144].map(rate => advance(STATE.SLEEPING, rate, 3.25));
    const expectedY = [2.185, 2.385, 2.085];
    for (const model of models) {
        model.zzzGroup.children.forEach((symbol, index) => {
            approximately(symbol.position.y, expectedY[index], `sleep symbol ${index}`);
        });
        assert.equal(model.head.rotation.x, 0);
        assert.equal(model.head.rotation.y, 0);
        assert.equal(model.lineMaterial.opacity, 0.8);
    }
});

test('whistling notes preserve both travel axes when wrapping at every refresh rate', () => {
    const models = [60, 120, 144].map(rate => advance(STATE.WHISTLING, rate, 3.25));
    const expectedPositions = [[0.295, 2.28], [0.445, 2.48], [0.445, 2.08]];
    for (const model of models) {
        model.musicNotesGroup.children.forEach((note, index) => {
            approximately(note.position.x, expectedPositions[index][0], `note ${index} x`);
            approximately(note.position.y, expectedPositions[index][1], `note ${index} y`);
        });
    }
});

test('cursor easing reaches the same rotation in the same elapsed time at each refresh rate', () => {
    for (const state of [STATE.NORMAL, STATE.AWED, STATE.GIGGLING]) {
        const baseline = advance(state, 60, 0.25);
        // A quarter second leaves significant easing remaining, making this
        // sensitive to accidentally applying a fixed coefficient each frame.
        assert.ok(baseline.head.rotation.y > 0 && baseline.head.rotation.y < 0.35);
        for (const rate of [120, 144]) {
            const model = advance(state, rate, 0.25);
            approximately(model.head.rotation.x, baseline.head.rotation.x, `${state} x at ${rate} Hz`);
            approximately(model.head.rotation.y, baseline.head.rotation.y, `${state} y at ${rate} Hz`);
            approximately(model.head.position.y, baseline.head.position.y, `${state} position at ${rate} Hz`);
            approximately(model.lineMaterial.opacity, baseline.lineMaterial.opacity, `${state} opacity at ${rate} Hz`);
        }
    }
});

function createFrameScheduler() {
    const pending = new Map();
    let nextId = 1;
    return {
        pending,
        requestFrame(callback) {
            const id = nextId++;
            pending.set(id, callback);
            return id;
        },
        cancelFrame(id) { pending.delete(id); },
        fire(timestamp) {
            assert.equal(pending.size, 1, 'exactly one frame should be scheduled');
            const [id, callback] = pending.entries().next().value;
            pending.delete(id);
            callback(timestamp);
        },
    };
}

test('the first frame receives a finite zero delta and loop start is idempotent', () => {
    const scheduler = createFrameScheduler();
    const updates = [];
    const model = createModel(STATE.NORMAL);
    let renders = 0;
    const loop = createAnimationLoop({
        ...scheduler,
        update(delta, elapsed) {
            updates.push([delta, elapsed]);
            updateHeadAnimation(model, delta, elapsed);
        },
        render() { renders++; },
    });
    loop.start();
    loop.start();
    assert.equal(updates.length, 0, 'animation waits for a real frame timestamp');
    assert.equal(scheduler.pending.size, 1);
    scheduler.fire(12345);
    assert.deepEqual(updates, [[0, 0]]);
    assert.equal(renders, 1);
    assert.ok(Number.isFinite(model.head.rotation.x));
    assert.ok(Number.isFinite(model.head.rotation.y));
    assert.ok(Number.isFinite(model.lineMaterial.opacity));
    loop.stop();
    assert.equal(scheduler.pending.size, 0);
});

test('stop cancels pending work and restarting does not advance through the paused time', () => {
    const scheduler = createFrameScheduler();
    const updates = [];
    const loop = createAnimationLoop({
        ...scheduler,
        update(delta, elapsed) { updates.push([delta, elapsed]); },
        render() {},
    });
    loop.start();
    scheduler.fire(1000);
    scheduler.fire(1020);
    approximately(loop.elapsed, 0.02, 'elapsed before pause');
    loop.stop();
    loop.stop();
    assert.equal(scheduler.pending.size, 0);

    loop.start();
    scheduler.fire(500000);
    assert.deepEqual(updates.at(-1), [0, 0.02]);
    scheduler.fire(500020);
    approximately(loop.elapsed, 0.04, 'elapsed after resuming');
    // Even an unexpectedly delayed active frame must not cause a large jump.
    scheduler.fire(501020);
    approximately(updates.at(-1)[0], 0.1, 'maximum frame delta');
    loop.stop();
    assert.equal(scheduler.pending.size, 0);
});

test('stopping from a frame callback does not schedule another frame', () => {
    const scheduler = createFrameScheduler();
    let renders = 0;
    const loop = createAnimationLoop({
        ...scheduler,
        update() { loop.stop(); },
        render() { renders++; },
    });
    loop.start();
    scheduler.fire(1000);
    assert.equal(renders, 1);
    assert.equal(scheduler.pending.size, 0);
});
