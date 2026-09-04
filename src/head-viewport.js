import { ANIMATION, CANVAS_TOP_EXTENSION, MAX_PIXEL_RATIO } from './head-config.js';

export function readViewport(windowObject) {
    const { innerWidth: width, innerHeight: height } = windowObject;
    const pixelRatio = windowObject.devicePixelRatio || 1;
    return {
        width,
        height,
        pixelRatio,
        cappedPixelRatio: Math.min(pixelRatio, MAX_PIXEL_RATIO),
        scaleMultiplier: pixelRatio >= 2 ? 1.06 : 1,
        baseY: width > height && height <= 500 ? -0.1 : -0.15,
    };
}

export function resizeHead({ container, renderer, camera, lineMaterial, head, nameElement, windowObject }) {
    const viewport = readViewport(windowObject);
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, Math.round(container.clientHeight * (1 + CANVAS_TOP_EXTENSION)));
    if (renderer.getPixelRatio() !== viewport.cappedPixelRatio) {
        renderer.setPixelRatio(viewport.cappedPixelRatio);
    }
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.position.set(0, CANVAS_TOP_EXTENSION * 0.5, 5.5);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld(true);

    // LineMaterial expects the visible viewport's aspect ratio. Keep the established
    // stroke weight at each density while using the actual extended canvas height.
    lineMaterial.resolution.set(width, height);
    lineMaterial.linewidth = ANIMATION.LINE_WIDTH_BASE * (viewport.pixelRatio >= 2 ? 1.12 : 1)
        * height / Math.max(1, container.clientHeight) / viewport.cappedPixelRatio;
    const fontSize = parseFloat(windowObject.getComputedStyle(nameElement).fontSize);
    const scale = Math.max(0.5, Math.min(1.8, 1.35 * (fontSize / 83.2) * viewport.scaleMultiplier));
    head.scale.setScalar(scale);
    return viewport;
}

// Moving a window between monitors need not change its CSS dimensions.
export function observePixelRatio(windowObject, onChange) {
    let media;
    function watch() {
        media?.removeEventListener('change', changed);
        media = windowObject.matchMedia(`(resolution: ${windowObject.devicePixelRatio || 1}dppx)`);
        media.addEventListener('change', changed);
    }
    function changed() {
        watch();
        onChange();
    }
    watch();
    return () => media.removeEventListener('change', changed);
}
