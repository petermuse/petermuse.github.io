async function loadHead() {
    try {
        const { initHead } = await import('./head-scene.js');
        initHead();
    } catch (error) {
        console.error('Unable to initialize the avatar.', error);
        const container = document.getElementById('head-container');
        container.textContent = '';
        container.removeAttribute('tabindex');
        container.setAttribute('aria-label', 'Avatar unavailable');
    }
}

// Let the name and links paint before downloading or evaluating the 3D bundle.
// An idle deadline prevents initialization from waiting indefinitely on busy pages.
requestAnimationFrame(() => requestAnimationFrame(() => {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadHead, { timeout: 2000 });
    } else {
        window.setTimeout(loadHead, 0);
    }
}));
