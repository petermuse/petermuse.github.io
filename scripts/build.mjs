import { mkdir, rm, writeFile } from 'node:fs/promises';
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

// This directory contains only generated files; remove obsolete hashed chunks.
await rm(outdir, { recursive: true, force: true });
await mkdir(outdir, { recursive: true });
for (const file of result.outputFiles) {
  await mkdir(dirname(file.path), { recursive: true });
  await writeFile(file.path, file.contents);
  const size = (file.contents.length / 1024).toFixed(1);
  const gzipSize = (gzipSync(file.contents).length / 1024).toFixed(1);
  console.log(`${relative(root, file.path)}: ${size} KiB (${gzipSize} KiB gzip)`);
}
