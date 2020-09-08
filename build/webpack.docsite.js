const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBundleConfig = require('./webpack.bundle.js');
const pkg = require('../package.json');

webpackBundleConfig.entry = resolve('docsite/index.tsx');
webpackBundleConfig.output.filename = 'docsite/index.js';
delete webpackBundleConfig.output.libraryTarget;

webpackBundleConfig.devServer.contentBase = resolve('dist/docsite');
webpackBundleConfig.devServer.port = '9000';

webpackBundleConfig.plugins.push(new HtmlWebpackPlugin({
  title: pkg.name,
  filename: 'docsite/index.html',
  template: 'docsite/index.html'
}));

module.exports = webpackBundleConfig;


function resolve(fileOrDir) {
  return path.resolve(process.cwd(), fileOrDir);
}
