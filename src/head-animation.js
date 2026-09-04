import { ANIMATION, STATE } from './head-config.js';

// Convert the original 60 Hz easing coefficient to elapsed-time damping.
export function damping(coefficient, deltaSeconds) {
    return 1 - Math.pow(1 - coefficient, deltaSeconds * 60);
}

export function updateHeadAnimation(model, deltaSeconds, elapsedSeconds) {
    const { head, zzzGroup, musicNotesGroup, lineMaterial, state, baseY } = model;
    const dt = Math.min(Math.max(deltaSeconds, 0), 0.1);
    let coefficient = ANIMATION.ROTATION_SPEED_NORMAL;
    if (state === STATE.WHISTLING || state === STATE.AWED) {
        coefficient = ANIMATION.ROTATION_SPEED_WHISTLING;
    } else if (state === STATE.GIGGLING) {
        coefficient = ANIMATION.ROTATION_SPEED_GIGGLING;
    }

    if (state !== STATE.SLEEPING) {
        const targetY = model.mouseX * ANIMATION.MOUSE_SENSITIVITY_X;
        const targetX = model.mouseY * ANIMATION.MOUSE_SENSITIVITY_Y;
        const blend = damping(coefficient, dt);
        // Preserve the original 60 Hz sway without adding a fixed amount per frame.
        const sway = state === STATE.WHISTLING
            ? Math.sin(elapsedSeconds * ANIMATION.WHISTLE_SWAY_SPEED)
                * ANIMATION.WHISTLE_SWAY_AMOUNT / coefficient
            : 0;
        head.rotation.y += (targetY + sway - head.rotation.y) * blend;
        head.rotation.x += (targetX - head.rotation.x) * blend;
    }

    head.position.y = baseY;
    if (state === STATE.SLEEPING) {
        for (const z of zzzGroup.children) {
            const originalY = z.userData.originalY;
            const distance = ANIMATION.ZZZ_RESET_Y - originalY;
            z.position.y = originalY + (z.position.y - originalY
                + ANIMATION.ZZZ_FLOAT_SPEED * dt) % distance;
        }
        head.rotation.set(0, 0, 0);
    } else if (state === STATE.WHISTLING) {
        for (const note of musicNotesGroup.children) {
            const distance = ANIMATION.NOTE_RESET_Y - note.userData.originalY;
            const previousY = note.position.y;
            note.position.y += ANIMATION.NOTE_FLOAT_SPEED_Y * dt;
            note.position.x += ANIMATION.NOTE_FLOAT_SPEED_X * dt;
            if (note.position.y >= ANIMATION.NOTE_RESET_Y) {
                const overflow = (previousY - note.userData.originalY
                    + ANIMATION.NOTE_FLOAT_SPEED_Y * dt) % distance;
                note.position.y = note.userData.originalY + overflow;
                note.position.x = note.userData.originalX
                    + overflow * ANIMATION.NOTE_FLOAT_SPEED_X / ANIMATION.NOTE_FLOAT_SPEED_Y;
            }
        }
    } else if (state === STATE.GIGGLING) {
        const elapsed = (elapsedSeconds - model.giggleStart) * 1000;
        const progress = Math.min(elapsed / ANIMATION.GIGGLE_DURATION_MS, 1);
        head.position.y += Math.sin(elapsed * ANIMATION.GIGGLE_FREQUENCY)
            * ANIMATION.GIGGLE_AMPLITUDE * (1 - progress * progress);
        if (progress >= 1) return true;
    }

    lineMaterial.opacity = state === STATE.SLEEPING
        ? ANIMATION.SLEEP_OPACITY
        : ANIMATION.PULSE_BASE_OPACITY + Math.sin(elapsedSeconds) * ANIMATION.PULSE_AMPLITUDE;
    return false;
}

// A stoppable clock keeps a static frame for reduced motion and pauses while hidden.
export function createAnimationLoop({ requestFrame, cancelFrame, update, render }) {
    let frameId = null;
    let previousTime = null;
    let elapsed = 0;
    let running = false;

    function frame(timestamp) {
        frameId = null;
        if (!running) return;
        const dt = previousTime === null ? 0 : Math.min((timestamp - previousTime) / 1000, 0.1);
        previousTime = timestamp;
        elapsed += dt;
        update(dt, elapsed);
        render();
        if (running) frameId = requestFrame(frame);
    }

    return {
        get elapsed() { return elapsed; },
        start() {
            if (running) return;
            running = true;
            previousTime = null;
            frameId = requestFrame(frame);
        },
        stop() {
            running = false;
            if (frameId !== null) cancelFrame(frameId);
            frameId = null;
            previousTime = null;
        },
    };
}
