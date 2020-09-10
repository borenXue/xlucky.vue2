const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const chokidar = require('chokidar');
const { CamelCase } = require('./helper');
const pkg = require('../package.json');
const components = require('../components.json');

const needWatch = process.argv.indexOf('watch') >= 0;

/**
 * 处理 src/index.tsx
 */
const importLines = [];
const exportLines = [];
for (const key in components) {
  let keyName = CamelCase(key);
  let file = components[key];
  file = file.replace(new RegExp(path.extname(file)), '');
  importLines.push(`import ${keyName} from '.${file}';`);
  exportLines.push(`${keyName},`);
}

const srcIndexContent = `// !!! This file is automatically generated by the build/prebuild.js.
// !!! Please do not modify manually.

${importLines.join('\n')}

export default {
  version: '${pkg.version}',
  ${exportLines.join('\n  ')}
};
`;

fs.writeFileSync(path.resolve(__dirname, '../src/index.ts'), srcIndexContent, { encoding: 'utf-8' });

if (needWatch) {
  const watcher = chokidar.watch([path.resolve(__dirname, '../components.json')]);
  watcher.on('ready', () => {
    watcher.on('change', function () {
      childProcess.execSync('npm run componentsJson').toString().trim();
    });
  });
}
