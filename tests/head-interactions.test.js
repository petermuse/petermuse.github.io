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

test('touch outside the canvas and secondary canvas touches do not track', t => {
    const { documentObject, canvas, onPointerMove, onActivity } = setup(t);
    documentObject.dispatchEvent(inputEvent('pointermove', {
        pointerType: 'touch', isPrimary: true,
    }));
    canvas.dispatchEvent(inputEvent('pointermove', {
        pointerType: 'touch', isPrimary: false,
    }));
    assert.equal(onPointerMove.mock.callCount(), 0);
    assert.equal(onActivity.mock.callCount(), 0);
});

test('a primary canvas touch tracks once when it reaches the document', t => {
    const { documentObject, canvas, onPointerMove, onActivity } = setup(t);
    const event = inputEvent('pointermove', {
        pointerType: 'touch', isPrimary: true, clientX: 75, clientY: 90,
    });
    // EventTarget has no DOM tree; dispatch at both levels to model propagation.
    canvas.dispatchEvent(event);
    documentObject.dispatchEvent(event);
    assert.equal(onPointerMove.mock.callCount(), 1);
    assert.deepEqual(onPointerMove.mock.calls[0].arguments, [event, true]);
    assert.equal(onActivity.mock.callCount(), 1);
});

test('pointer and touch gestures retain their native default behavior', t => {
    const { documentObject, canvas } = setup(t);
    const gestures = [
        [documentObject, 'pointermove', { pointerType: 'mouse' }],
        [documentObject, 'pointermove', { pointerType: 'touch', isPrimary: true }],
        [documentObject, 'pointerdown', { pointerType: 'touch', isPrimary: true }],
        [canvas, 'pointermove', { pointerType: 'touch', isPrimary: true }],
        [canvas, 'touchstart', {}],
        [canvas, 'touchmove', {}],
        [canvas, 'click', {}],
    ];
    for (const [target, type, properties] of gestures) {
        const event = inputEvent(type, properties);
        assert.equal(target.dispatchEvent(event), true, type);
        assert.equal(event.defaultPrevented, false, type);
    }
});

test('a touch tap activates only through its synthesized click', t => {
    const { documentObject, canvas, onActivate } = setup(t);
    const touch = { pointerType: 'touch', isPrimary: true };
    canvas.dispatchEvent(inputEvent('pointerdown', touch));
    documentObject.dispatchEvent(inputEvent('pointerdown', touch));
    canvas.dispatchEvent(inputEvent('touchstart'));
    canvas.dispatchEvent(inputEvent('pointerup', touch));
    canvas.dispatchEvent(inputEvent('touchend'));
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

test('social hover callbacks remain available', t => {
    const { socialLinks, onSocialEnter, onSocialLeave } = setup(t);
    socialLinks.dispatchEvent(inputEvent('mouseenter'));
    socialLinks.dispatchEvent(inputEvent('mouseleave'));
    assert.equal(onSocialEnter.mock.callCount(), 1);
    assert.equal(onSocialLeave.mock.callCount(), 1);
});

test('disposing removes every interaction listener', t => {
    const harness = setup(t);
    const { documentObject, canvas, container, socialLinks, dispose } = harness;
    dispose();

    documentObject.dispatchEvent(inputEvent('pointermove', { pointerType: 'mouse' }));
    documentObject.dispatchEvent(inputEvent('pointerdown', { pointerType: 'touch' }));
    canvas.dispatchEvent(inputEvent('pointermove', { pointerType: 'touch', isPrimary: true }));
    canvas.dispatchEvent(inputEvent('click'));
    const enter = inputEvent('keydown', { key: 'Enter' });
    container.dispatchEvent(enter);
    assert.equal(enter.defaultPrevented, false);
    for (const code of konamiCode) {
        documentObject.dispatchEvent(inputEvent('keydown', { code }));
    }
    socialLinks.dispatchEvent(inputEvent('mouseenter'));
    socialLinks.dispatchEvent(inputEvent('mouseleave'));

    for (const [name, callback] of Object.entries(harness)) {
        if (name.startsWith('on')) assert.equal(callback.mock.callCount(), 0, name);
    }
});
