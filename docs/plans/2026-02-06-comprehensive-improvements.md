# Comprehensive Site Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve performance, code quality, and accessibility of petermuse.github.io without changing core functionality or design.

**Architecture:** Split the monolithic index.html (1961 lines) into index.html + styles.css + main.js. Clean up unused assets, extract magic numbers into named constants, DRY up duplicated code, add keyboard accessibility, and generate a missing OG image.

**Tech Stack:** Vanilla HTML/CSS/JS, Three.js v0.128.0 (local vendor), GitHub Pages hosting

---

### Task 1: Extract CSS into styles.css

**Files:**
- Create: `styles.css`
- Modify: `index.html`

**Step 1: Create styles.css**

Extract everything between `<style>` and `</style>` (lines 83-496 of index.html) into a new `styles.css` file. The content is everything from the `@font-face` declarations through the `@media (prefers-reduced-motion)` block.

**Step 2: Fix font-display while extracting**

In the extracted CSS, change both `@font-face` declarations from:
```css
font-display: block;
```
to:
```css
font-display: swap;
```

**Step 3: Add focus-visible styles**

Append these rules to `styles.css` (after the existing CSS, before the media queries section):

```css
/* Keyboard accessibility */
#head-container:focus-visible {
    outline: 2px solid var(--head-color);
    outline-offset: -2px;
}

.linkedin-container a:focus-visible {
    outline: 2px solid var(--head-color);
    outline-offset: 4px;
    border-radius: 4px;
}
```

**Step 4: Replace `<style>` block in index.html with link**

In `index.html`, replace the entire `<style>...</style>` block (lines 83-496) with:
```html
<link rel="stylesheet" href="styles.css">
```

**Step 5: Verify locally**

Open `index.html` in browser. Everything should look and behave identically.

**Step 6: Commit**

```bash
git add styles.css index.html
git commit -m "refactor: extract CSS into styles.css, fix font-display to swap, add focus-visible styles"
```

---

### Task 2: Extract JavaScript into main.js

**Files:**
- Create: `main.js`
- Modify: `index.html`

**Step 1: Create main.js**

Extract everything between `<script type="module">` and `</script>` (lines 545-1958 of the original index.html, now renumbered after Task 1) into a new `main.js` file. This includes:
- The imports at the top (`import * as THREE from ...`)
- The `RESPONSIVE_CONFIG` object
- The `ViewportManager` class
- The `viewport` and `throttle` declarations
- The Konami code listener
- The `DOMContentLoaded` listener
- The entire `initThreeJS()` function

**Step 2: Replace `<script>` block in index.html with module reference**

In `index.html`, replace the entire `<script type="module">...</script>` block with:
```html
<script type="module" src="main.js"></script>
```

**Step 3: Add modulepreload for main.js**

In the `<head>` of `index.html`, after the existing Three.js modulepreload links, add:
```html
<link rel="modulepreload" href="main.js">
```

**Step 4: Verify locally**

Open `index.html` in browser. All head animations, state machine, mouse tracking, Konami code, and LinkedIn hover should work identically.

**Step 5: Commit**

```bash
git add main.js index.html
git commit -m "refactor: extract JavaScript into main.js module"
```

---

### Task 3: Add semantic HTML improvements

**Files:**
- Modify: `index.html`

**Step 1: Add keyboard accessibility to head-container**

Change the head-container div from:
```html
<div id="head-container" role="img" aria-label="Interactive 3D wireframe head animation"></div>
```
to:
```html
<div id="head-container" role="img" aria-label="Interactive 3D wireframe head animation" tabindex="0"></div>
```

**Step 2: Wrap main-content in `<main>`**

Change:
```html
<div class="main-content">
```
to:
```html
<main class="main-content">
```

And the corresponding closing tag from `</div>` to `</main>`.

**Step 3: Verify locally**

Tab through the page — head container should receive focus with a green outline. LinkedIn link should also show focus indicator.

**Step 4: Commit**

```bash
git add index.html
git commit -m "a11y: add keyboard focus support to head, use semantic main element"
```

---

### Task 4: Extract magic numbers and add keyboard interaction in main.js

**Files:**
- Modify: `main.js`

**Step 1: Add ANIMATION constants object**

After the `RESPONSIVE_CONFIG` object (and before the `ViewportManager` class), add:

```js
// ============================================
// ANIMATION CONSTANTS - Named magic numbers
// ============================================
const ANIMATION = {
    MOUSE_SENSITIVITY_X: 0.05,
    MOUSE_SENSITIVITY_Y: 0.02,
    ROTATION_SPEED_NORMAL: 0.1,
    ROTATION_SPEED_WHISTLING: 0.03,
    ROTATION_SPEED_GIGGLING: 0.05,
    GIGGLE_DURATION_MS: 2000,
    GIGGLE_FREQUENCY: 0.02,
    GIGGLE_AMPLITUDE: 0.03,
    INACTIVITY_THRESHOLD_MS: 10000,
    ZZZ_FLOAT_SPEED: 0.003,
    ZZZ_RESET_Y: 2.5,
    NOTE_FLOAT_SPEED_Y: 0.004,
    NOTE_FLOAT_SPEED_X: 0.001,
    NOTE_RESET_Y: 2.5,
    WHISTLE_SWAY_SPEED: 0.5,
    WHISTLE_SWAY_AMOUNT: 0.02,
    PULSE_BASE_OPACITY: 0.7,
    PULSE_AMPLITUDE: 0.1,
    SLEEP_OPACITY: 0.8,
    LINE_WIDTH_BASE: 1.5,
    SLEEP_HOURS_START: 22,
    SLEEP_HOURS_END: 6,
    STATE_CHECK_INTERVAL_MS: 60000,
    INACTIVITY_CHECK_INTERVAL_MS: 1000,
};
```

**Step 2: Replace all magic numbers with constants**

Replace these throughout `initThreeJS()`:

| Old | New |
|-----|-----|
| `mouseX * 0.05` | `mouseX * ANIMATION.MOUSE_SENSITIVITY_X` |
| `mouseY * 0.02` | `mouseY * ANIMATION.MOUSE_SENSITIVITY_Y` |
| `const ROTATION_SPEED = 0.1;` | `const ROTATION_SPEED = ANIMATION.ROTATION_SPEED_NORMAL;` |
| `rotationSpeed = 0.03;` (whistling) | `rotationSpeed = ANIMATION.ROTATION_SPEED_WHISTLING;` |
| `rotationSpeed = 0.05;` (giggling) | `rotationSpeed = ANIMATION.ROTATION_SPEED_GIGGLING;` |
| `const INACTIVITY_THRESHOLD = 10000;` | `const INACTIVITY_THRESHOLD = ANIMATION.INACTIVITY_THRESHOLD_MS;` |
| `Date.now() - giggleStartTime > 2000` | `Date.now() - giggleStartTime > ANIMATION.GIGGLE_DURATION_MS` |
| `Math.sin((Date.now() - giggleStartTime) * 0.02) * 0.03` | `Math.sin((Date.now() - giggleStartTime) * ANIMATION.GIGGLE_FREQUENCY) * ANIMATION.GIGGLE_AMPLITUDE` |
| `z.position.y += 0.003;` | `z.position.y += ANIMATION.ZZZ_FLOAT_SPEED;` |
| `if (z.position.y > 2.5)` | `if (z.position.y > ANIMATION.ZZZ_RESET_Y)` |
| `note.position.y += 0.004;` | `note.position.y += ANIMATION.NOTE_FLOAT_SPEED_Y;` |
| `note.position.x += 0.001;` | `note.position.x += ANIMATION.NOTE_FLOAT_SPEED_X;` |
| `if (note.position.y > 2.5)` | `if (note.position.y > ANIMATION.NOTE_RESET_Y)` |
| `Math.sin(time * 0.5) * 0.02` (whistle sway) | `Math.sin(time * ANIMATION.WHISTLE_SWAY_SPEED) * ANIMATION.WHISTLE_SWAY_AMOUNT` |
| `lineMaterial.opacity = 0.7 + Math.sin(time) * 0.1` | `lineMaterial.opacity = ANIMATION.PULSE_BASE_OPACITY + Math.sin(time) * ANIMATION.PULSE_AMPLITUDE` |
| `lineMaterial.opacity = 0.8` (sleep) | `lineMaterial.opacity = ANIMATION.SLEEP_OPACITY` |
| `const baseLineWidth = 1.5;` | `const baseLineWidth = ANIMATION.LINE_WIDTH_BASE;` |
| `hours >= 22 \|\| hours < 6` | `hours >= ANIMATION.SLEEP_HOURS_START \|\| hours < ANIMATION.SLEEP_HOURS_END` |
| `setInterval(updateStateBasedOnTime, 60000)` | `setInterval(updateStateBasedOnTime, ANIMATION.STATE_CHECK_INTERVAL_MS)` |
| `setInterval(checkInactivity, 1000)` | `setInterval(checkInactivity, ANIMATION.INACTIVITY_CHECK_INTERVAL_MS)` |

**Step 3: Add keyboard interaction for head giggle**

After the `touchend` event listener on `renderer.domElement` (the mobile giggling listener), add keyboard support to the head container:

```js
// Keyboard support for head interaction (accessibility)
container.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        // Trigger giggle from center of head (simulates clicking the head center)
        if (!isCaliforniaSleepTime() && currentState !== STATE.SLEEPING && currentState !== STATE.GIGGLING && currentState !== STATE.AWED) {
            lastActivity = Date.now();
            if (giggleIntervalId !== null) {
                clearInterval(giggleIntervalId);
                giggleIntervalId = null;
                adjustHeadPosition();
            }
            switchToState(STATE.GIGGLING);
            let giggleStartTime = Date.now();
            giggleIntervalId = setInterval(() => {
                if (currentState !== STATE.GIGGLING) {
                    clearInterval(giggleIntervalId);
                    giggleIntervalId = null;
                    adjustHeadPosition();
                    return;
                }
                const giggleOffset = Math.sin((Date.now() - giggleStartTime) * ANIMATION.GIGGLE_FREQUENCY) * ANIMATION.GIGGLE_AMPLITUDE;
                head.position.y = viewport.animationBaseY + giggleOffset;
                if (Date.now() - giggleStartTime > ANIMATION.GIGGLE_DURATION_MS) {
                    clearInterval(giggleIntervalId);
                    giggleIntervalId = null;
                    adjustHeadPosition();
                    if (currentState === STATE.GIGGLING) {
                        switchToState(STATE.NORMAL);
                    }
                }
            }, 16);
        }
    }
});
```

**Step 4: Verify locally**

- Tab to head container, press Enter/Space — head should giggle
- All mouse interactions still work identically
- All state transitions work identically
- Animation timings feel identical (constants match original values exactly)

**Step 5: Commit**

```bash
git add main.js
git commit -m "refactor: extract magic numbers into ANIMATION constants, add keyboard giggle support"
```

---

### Task 5: DRY up note creation and convert giggle to RAF

**Files:**
- Modify: `main.js`

**Step 1: Create shared createNoteBase helper**

Replace `createEighthNote` and `createQuarterNote` with a shared base + variants:

```js
// Shared note base: creates note head (oval) + stem
function createNoteBase(size) {
    const group = new THREE.Group();

    // Note head (oval)
    const headSegments = 8;
    const headPoints = [];
    for (let i = 0; i <= headSegments; i++) {
        const theta = (i / headSegments) * Math.PI * 2;
        headPoints.push(new THREE.Vector3(
            Math.cos(theta) * size * 0.4,
            Math.sin(theta) * size * 0.6,
            0
        ));
    }
    const flattenedHeadPoints = [];
    headPoints.forEach(p => flattenedHeadPoints.push(p.x, p.y, p.z));
    const headGeometry = new LineGeometry();
    headGeometry.setPositions(flattenedHeadPoints);
    const headLine = new Line2(headGeometry, lineMaterial);
    headLine.computeLineDistances();
    headLine.rotation.z = Math.PI / 4;
    group.add(headLine);

    // Note stem
    const stemPoints = [
        new THREE.Vector3(size * 0.25, size * 0.25, 0),
        new THREE.Vector3(size * 0.25, size * 1.5, 0)
    ];
    const flattenedStemPoints = [];
    stemPoints.forEach(p => flattenedStemPoints.push(p.x, p.y, p.z));
    const stemGeometry = new LineGeometry();
    stemGeometry.setPositions(flattenedStemPoints);
    const stem = new Line2(stemGeometry, lineMaterial);
    stem.computeLineDistances();
    group.add(stem);

    return group;
}

// Eighth note = base + flag
function createEighthNote(size) {
    const group = createNoteBase(size);

    const flagPoints = [
        new THREE.Vector3(size * 0.25, size * 1.5, 0),
        new THREE.Vector3(size * 0.8, size * 1.2, 0)
    ];
    const flattenedFlagPoints = [];
    flagPoints.forEach(p => flattenedFlagPoints.push(p.x, p.y, p.z));
    const flagGeometry = new LineGeometry();
    flagGeometry.setPositions(flattenedFlagPoints);
    const flag = new Line2(flagGeometry, lineMaterial);
    flag.computeLineDistances();
    group.add(flag);

    return group;
}

// Quarter note = just the base (head + stem, no flag)
function createQuarterNote(size) {
    return createNoteBase(size);
}
```

**Step 2: Convert giggle setInterval to RAF-based**

Replace the giggle `setInterval` pattern in `handleHeadInteraction` (and the keyboard equivalent) with RAF-driven state. Add these variables near the other animation variables:

```js
// Giggle animation state (RAF-driven instead of setInterval)
let giggleStartTime = 0;
let isGiggling = false;
```

Remove the `giggleIntervalId` variable and all `setInterval`/`clearInterval` calls for giggling.

In `handleHeadInteraction`, replace the giggle interval block with:
```js
giggleStartTime = Date.now();
isGiggling = true;
```

In the keyboard handler, do the same — just set `giggleStartTime = Date.now(); isGiggling = true;` instead of starting an interval.

In `switchToState`, replace the giggle interval cleanup with:
```js
if (currentState === STATE.GIGGLING) {
    isGiggling = false;
    adjustHeadPosition();
}
```

In the `animate()` function, replace the `STATE.GIGGLING` case:
```js
} else if (currentState === STATE.GIGGLING) {
    if (isGiggling) {
        const elapsed = Date.now() - giggleStartTime;
        const giggleOffset = Math.sin(elapsed * ANIMATION.GIGGLE_FREQUENCY) * ANIMATION.GIGGLE_AMPLITUDE;
        head.position.y = viewport.animationBaseY + giggleOffset;

        if (elapsed > ANIMATION.GIGGLE_DURATION_MS) {
            isGiggling = false;
            adjustHeadPosition();
            if (currentState === STATE.GIGGLING) {
                switchToState(STATE.NORMAL);
            }
        }
    }
}
```

Also remove `giggleIntervalId` from the `beforeunload` cleanup (no longer needed).

**Step 3: Verify locally**

- Click/tap head — giggle animation should look identical
- Keyboard Enter/Space on head — same giggle
- Whistling music notes render correctly
- All states transition correctly

**Step 4: Commit**

```bash
git add main.js
git commit -m "refactor: DRY up note creation, convert giggle to RAF-driven animation"
```

---

### Task 6: Delete unused assets

**Files:**
- Delete: `assets/fonts/ebgaramond/ebgaramond.css`
- Delete: `assets/vendor/three@0.128.0/` (entire directory)
- Delete: `assets/vendor/es-module-shims@1/` (entire directory)

**Step 1: Delete unused files**

```bash
rm assets/fonts/ebgaramond/ebgaramond.css
rm -rf assets/vendor/three@0.128.0/
rm -rf assets/vendor/es-module-shims@1/
```

**Step 2: Verify no references to deleted files**

Search `index.html` and `main.js` for any references to `ebgaramond.css`, `three@0.128.0` (without `-local`), or `es-module-shims`. There should be none.

**Step 3: Verify locally**

Open site — everything should work. The only vendor files used are under `three-local@0.128.0/`.

**Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove unused vendor assets and Google Fonts CSS"
```

---

### Task 7: Generate OG image

**Files:**
- Create: `assets/og-image.png` (1200x630)

**Step 1: Generate OG image**

Create a 1200x630 PNG with:
- Black background (#000000)
- Green wireframe aesthetic matching the site
- "Peter Muse" text in EB Garamond or similar serif
- Simple, clean design that represents the site's aesthetic

Use an HTML canvas approach or ImageMagick to generate this. The image should match the existing site's visual identity (green on black, minimalist).

**Step 2: Verify meta tags**

Confirm `index.html` already references `assets/og-image.png` (it does, in og:image and twitter:image meta tags). No HTML changes needed.

**Step 3: Verify image dimensions**

The image must be exactly 1200x630 to match the og:image:width and og:image:height meta tags.

**Step 4: Commit**

```bash
git add assets/og-image.png
git commit -m "feat: add OG image for social media sharing"
```

---

### Task 8: Final verification

**Step 1: Full browser test**

Open the site and verify:
- [ ] Page loads, CSS applied correctly
- [ ] 3D head renders and follows mouse
- [ ] All states work: Normal, Whistling, Sleeping, Giggling, Awed
- [ ] Konami code reveals debug panel
- [ ] LinkedIn hover triggers awed state
- [ ] Click/tap head triggers giggle
- [ ] Keyboard Tab reaches head container with visible focus
- [ ] Enter/Space on head triggers giggle
- [ ] Tab reaches LinkedIn link with visible focus
- [ ] Reduced motion preference disables animations
- [ ] Mobile responsive layout works
- [ ] OG image loads at /assets/og-image.png

**Step 2: Check file sizes**

```bash
wc -c index.html styles.css main.js
ls -la assets/og-image.png
```

Expect: index.html ~3-4KB, styles.css ~3-4KB, main.js ~35-40KB

**Step 3: Final commit if any fixes needed**

---

## Summary of Changes

| Category | Change | Impact |
|----------|--------|--------|
| Architecture | Split monolith into HTML + CSS + JS | Better caching, maintainability |
| Performance | font-display: swap | Faster text rendering |
| Performance | Remove unused vendor assets (~1.5MB) | Smaller repo, faster clones |
| Performance | Remove setInterval giggle, use RAF | One fewer timer, frame-synced |
| Code Quality | Named ANIMATION constants | Self-documenting code |
| Code Quality | DRY note creation (createNoteBase) | ~30 fewer lines, single source |
| Accessibility | Keyboard head interaction | Tab + Enter/Space to giggle |
| Accessibility | focus-visible styles | Keyboard users see focus |
| Accessibility | Semantic `<main>` element | Better screen reader nav |
| SEO | OG image | Social sharing works |
| Cleanup | Delete ebgaramond.css, CDN three.js, es-module-shims | Remove dead code |
