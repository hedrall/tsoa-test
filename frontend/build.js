const esbuild = require('esbuild');
const path = require('path');
const dayjs = require('dayjs');

console.log(`${dayjs().format('HH:mm:ss')}: ビルド開始`);
const watch = process.env.WATCH;

esbuild
  .build({
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.ENV': JSON.stringify(process.env.ENV),
    },
    entryPoints: [path.resolve(__dirname, './main.ts')],
    bundle: true,
    outfile: path.resolve(__dirname, './main.js'),
    minify: false,
    sourcemap: true,
    platform: 'browser',
    target: ['chrome58'],
  })
  .then(() => {
    console.log('===========================================');
    console.log(`${dayjs().format('HH:mm:ss')}: ビルド完了`);
    if (watch) console.log('watching...');
  })
  .catch(() => process.exit(1));
