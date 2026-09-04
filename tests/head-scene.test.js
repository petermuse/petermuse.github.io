import assert from 'node:assert/strict';
import test from 'node:test';
import { Vector3 } from '../assets/vendor/three-local@0.128.0/build/three.module.js';
import { initHead } from '../src/head-scene.js';

function event(type, properties = {}) {
    return Object.assign(new Event(type, { bubbles: true, cancelable: true }), properties);
}

class Element extends EventTarget {
    constructor(tagName = 'div') {
        super();
        this.tagName = tagName;
        this.children = [];
        this.hidden = false;
        const classes = new Set();
        this.classList = {
            add: name => classes.add(name),
            remove: name => classes.delete(name),
            contains: name => classes.has(name),
        };
    }

    appendChild(child) {
        child.parentElement = this;
        this.children.push(child);
        return child;
    }

    remove() {
        if (!this.parentElement) return;
        this.parentElement.children = this.parentElement.children.filter(child => child !== this);
        this.parentElement = null;
    }

    setAttribute(name, value) { this[name] = value; }

    querySelector(selector) {
        for (const child of this.children) {
            if (selector.startsWith('#') && child.id === selector.slice(1)) return child;
            if (selector === 'button.active' && child.tagName === 'button' && child.classList.contains('active')) return child;
            const descendant = child.querySelector(selector);
            if (descendant) return descendant;
        }
        return null;
    }
}

class MediaQuery extends EventTarget {
    constructor(media, matches) {
        super();
        this.media = media;
        this.matches = matches;
    }

    setMatches(matches) {
        this.matches = matches;
        this.dispatchEvent(event('change'));
    }
}

// Inspect the actual visible mouth geometry rather than exposing animation state
// solely for tests. Segment count distinguishes the two circular expressions;
// the width distinguishes the smile from the wider giggle.
function expressionOf(head) {
    const mouth = head.children.find(child => child.visible && child.isGroup
        && child.position.z === 1 && child.children.length === 1 && child.children[0].isLine2);
    assert.ok(mouth, 'a mouth expression should be visible');
    const points = mouth.children[0].geometry.getAttribute('instanceStart');
    if (points.count === 16) return 'whistling';
    if (points.count === 18) return 'awed';
    return points.getX(0) < -0.375 ? 'giggling' : 'normal';
}

function setup(t, { reduced = false } = {}) {
    t.mock.timers.enable({ apis: ['Date'], now: new Date('2026-09-04T19:00:00Z') });
    const container = new Element();
    Object.assign(container, { id: 'head-container', clientWidth: 320, clientHeight: 240 });
    const nameElement = new Element('h1');
    const socialLinks = new Element();
    const body = new Element('body');
    body.appendChild(container);
    body.appendChild(nameElement);
    body.appendChild(socialLinks);
    const documentObject = Object.assign(new EventTarget(), {
        hidden: false,
        body,
        getElementById: id => body.querySelector(`#${id}`),
        querySelector: selector => ({ '.name': nameElement, '.social-links': socialLinks }[selector] || body.querySelector(selector)),
        createElement: tagName => new Element(tagName),
    });
    const frames = new Map();
    const intervals = new Map();
    const mediaQueries = [];
    const reducedMotion = new MediaQuery('(prefers-reduced-motion: reduce)', reduced);
    let nextId = 1;
    let now = 0;
    const windowObject = Object.assign(new EventTarget(), {
        innerWidth: 1000,
        innerHeight: 800,
        devicePixelRatio: 1,
        performance: { now: () => now },
        getComputedStyle: () => ({ fontSize: '83.2px' }),
        matchMedia(query) {
            if (query === reducedMotion.media) return reducedMotion;
            const media = new MediaQuery(query, true);
            mediaQueries.push(media);
            return media;
        },
        requestAnimationFrame(callback) {
            const id = nextId++;
            frames.set(id, callback);
            return id;
        },
        cancelAnimationFrame: id => frames.delete(id),
        setInterval(callback, delay) {
            const id = nextId++;
            intervals.set(id, { callback, delay });
            return id;
        },
        clearInterval: id => intervals.delete(id),
    });
    const canvas = new Element('canvas');
    canvas.getBoundingClientRect = () => ({ left: 100, top: 50, width: renderer.width, height: renderer.height });
    const renderer = {
        domElement: canvas,
        pixelRatio: 1,
        renders: 0,
        disposals: 0,
        setClearColor() {},
        getPixelRatio() { return this.pixelRatio; },
        setPixelRatio(value) { this.pixelRatio = value; },
        setSize(width, height) { Object.assign(this, { width, height }); },
        render(scene, camera) {
            scene.updateMatrixWorld(true);
            const head = scene.getObjectByName('headRaycastTarget').parent;
            const decorations = scene.children.filter(child => child.isGroup && child !== head);
            const notes = decorations.find(group => group.children.some(child => child.children.length === 2));
            const zzz = decorations.find(group => group !== notes);
            const line = head.children.find(child => child.isLine2);
            this.scene = scene;
            this.camera = camera;
            this.head = head;
            this.last = {
                expression: expressionOf(head),
                rotation: head.rotation.toArray().slice(0, 3),
                headY: head.position.y,
                notesVisible: notes.visible,
                zzzVisible: zzz.visible,
                opacity: line.material.opacity,
                lineResolution: line.material.resolution.toArray(),
            };
            this.renders++;
        },
        dispose() { this.disposals++; },
    };
    const teardown = initHead({ windowObject, documentObject, createRenderer: () => renderer });
    let disposed = false;
    function dispose() {
        if (disposed) return;
        disposed = true;
        teardown();
    }
    t.after(dispose);
    return {
        container, socialLinks, documentObject, windowObject, reducedMotion,
        mediaQueries, renderer, canvas, frames, intervals, dispose,
        frame(delta = 1000 / 60) {
            now += delta;
            // Only callbacks already pending belong to this display frame.
            for (const [id, callback] of [...frames]) {
                if (!frames.delete(id)) continue;
                callback(now);
            }
        },
        runIntervals(elapsedMilliseconds) {
            now += elapsedMilliseconds;
            for (const { callback } of [...intervals.values()]) callback();
        },
        setDensity(value) {
            windowObject.devicePixelRatio = value;
            mediaQueries.at(-1).setMatches(false);
        },
        press(code, key = code) { documentObject.dispatchEvent(event('keydown', { code, key })); },
    };
}

function assertFiniteScene(renderer) {
    renderer.scene.traverse(object => {
        for (const value of [
            ...object.position.toArray(), ...object.rotation.toArray().slice(0, 3),
            ...object.scale.toArray(), ...object.matrixWorld.elements,
        ]) assert.ok(Number.isFinite(value), `${object.type} transform must be finite`);
    });
    assert.ok(Number.isFinite(renderer.last.opacity));
}

test('initial reduced motion renders a finite static head without frames or recurring work', t => {
    const app = setup(t, { reduced: true });
    assert.equal(app.frames.size, 0);
    assert.equal(app.intervals.size, 0);
    assert.ok(app.renderer.renders >= 1);
    assert.deepEqual(app.renderer.last.rotation, [0, 0, 0]);
    assert.equal(app.renderer.last.expression, 'normal');
    assert.equal(app.renderer.last.notesVisible, false);
    assert.equal(app.renderer.last.zzzVisible, false);
    assertFiniteScene(app.renderer);

    app.documentObject.dispatchEvent(event('pointermove', { pointerType: 'mouse', clientX: 900, clientY: 600 }));
    app.canvas.dispatchEvent(event('click', { clientX: 260, clientY: 200 }));
    app.container.dispatchEvent(event('keydown', { key: 'Enter' }));
    assert.equal(app.frames.size, 0);
    assert.equal(app.intervals.size, 0);
    assert.deepEqual(app.renderer.last.rotation, [0, 0, 0]);
    assert.equal(app.renderer.last.expression, 'normal');
});

test('changing the motion preference resumes cursor following and returns to a static frame', t => {
    const app = setup(t, { reduced: true });
    app.reducedMotion.setMatches(false);
    assert.equal(app.frames.size, 1);
    assert.equal(app.intervals.size, 1);
    app.frame();
    app.documentObject.dispatchEvent(event('pointermove', { pointerType: 'mouse', clientX: 900, clientY: 600 }));
    for (let index = 0; index < 15; index++) app.frame();
    assert.ok(app.renderer.last.rotation[0] > 0);
    assert.ok(app.renderer.last.rotation[1] > 0);

    app.reducedMotion.setMatches(true);
    assert.equal(app.frames.size, 0);
    assert.equal(app.intervals.size, 0);
    assert.deepEqual(app.renderer.last.rotation, [0, 0, 0]);
    assert.equal(app.renderer.last.notesVisible, false);
    assertFiniteScene(app.renderer);
    app.reducedMotion.setMatches(false);
    app.frame(60000);
    assert.deepEqual(app.renderer.last.rotation, [0, 0, 0], 'resuming must not restore stale cursor movement');
    assert.equal(app.frames.size, 1);
    assert.equal(app.intervals.size, 1);
});

test('visibility and page-cache lifecycle stop and restart a single animation loop', t => {
    const app = setup(t);
    app.frame();
    app.documentObject.hidden = true;
    app.documentObject.dispatchEvent(event('visibilitychange'));
    assert.equal(app.frames.size, 0);
    assert.equal(app.intervals.size, 0);
    const rendersWhileHidden = app.renderer.renders;
    app.frame(30000);
    assert.equal(app.renderer.renders, rendersWhileHidden);

    app.documentObject.hidden = false;
    app.documentObject.dispatchEvent(event('visibilitychange'));
    assert.equal(app.frames.size, 1);
    assert.equal(app.intervals.size, 1);
    app.frame();
    app.windowObject.dispatchEvent(event('pagehide'));
    assert.equal(app.frames.size, 0);
    assert.equal(app.intervals.size, 0);
    app.windowObject.dispatchEvent(event('pageshow'));
    app.frame(30000);
    assert.equal(app.frames.size, 1, 'one continuous frame remains after the one-time resize');
    assert.equal(app.intervals.size, 1);
    assertFiniteScene(app.renderer);
});

test('click raycasting and keyboard activation trigger the giggle and recover to normal', t => {
    const app = setup(t);
    app.frame();
    app.canvas.dispatchEvent(event('click', { clientX: 100, clientY: 50 }));
    app.frame();
    assert.equal(app.renderer.last.expression, 'normal', 'empty canvas must not activate the head');

    const target = app.renderer.scene.getObjectByName('headRaycastTarget');
    const center = target.getWorldPosition(new Vector3()).project(app.renderer.camera);
    const rect = app.canvas.getBoundingClientRect();
    app.canvas.dispatchEvent(event('click', {
        clientX: rect.left + (center.x + 1) * rect.width / 2,
        clientY: rect.top + (1 - center.y) * rect.height / 2,
    }));
    app.frame();
    assert.equal(app.renderer.last.expression, 'giggling');
    assert.notEqual(app.renderer.last.headY, -0.15);
    for (let index = 0; index < 132; index++) app.frame();
    assert.equal(app.renderer.last.expression, 'normal');
    assert.equal(app.renderer.last.headY, -0.15);

    const key = event('keydown', { key: 'Enter', code: 'Enter' });
    app.container.dispatchEvent(key);
    app.documentObject.dispatchEvent(key);
    app.frame();
    assert.equal(key.defaultPrevented, true);
    assert.equal(app.renderer.last.expression, 'giggling');
    assertFiniteScene(app.renderer);
});

test('density media changes resize the actual scene without a CSS resize event', t => {
    const app = setup(t);
    const initialSize = [app.renderer.width, app.renderer.height];
    app.setDensity(2);
    app.frame();
    assert.equal(app.renderer.getPixelRatio(), 2);
    assert.deepEqual([app.renderer.width, app.renderer.height], initialSize);
    assert.deepEqual(app.renderer.last.lineResolution, initialSize);
    assert.equal(app.renderer.camera.aspect, initialSize[0] / initialSize[1]);
    assert.equal(app.mediaQueries.at(-1).media, '(resolution: 2dppx)');
    app.setDensity(3);
    app.frame();
    assert.equal(app.renderer.getPixelRatio(), 2);
    app.setDensity(1);
    app.frame();
    assert.equal(app.renderer.getPixelRatio(), 1);
    assert.equal(app.frames.size, 1);
});

function enterKonami(app) {
    for (const code of [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA',
    ]) app.press(code);
}

test('a manual Whistling choice persists across reduced-motion changes', t => {
    const app = setup(t, { reduced: true });
    enterKonami(app);
    const panel = app.documentObject.getElementById('state-toggle');
    assert.ok(panel);
    const button = panel.querySelector('#whistling-btn');
    button.dispatchEvent(event('click'));
    assert.equal(button.classList.contains('active'), true);
    assert.equal(app.renderer.last.expression, 'whistling');
    assert.equal(app.renderer.last.notesVisible, false);
    assert.equal(app.frames.size, 0);

    app.reducedMotion.setMatches(false);
    app.frame();
    assert.equal(app.renderer.last.expression, 'whistling');
    assert.equal(app.renderer.last.notesVisible, true);
    app.documentObject.dispatchEvent(event('pointermove', { pointerType: 'mouse', clientX: 900, clientY: 600 }));
    app.frame();
    assert.equal(app.renderer.last.expression, 'whistling', 'activity must respect the manual selection');
    app.reducedMotion.setMatches(true);
    assert.equal(app.renderer.last.expression, 'whistling');
    assert.equal(app.renderer.last.notesVisible, false);
    app.reducedMotion.setMatches(false);
    app.frame();
    assert.equal(app.renderer.last.notesVisible, true);
});

test('an interrupted social hover clears on hiding and cannot prevent later idle animation', t => {
    const app = setup(t);
    app.socialLinks.dispatchEvent(event('mouseenter'));
    app.frame();
    assert.equal(app.renderer.last.expression, 'awed');
    app.documentObject.hidden = true;
    app.documentObject.dispatchEvent(event('visibilitychange'));
    // Browsers need not send mouseleave while a page is hidden.
    app.documentObject.hidden = false;
    app.documentObject.dispatchEvent(event('visibilitychange'));
    app.frame();
    assert.equal(app.renderer.last.expression, 'normal');
    app.runIntervals(11000);
    app.frame();
    assert.equal(app.renderer.last.expression, 'whistling');
    assert.equal(app.renderer.last.notesVisible, true);
});

test('disposing removes pending work, DOM additions, listeners, and geometry resources', t => {
    const app = setup(t);
    enterKonami(app);
    app.windowObject.dispatchEvent(event('resize'));
    let geometriesDisposed = 0;
    app.renderer.scene.traverse(object => {
        object.geometry?.addEventListener('dispose', () => geometriesDisposed++);
    });
    app.dispose();
    assert.equal(app.frames.size, 0);
    assert.equal(app.intervals.size, 0);
    assert.equal(app.renderer.disposals, 1);
    assert.ok(geometriesDisposed > 0);
    assert.equal(app.canvas.parentElement, null);
    assert.equal(app.documentObject.getElementById('state-toggle'), null);

    const renderCount = app.renderer.renders;
    app.windowObject.dispatchEvent(event('resize'));
    app.windowObject.dispatchEvent(event('pageshow'));
    app.reducedMotion.setMatches(true);
    app.setDensity(2);
    enterKonami(app);
    assert.equal(app.frames.size, 0);
    assert.equal(app.intervals.size, 0);
    assert.equal(app.renderer.renders, renderCount);
    assert.equal(app.documentObject.getElementById('state-toggle'), null);
});
