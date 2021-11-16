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
    entryPoints: [path.resolve(__dirname, './index.ts')],
    bundle: true,
    outfile: path.resolve(__dirname, './public/index.js'),
    minify: false,
    sourcemap: true,
    platform: 'browser',
    target: ['chrome58'],
    watch: watch && {
      onRebuild(err, result) {
        console.log(`${dayjs().format('HH:mm:ss')}: 再ビルド`);
        console.log('errors', JSON.stringify(err.errors) || 'なし');
        console.log('warnings', JSON.stringify(result.warnings));
      },
    },
  })
  .then(() => {
    console.log('===========================================');
    console.log(`${dayjs().format('HH:mm:ss')}: ビルド完了`);
    if (watch) console.log('watching...');
  })
  .catch(() => process.exit(1));
