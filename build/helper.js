const path = require('path');
const { camelCase } = require('camel-case');
const pkg = require('../package.json');

module.exports.resolve = function resolve(fileOrDir) {
  return path.resolve(process.cwd(), fileOrDir);
};

module.exports.CamelCase = function CamelCase(str) {
  let keyName = camelCase(str);
  return keyName[0].toUpperCase() + keyName.substring(1);
};

module.exports.getExternalsForProduction = function () {
  const keys = [];
  if (pkg.dependencies) {
    keys.push(...Object.keys(pkg.dependencies));
  }
  if (pkg.peerDependencies) {
    keys.push(...Object.keys(pkg.peerDependencies));
  }
  const res = {};
  keys.forEach((k) => {
    res[k] = k;
  });
  return res;
};
