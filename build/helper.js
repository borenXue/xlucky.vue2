const path = require('path');
const { camelCase } = require('camel-case');

module.exports.resolve = function resolve(fileOrDir) {
  return path.resolve(process.cwd(), fileOrDir);
}

module.exports.CamelCase = function CamelCase(str) {
  let keyName = camelCase(str);
  return keyName[0].toUpperCase() + keyName.substring(1);
}
