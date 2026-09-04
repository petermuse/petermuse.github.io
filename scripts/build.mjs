import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';
import { build } from 'esbuild';

const root = fileURLToPath(new URL('../', import.meta.url));
const outdir = resolve(root, 'assets/js');

// Build in memory first so a compilation error leaves the last working files intact.
const result = await build({
  absWorkingDir: root,
  entryPoints: ['src/main.js'],
  outdir,
  entryNames: '[name]',
  chunkNames: '[name]-[hash]',
  bundle: true,
  splitting: true,
  format: 'esm',
  platform: 'browser',
  target: ['es2020'],
  minify: true,
  treeShaking: true,
  legalComments: 'eof',
  write: false,
});

// Keep previously published chunks available for visitors with cached entry scripts.
await mkdir(outdir, { recursive: true });
for (const file of result.outputFiles) {
  await mkdir(dirname(file.path), { recursive: true });
  await writeFile(file.path, file.contents);
  const size = (file.contents.length / 1024).toFixed(1);
  const gzipSize = (gzipSync(file.contents).length / 1024).toFixed(1);
  console.log(`${relative(root, file.path)}: ${size} KiB (${gzipSize} KiB gzip)`);
}

// A fresh page must request the matching entry script, even when an older version
// of main.js is cached by the browser or GitHub Pages' CDN.
const entry = result.outputFiles.find(file => file.path === resolve(outdir, 'main.js'));
const version = createHash('sha256').update(entry.contents).digest('hex').slice(0, 12);
const htmlPath = resolve(root, 'index.html');
const html = await readFile(htmlPath, 'utf8');
const scriptSource = /src="assets\/js\/main\.js(?:\?v=[a-f0-9]+)?"/;
if (!scriptSource.test(html)) throw new Error('Homepage animation script tag was not found.');
await writeFile(htmlPath, html.replace(scriptSource, `src="assets/js/main.js?v=${version}"`));
