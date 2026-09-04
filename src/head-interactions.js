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

    // Mouse/pen tracking remains page-wide. The canvas reserves one-finger drags
    // in CSS; pinch zoom and scrolling elsewhere retain their native behavior.
    listen(documentObject, 'pointermove', event => {
        if (event.pointerType === 'touch') return;
        onActivity();
        onPointerMove(event, false);
    }, { passive: true });
    listen(documentObject, 'pointerdown', onActivity, { passive: true });
    listen(canvas, 'pointerdown', event => {
        if (event.pointerType !== 'touch' || !event.isPrimary) return;
        // React at first contact, including a stationary tap. Activity is recorded
        // once when this same event bubbles to the document.
        onPointerMove(event, true);
    }, { passive: true });
    listen(canvas, 'pointermove', event => {
        if (event.pointerType !== 'touch' || !event.isPrimary) return;
        onActivity();
        onPointerMove(event, true);
    }, { passive: true });

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
    listen(socialLinks, 'mouseenter', onSocialEnter);
    listen(socialLinks, 'mouseleave', onSocialLeave);
    return () => removers.forEach(remove => remove());
}
