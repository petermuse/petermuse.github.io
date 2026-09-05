import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import { bindHeadInteractions } from '../src/head-interactions.js';

function inputEvent(type, properties = {}) {
    return Object.assign(new Event(type, { bubbles: true, cancelable: true }), properties);
}

function setup(t) {
    const targets = {
        documentObject: new EventTarget(),
        container: new EventTarget(),
        canvas: new EventTarget(),
        socialLinks: new EventTarget(),
    };
    const callbacks = Object.fromEntries([
        'onActivity', 'onPointerMove', 'onActivate',
        'onSocialEnter', 'onSocialLeave', 'onKonami',
    ].map(name => [name, mock.fn()]));
    const dispose = bindHeadInteractions({ ...targets, ...callbacks });
    t.after(dispose);
    return { ...targets, ...callbacks, dispose };
}

test('mouse and pen movement track across the page', t => {
    const { documentObject, onPointerMove, onActivity } = setup(t);
    for (const pointerType of ['mouse', 'pen']) {
        const event = inputEvent('pointermove', { pointerType, clientX: 120, clientY: 80 });
        documentObject.dispatchEvent(event);
        assert.deepEqual(onPointerMove.mock.calls.at(-1).arguments, [event, false]);
    }
    assert.equal(onPointerMove.mock.callCount(), 2);
    assert.equal(onActivity.mock.callCount(), 2);
});

test('single touches track immediately anywhere on the document', t => {
    const { documentObject, onPointerMove, onActivity, onActivate } = setup(t);
    for (const target of ['canvas', 'name', 'social-link', 'footer', 'empty-body', 'html']) {
        const touch = { identifier: 1, clientX: 75, clientY: 790, target };
        const start = inputEvent('touchstart', { touches: [touch] });
        documentObject.dispatchEvent(start);
        assert.deepEqual(onPointerMove.mock.calls.at(-1).arguments, [touch, true], target);
        assert.equal(start.defaultPrevented, false);
    }
    assert.equal(onPointerMove.mock.callCount(), 6);
    assert.equal(onActivity.mock.callCount(), 6);
    assert.equal(onActivate.mock.callCount(), 0, 'outside touches only change the gaze');
});

test('touch movement continues after Safari cancels a scrolling pointer stream', t => {
    const { documentObject, onPointerMove, onActivity } = setup(t);
    const touch = { identifier: 1, clientX: 75, clientY: 790 };
    documentObject.dispatchEvent(inputEvent('pointerdown', { pointerType: 'touch', isPrimary: true }));
    documentObject.dispatchEvent(inputEvent('touchstart', { touches: [touch] }));
    documentObject.dispatchEvent(inputEvent('pointermove', { pointerType: 'touch', isPrimary: true }));
    documentObject.dispatchEvent(inputEvent('touchmove', { touches: [{ ...touch, clientY: 750 }] }));
    documentObject.dispatchEvent(inputEvent('pointercancel', { pointerType: 'touch', isPrimary: true }));
    const movedTouch = { ...touch, clientX: 160, clientY: 650 };
    documentObject.dispatchEvent(inputEvent('touchmove', { touches: [movedTouch] }));
    documentObject.dispatchEvent(inputEvent('touchend', { touches: [] }));
    // Safari may follow the tap with compatibility mouse events. They must not
    // overwrite canvas-relative touch coordinates with mouse coordinates.
    documentObject.dispatchEvent(inputEvent('mousemove', { clientX: 160, clientY: 650 }));
    assert.equal(onPointerMove.mock.callCount(), 3);
    assert.equal(onActivity.mock.callCount(), 3, 'touch/pointer paths cannot double count');
    assert.deepEqual(onPointerMove.mock.calls.at(-1).arguments, [movedTouch, true]);
});

test('touch movement is observed once as it bubbles from the canvas to the document', t => {
    const { documentObject, canvas, onPointerMove, onActivity } = setup(t);
    const touch = { clientX: 75, clientY: 90 };
    const event = inputEvent('touchmove', { touches: [touch] });
    // EventTarget has no DOM tree; dispatch at both levels to model propagation.
    canvas.dispatchEvent(event);
    documentObject.dispatchEvent(event);
    assert.equal(onPointerMove.mock.callCount(), 1);
    assert.deepEqual(onPointerMove.mock.calls[0].arguments, [touch, true]);
    assert.equal(onActivity.mock.callCount(), 1);
});

test('scrolling, pinch zoom, and link clicks retain native default behavior', t => {
    const { documentObject, canvas, socialLinks, onActivate } = setup(t);
    const touch = { clientX: 75, clientY: 90 };
    for (const type of ['touchstart', 'touchmove', 'touchend', 'touchcancel']) {
        for (const touches of [[], [touch], [touch, { clientX: 150, clientY: 90 }]]) {
            const event = inputEvent(type, { touches });
            assert.equal(documentObject.dispatchEvent(event), true);
            assert.equal(event.defaultPrevented, false);
        }
    }
    for (const target of [documentObject, socialLinks, canvas]) {
        const click = inputEvent('click');
        assert.equal(target.dispatchEvent(click), true);
        assert.equal(click.defaultPrevented, false);
    }
    assert.equal(onActivate.mock.callCount(), 1, 'only canvas clicks enter the hit-test path');
});

test('multiple fingers do not change the pose and cancellation cannot block a later gesture', t => {
    const { documentObject, onPointerMove, onActivate } = setup(t);
    const first = { identifier: 1, clientX: 75, clientY: 90 };
    const second = { identifier: 2, clientX: 150, clientY: 90 };
    documentObject.dispatchEvent(inputEvent('touchstart', { touches: [first] }));
    documentObject.dispatchEvent(inputEvent('touchstart', { touches: [first, second] }));
    documentObject.dispatchEvent(inputEvent('touchmove', { touches: [first, second] }));
    documentObject.dispatchEvent(inputEvent('touchcancel', { touches: [] }));
    assert.equal(onPointerMove.mock.callCount(), 1);
    assert.equal(onActivate.mock.callCount(), 0);

    documentObject.dispatchEvent(inputEvent('touchstart', { touches: [second] }));
    assert.equal(onPointerMove.mock.callCount(), 2);
    assert.deepEqual(onPointerMove.mock.calls.at(-1).arguments, [second, true]);
});

test('a touch tap activates only through its synthesized click', t => {
    const { documentObject, canvas, onActivate } = setup(t);
    const touch = { pointerType: 'touch', isPrimary: true };
    documentObject.dispatchEvent(inputEvent('pointerdown', touch));
    documentObject.dispatchEvent(inputEvent('touchstart', { touches: [{ clientX: 75, clientY: 90 }] }));
    canvas.dispatchEvent(inputEvent('pointerup', touch));
    documentObject.dispatchEvent(inputEvent('touchend', { touches: [] }));
    assert.equal(onActivate.mock.callCount(), 0);

    const click = inputEvent('click', touch);
    canvas.dispatchEvent(click);
    assert.equal(onActivate.mock.callCount(), 1);
    assert.deepEqual(onActivate.mock.calls[0].arguments, [click]);
});

test('Enter and Space retain keyboard activation', t => {
    const { container, onActivate } = setup(t);
    for (const key of ['Enter', ' ']) {
        const event = inputEvent('keydown', { key });
        container.dispatchEvent(event);
        assert.equal(event.defaultPrevented, true);
    }
    const unrelatedKey = inputEvent('keydown', { key: 'ArrowRight' });
    container.dispatchEvent(unrelatedKey);
    assert.equal(unrelatedKey.defaultPrevented, false);
    assert.equal(onActivate.mock.callCount(), 2);
});

const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA',
];

test('the Konami easter egg resets after a mismatch and can be repeated', t => {
    const { documentObject, onKonami, onActivity } = setup(t);
    function press(code) {
        documentObject.dispatchEvent(inputEvent('keydown', { code }));
    }
    konamiCode.slice(0, 4).forEach(press);
    press('KeyX');
    konamiCode.slice(4).forEach(press);
    assert.equal(onKonami.mock.callCount(), 0);

    konamiCode.forEach(press);
    assert.equal(onKonami.mock.callCount(), 1);
    konamiCode.forEach(press);
    assert.equal(onKonami.mock.callCount(), 2);
    assert.equal(onActivity.mock.callCount(), 31);
});

test('social expressions follow mouse/pen hover and ignore touch compatibility hover', t => {
    const { socialLinks, onSocialEnter, onSocialLeave } = setup(t);
    for (const pointerType of ['mouse', 'pen']) {
        socialLinks.dispatchEvent(inputEvent('pointerenter', { pointerType }));
        socialLinks.dispatchEvent(inputEvent('pointerleave', { pointerType }));
    }
    assert.equal(onSocialEnter.mock.callCount(), 2);
    assert.equal(onSocialLeave.mock.callCount(), 2);
    socialLinks.dispatchEvent(inputEvent('pointerenter', { pointerType: 'touch' }));
    socialLinks.dispatchEvent(inputEvent('mouseenter'));
    socialLinks.dispatchEvent(inputEvent('pointerleave', { pointerType: 'touch' }));
    assert.equal(onSocialEnter.mock.callCount(), 2, 'a touch cannot leave a sticky hover expression');
    assert.equal(onSocialLeave.mock.callCount(), 2);
});

test('disposing removes every interaction listener', t => {
    const harness = setup(t);
    const { documentObject, canvas, container, socialLinks, dispose } = harness;
    dispose();

    documentObject.dispatchEvent(inputEvent('pointermove', { pointerType: 'mouse' }));
    documentObject.dispatchEvent(inputEvent('pointerdown', { pointerType: 'touch' }));
    documentObject.dispatchEvent(inputEvent('touchstart', { touches: [{ clientX: 20, clientY: 800 }] }));
    documentObject.dispatchEvent(inputEvent('touchmove', { touches: [{ clientX: 40, clientY: 750 }] }));
    canvas.dispatchEvent(inputEvent('click'));
    const enter = inputEvent('keydown', { key: 'Enter' });
    container.dispatchEvent(enter);
    assert.equal(enter.defaultPrevented, false);
    for (const code of konamiCode) {
        documentObject.dispatchEvent(inputEvent('keydown', { code }));
    }
    socialLinks.dispatchEvent(inputEvent('pointerenter', { pointerType: 'mouse' }));
    socialLinks.dispatchEvent(inputEvent('pointerleave', { pointerType: 'mouse' }));

    for (const [name, callback] of Object.entries(harness)) {
        if (name.startsWith('on')) assert.equal(callback.mock.callCount(), 0, name);
    }
});
