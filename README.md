# Peter Muse homepage

A static homepage served from the repository root by GitHub Pages. The page's HTML,
CSS, images, and fonts are used directly; the head animation is bundled locally.

## Development

Use Node.js 22 or newer. Install the pinned build dependency, run the checks, and
generate the browser JavaScript:

```sh
npm ci
npm test
npm run build
```

Serve the repository with a local HTTP server to preview the page. For example,
with Python installed:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. JavaScript modules need an HTTP server; opening
`index.html` directly from the filesystem is not a supported preview.

## Source and generated files

- `index.html` and `styles.css` contain the page markup and styling.
- `src/main.js` is the small startup entry. It loads `src/head-scene.js` dynamically
  when the animation is needed.
- `src/` contains the editable animation source and its supporting modules.
- `assets/vendor/three-local@0.128.0/` contains the existing self-hosted Three.js
  source used by the build.
- `assets/js/` contains generated, minified browser modules. The build removes
  unused code, preserves license notices, and gives deferred chunks content hashes.
  Previously published chunks are retained so cached pages can still load them.
  Do not edit generated files by hand.
- `tests/` contains checks run with Node's built-in test runner.

## Publishing

After editing JavaScript source, run `npm test` and `npm run build`, preview the
page, and include the resulting `assets/js/` files with the source changes. The
generated files are intentionally checked in so the existing GitHub Pages setup
can publish the repository root without a server or an additional build step.
The build also updates the HTML's `assets/js/main.js?v=…` reference with a content
hash so browsers fetch the matching startup script after a deployment. Include
that `index.html` update when publishing. The entry references the generated
deferred chunks; retaining older chunks protects visitors with cached pages.
