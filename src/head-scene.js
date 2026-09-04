import { Scene, PerspectiveCamera, WebGLRenderer, Raycaster, Vector2 } from '../assets/vendor/three-local@0.128.0/build/three.module.js';
import { LineMaterial } from '../assets/vendor/three-local@0.128.0/examples/jsm/lines/LineMaterial.js';
import { createHeadGeometry } from './head-geometry.js';
import { ANIMATION, STATE } from './head-config.js';
import { createAnimationLoop, updateHeadAnimation } from './head-animation.js';
import { bindHeadInteractions } from './head-interactions.js';
import { observePixelRatio, resizeHead } from './head-viewport.js';

export function initHead({
    windowObject = window,
    documentObject = document,
    createRenderer = options => new WebGLRenderer(options),
} = {}) {
    const container = documentObject.getElementById('head-container');
    const nameElement = documentObject.querySelector('.name');
    if (!container || !nameElement) throw new Error('Avatar elements are missing.');

    const scene = new Scene();
    const camera = new PerspectiveCamera(45, 1, 0.1, 1000);
    scene.add(camera);
    const renderer = createRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: false });
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);
    const lineMaterial = new LineMaterial({ color: 0x00ff00, transparent: true, opacity: 0.8 });
    lineMaterial.color.setRGB(0, 1, 0.1);
    const parts = createHeadGeometry(lineMaterial);
    const { head, headRaycastTarget, zzzGroup, musicNotesGroup, archEyebrows } = parts;
    scene.add(head, zzzGroup, musicNotesGroup);

    const model = { head, zzzGroup, musicNotesGroup, lineMaterial,
        state: null, baseY: -0.15, mouseX: 0, mouseY: 0, giggleStart: 0 };
    const reducedMotion = windowObject.matchMedia('(prefers-reduced-motion: reduce)');
    const sleepHour = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles', hour: 'numeric', hourCycle: 'h23',
    });
    const raycaster = new Raycaster();
    const pointer = new Vector2();
    const removers = [];
    let viewport;
    let autoStateEnabled = true;
    let lastActivity = windowObject.performance.now();
    let stateTogglePanel = null;
    let activeButtonId = 'auto-btn';
    let intervalId = null;
    let resizeFrame = null;
    let pageActive = true;
    let disposed = false;

    const loop = createAnimationLoop({
        requestFrame: callback => windowObject.requestAnimationFrame(callback),
        cancelFrame: id => windowObject.cancelAnimationFrame(id),
        update(dt, elapsed) {
            if (updateHeadAnimation(model, dt, elapsed)) switchToState(STATE.NORMAL);
        },
        render,
    });

    function render() {
        renderer.render(scene, camera);
    }

    function motionAllowed() {
        return !disposed && pageActive && !documentObject.hidden && !reducedMotion.matches;
    }

    function isCaliforniaSleepTime() {
        const hour = Number(sleepHour.format(new Date()));
        return hour >= ANIMATION.SLEEP_HOURS_START || hour < ANIMATION.SLEEP_HOURS_END;
    }

    function updateActiveButton(buttonId) {
        activeButtonId = buttonId;
        if (!stateTogglePanel) return;
        stateTogglePanel.querySelector('button.active')?.classList.remove('active');
        stateTogglePanel.querySelector(`#${buttonId}`)?.classList.add('active');
    }

    function switchToState(state) {
        if (model.state === state) return;
        model.state = state;
        head.position.y = model.baseY;
        parts.leftEyeOpen.visible = parts.rightEyeOpen.visible = state !== STATE.SLEEPING;
        parts.leftEyeClosed.visible = parts.rightEyeClosed.visible = state === STATE.SLEEPING;
        parts.normalMouth.visible = state === STATE.NORMAL || state === STATE.SLEEPING;
        parts.whistlingMouth.visible = state === STATE.WHISTLING;
        parts.gigglingMouth.visible = state === STATE.GIGGLING;
        parts.awedMouth.visible = state === STATE.AWED;
        parts.eyebrows.visible = state !== STATE.SLEEPING;
        zzzGroup.visible = state === STATE.SLEEPING;
        musicNotesGroup.visible = state === STATE.WHISTLING;
        archEyebrows(state === STATE.GIGGLING || state === STATE.AWED);
        if (state === STATE.WHISTLING) {
            musicNotesGroup.children.forEach((note, index) => {
                note.position.y = 1.5 + index * 0.2;
                note.position.x = 0.1 + index * 0.15;
            });
        }
        if (state === STATE.GIGGLING) model.giggleStart = loop.elapsed;
    }

    function checkState() {
        if (!autoStateEnabled) return;
        const sleeping = isCaliforniaSleepTime();
        if (model.state === STATE.AWED || model.state === STATE.GIGGLING) return;
        if (sleeping) {
            switchToState(STATE.SLEEPING);
        } else if (model.state === null || model.state === STATE.SLEEPING) {
            switchToState(STATE.NORMAL);
        } else if (model.state === STATE.NORMAL
            && windowObject.performance.now() - lastActivity >= ANIMATION.INACTIVITY_THRESHOLD_MS) {
            switchToState(STATE.WHISTLING);
        }
    }

    function recordActivity(event) {
        lastActivity = windowObject.performance.now();
        const activeState = model.state === STATE.WHISTLING
            || (event?.type === 'keydown' && model.state === STATE.AWED);
        if (motionAllowed() && autoStateEnabled && activeState && !isCaliforniaSleepTime()) {
            switchToState(STATE.NORMAL);
        }
    }

    function activateHead(event) {
        if (!motionAllowed() || isCaliforniaSleepTime()
            || [STATE.SLEEPING, STATE.GIGGLING, STATE.AWED].includes(model.state)) return;
        if (event) {
            const rect = renderer.domElement.getBoundingClientRect();
            pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1,
                -((event.clientY - rect.top) / rect.height) * 2 + 1);
            scene.updateMatrixWorld(true);
            raycaster.setFromCamera(pointer, camera);
            if (!raycaster.intersectObject(headRaycastTarget, false).length) return;
        }
        lastActivity = windowObject.performance.now();
        switchToState(STATE.GIGGLING);
    }

    function showStatePanel() {
        if (stateTogglePanel) {
            stateTogglePanel.hidden = !stateTogglePanel.hidden;
            return;
        }
        stateTogglePanel = documentObject.createElement('div');
        stateTogglePanel.id = 'state-toggle';
        stateTogglePanel.setAttribute('data-nosnippet', '');
        const heading = documentObject.createElement('h3');
        heading.textContent = 'Head States';
        stateTogglePanel.appendChild(heading);
        for (const [id, label, state] of [
            ['normal-btn', 'Normal', STATE.NORMAL],
            ['whistling-btn', 'Whistling', STATE.WHISTLING],
            ['sleeping-btn', 'Sleeping', STATE.SLEEPING],
            ['auto-btn', 'Auto', null],
        ]) {
            const button = documentObject.createElement('button');
            button.id = id;
            button.type = 'button';
            button.textContent = label;
            button.addEventListener('click', () => {
                autoStateEnabled = state === null;
                if (state) switchToState(state);
                else checkState();
                updateActiveButton(id);
                if (reducedMotion.matches) showStaticHead();
            });
            stateTogglePanel.appendChild(button);
        }
        documentObject.body.appendChild(stateTogglePanel);
        updateActiveButton(activeButtonId);
    }

    function resize() {
        resizeFrame = null;
        viewport = resizeHead({ container, renderer, camera, lineMaterial, head, nameElement, windowObject });
        model.baseY = viewport.baseY;
        head.position.y = model.baseY;
        if (reducedMotion.matches) showStaticHead();
        else render();
    }

    function scheduleResize() {
        if (resizeFrame === null && !disposed) resizeFrame = windowObject.requestAnimationFrame(resize);
    }

    function showStaticHead() {
        // Keep the selected expression, including manual Konami choices, while
        // suppressing movement and floating decorations.
        head.rotation.set(0, 0, 0);
        head.position.y = model.baseY;
        model.mouseX = model.mouseY = 0;
        zzzGroup.visible = musicNotesGroup.visible = false;
        lineMaterial.opacity = ANIMATION.SLEEP_OPACITY;
        render();
    }

    function syncMotion() {
        loop.stop();
        if (intervalId !== null) windowObject.clearInterval(intervalId);
        intervalId = null;
        if (!motionAllowed()) {
            if (model.state === STATE.AWED) switchToState(STATE.NORMAL);
            if (reducedMotion.matches && pageActive && !documentObject.hidden) showStaticHead();
            return;
        }
        // Re-enter the state so decorations hidden for reduced motion are restored.
        const previousState = model.state;
        model.state = null;
        switchToState(previousState || STATE.NORMAL);
        lastActivity = windowObject.performance.now();
        checkState();
        intervalId = windowObject.setInterval(checkState, 1000);
        loop.start();
    }

    function listen(target, type, callback) {
        target.addEventListener(type, callback);
        removers.push(() => target.removeEventListener(type, callback));
    }

    removers.push(bindHeadInteractions({
        documentObject, container, canvas: renderer.domElement,
        socialLinks: documentObject.querySelector('.social-links'),
        onActivity: recordActivity,
        onPointerMove(event, isTouch) {
            if (!motionAllowed()) return;
            const rect = isTouch ? renderer.domElement.getBoundingClientRect() : null;
            model.mouseX = (event.clientX - (rect ? rect.left + rect.width / 2 : viewport.width / 2)) / 50;
            model.mouseY = (event.clientY - (rect ? rect.top + rect.height / 2 : viewport.height / 2)) / 50;
        },
        onActivate: activateHead,
        onSocialEnter() {
            if (motionAllowed() && !isCaliforniaSleepTime()
                && [STATE.NORMAL, STATE.WHISTLING].includes(model.state)) {
                lastActivity = windowObject.performance.now();
                switchToState(STATE.AWED);
            }
        },
        onSocialLeave() {
            if (model.state === STATE.AWED) {
                switchToState(STATE.NORMAL);
                if (motionAllowed()) checkState();
            }
        },
        onKonami: showStatePanel,
    }));
    listen(windowObject, 'resize', scheduleResize);
    listen(reducedMotion, 'change', syncMotion);
    listen(documentObject, 'visibilitychange', syncMotion);
    listen(windowObject, 'pagehide', () => { pageActive = false; syncMotion(); });
    listen(windowObject, 'pageshow', () => { pageActive = true; scheduleResize(); syncMotion(); });
    removers.push(observePixelRatio(windowObject, scheduleResize));
    if (windowObject.ResizeObserver) {
        const observer = new windowObject.ResizeObserver(scheduleResize);
        observer.observe(container);
        observer.observe(nameElement);
        removers.push(() => observer.disconnect());
    }

    checkState();
    resize();
    syncMotion();

    return function dispose() {
        disposed = true;
        loop.stop();
        if (intervalId !== null) windowObject.clearInterval(intervalId);
        if (resizeFrame !== null) windowObject.cancelAnimationFrame(resizeFrame);
        removers.forEach(remove => remove());
        const geometries = new Set();
        const materials = new Set([lineMaterial]);
        scene.traverse(object => {
            if (object.geometry) geometries.add(object.geometry);
            if (object.material) materials.add(object.material);
        });
        geometries.forEach(geometry => geometry.dispose());
        materials.forEach(material => material.dispose());
        renderer.dispose();
        renderer.domElement.remove();
        stateTogglePanel?.remove();
    };
}
