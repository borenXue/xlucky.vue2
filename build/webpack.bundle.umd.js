const webpackBundleConfig = require('./webpack.bundle.common');

webpackBundleConfig.output = {
  ...webpackBundleConfig.output,
  filename: 'xlucky.umd.js',
  libraryTarget: 'umd',
  libraryExport: 'default',
  library: 'xlucky',
  umdNamedDefine: true,
  globalObject: "typeof self !== 'undefined' ? self : this",
};

webpackBundleConfig.externals = { vue: 'Vue' };

module.exports = webpackBundleConfig;
