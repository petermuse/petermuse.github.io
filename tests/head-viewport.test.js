import assert from 'node:assert/strict';
import test from 'node:test';
import { observePixelRatio, readViewport, resizeHead } from '../src/head-viewport.js';

function createScene() {
    return {
        container: { clientWidth: 320, clientHeight: 240 },
        windowObject: {
            innerWidth: 1000,
            innerHeight: 800,
            devicePixelRatio: 1,
            getComputedStyle() { return { fontSize: '83.2px' }; },
        },
        renderer: {
            pixelRatio: 1,
            ratioUpdates: [],
            getPixelRatio() { return this.pixelRatio; },
            setPixelRatio(value) {
                this.pixelRatio = value;
                this.ratioUpdates.push(value);
            },
            setSize(width, height) {
                this.size = { width, height };
                this.drawingBufferSize = { width: width * this.pixelRatio, height: height * this.pixelRatio };
            },
        },
        camera: {
            position: { set(x, y, z) { Object.assign(this, { x, y, z }); } },
            projectionUpdates: 0,
            worldUpdates: 0,
            updateProjectionMatrix() { this.projectionUpdates++; },
            updateMatrixWorld() { this.worldUpdates++; },
        },
        lineMaterial: { resolution: { set(x, y) { Object.assign(this, { x, y }); } } },
        head: { scale: { setScalar(value) { this.value = value; } } },
        nameElement: {},
    };
}

test('moving between displays updates renderer density even with identical CSS dimensions', () => {
    const scene = createScene();
    resizeHead(scene);
    assert.deepEqual(scene.renderer.size, { width: 320, height: 300 });
    assert.deepEqual(scene.renderer.drawingBufferSize, { width: 320, height: 300 });

    scene.windowObject.devicePixelRatio = 2;
    resizeHead(scene);
    assert.deepEqual(scene.renderer.ratioUpdates, [2]);
    assert.deepEqual(scene.renderer.size, { width: 320, height: 300 });
    assert.deepEqual(scene.renderer.drawingBufferSize, { width: 640, height: 600 });

    scene.windowObject.devicePixelRatio = 1;
    resizeHead(scene);
    assert.deepEqual(scene.renderer.ratioUpdates, [2, 1]);
    assert.deepEqual(scene.renderer.drawingBufferSize, { width: 320, height: 300 });
});

test('rendering caps expensive high densities and avoids resetting an unchanged density', () => {
    const scene = createScene();
    scene.windowObject.devicePixelRatio = 4;
    const viewport = resizeHead(scene);
    assert.equal(viewport.pixelRatio, 4);
    assert.equal(viewport.cappedPixelRatio, 2);
    assert.equal(scene.renderer.getPixelRatio(), 2);
    assert.deepEqual(scene.renderer.drawingBufferSize, { width: 640, height: 600 });

    scene.windowObject.devicePixelRatio = 3;
    resizeHead(scene);
    assert.deepEqual(scene.renderer.ratioUpdates, [2]);
});

test('camera and line material use the actual extended canvas dimensions at every density', () => {
    const scene = createScene();
    scene.container.clientWidth = 401;
    scene.container.clientHeight = 241;
    for (const pixelRatio of [1, 1.5, 2, 3]) {
        scene.windowObject.devicePixelRatio = pixelRatio;
        resizeHead(scene);
        assert.deepEqual(scene.renderer.size, { width: 401, height: 301 });
        assert.equal(scene.camera.aspect, 401 / 301);
        assert.equal(scene.lineMaterial.resolution.x, 401);
        assert.equal(scene.lineMaterial.resolution.y, 301);
        assert.equal(scene.camera.position.y, 0.125);
        assert.equal(scene.camera.position.z, 5.5);
        assert.ok(scene.lineMaterial.linewidth > 0 && Number.isFinite(scene.lineMaterial.linewidth));
    }
    assert.equal(scene.camera.projectionUpdates, 4);
    assert.equal(scene.camera.worldUpdates, 4);
});

test('a temporarily collapsed container still receives finite nonzero render dimensions', () => {
    const scene = createScene();
    scene.container.clientWidth = 0;
    scene.container.clientHeight = 0;
    resizeHead(scene);
    assert.deepEqual(scene.renderer.size, { width: 1, height: 1 });
    assert.equal(scene.camera.aspect, 1);
    assert.equal(scene.lineMaterial.resolution.x, 1);
    assert.equal(scene.lineMaterial.resolution.y, 1);
    assert.ok(Number.isFinite(scene.lineMaterial.linewidth));
});

test('viewport refreshes its landscape positioning without relying on container size changes', () => {
    const scene = createScene();
    assert.equal(readViewport(scene.windowObject).baseY, -0.15);
    scene.windowObject.innerWidth = 800;
    scene.windowObject.innerHeight = 400;
    assert.equal(resizeHead(scene).baseY, -0.1);
    scene.windowObject.innerWidth = 400;
    scene.windowObject.innerHeight = 800;
    assert.equal(resizeHead(scene).baseY, -0.15);
});

test('density observer rearms for each new display and removes stale listeners', () => {
    const mediaQueries = [];
    const windowObject = {
        devicePixelRatio: 1,
        matchMedia(query) {
            const listeners = new Set();
            const media = {
                query,
                listeners,
                addEventListener(type, callback) {
                    assert.equal(type, 'change');
                    listeners.add(callback);
                },
                removeEventListener(type, callback) {
                    assert.equal(type, 'change');
                    listeners.delete(callback);
                },
                dispatchChange() {
                    for (const callback of [...listeners]) callback();
                },
            };
            mediaQueries.push(media);
            return media;
        },
    };
    const observedDensities = [];
    const cleanup = observePixelRatio(windowObject, () => observedDensities.push(windowObject.devicePixelRatio));
    assert.equal(mediaQueries[0].query, '(resolution: 1dppx)');
    assert.equal(mediaQueries[0].listeners.size, 1);

    windowObject.devicePixelRatio = 2;
    mediaQueries[0].dispatchChange();
    assert.deepEqual(observedDensities, [2]);
    assert.equal(mediaQueries[0].listeners.size, 0);
    assert.equal(mediaQueries[1].query, '(resolution: 2dppx)');
    assert.equal(mediaQueries[1].listeners.size, 1);

    windowObject.devicePixelRatio = 1.5;
    mediaQueries[1].dispatchChange();
    assert.deepEqual(observedDensities, [2, 1.5]);
    assert.equal(mediaQueries[1].listeners.size, 0);
    assert.equal(mediaQueries[2].query, '(resolution: 1.5dppx)');
    assert.equal(mediaQueries[2].listeners.size, 1);
    mediaQueries[0].dispatchChange();
    assert.deepEqual(observedDensities, [2, 1.5], 'old density events must no longer trigger resizing');

    cleanup();
    assert.ok(mediaQueries.every(media => media.listeners.size === 0));
    mediaQueries[2].dispatchChange();
    assert.deepEqual(observedDensities, [2, 1.5]);
});
