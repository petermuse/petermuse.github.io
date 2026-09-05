const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA',
];

export function bindHeadInteractions({
    documentObject, container, canvas, socialLinks,
    onActivity, onPointerMove, onActivate, onSocialEnter, onSocialLeave, onKonami,
}) {
    const removers = [];
    let konamiIndex = 0;
    function listen(target, type, callback, options) {
        if (!target) return;
        target.addEventListener(type, callback, options);
        removers.push(() => target.removeEventListener(type, callback, options));
    }

    // Pointer streams can be canceled when Safari starts scrolling. Observe
    // touches separately so page-wide tracking can coexist with native gestures.
    listen(documentObject, 'pointermove', event => {
        if (event.pointerType === 'touch') return;
        onActivity();
        onPointerMove(event, false);
    }, { passive: true });
    listen(documentObject, 'pointerdown', event => {
        if (event.pointerType !== 'touch') onActivity(event);
    }, { passive: true });
    function trackTouch(event) {
        onActivity(event);
        if (event.touches.length === 1) onPointerMove(event.touches[0], true);
    }
    listen(documentObject, 'touchstart', trackTouch, { passive: true });
    listen(documentObject, 'touchmove', trackTouch, { passive: true });

    // The browser synthesizes a click for a tap, avoiding duplicate touch/click paths.
    listen(canvas, 'click', event => onActivate(event));
    listen(container, 'keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onActivate();
        }
    });
    listen(documentObject, 'keydown', event => {
        onActivity(event);
        if (event.code === KONAMI_CODE[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === KONAMI_CODE.length) {
                onKonami();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    // Touch taps may synthesize mouseenter without a matching mouseleave.
    // Pointer events identify real mouse/pen hover without those sticky states.
    listen(socialLinks, 'pointerenter', event => {
        if (event.pointerType !== 'touch') onSocialEnter();
    });
    listen(socialLinks, 'pointerleave', event => {
        if (event.pointerType !== 'touch') onSocialLeave();
    });
    return () => removers.forEach(remove => remove());
}
