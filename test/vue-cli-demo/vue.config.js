// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const vuepath = resolve('./node_modules/vue/dist/vue.esm.js');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue$', vuepath);
  },
};
