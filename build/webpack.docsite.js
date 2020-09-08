const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBundleConfig = require('./webpack.bundle.js');
const pkg = require('../package.json');
const { resolve } = require('./helper');

const isNpmStartDevMode = process.env.NODE_ENV !== 'production' && process.env.WEBPACK_DEV_SERVER;

webpackBundleConfig.entry = resolve('./docsite/index.tsx');

webpackBundleConfig.output.path = resolve('./dist/docsite');
webpackBundleConfig.output.filename = 'index.js';
delete webpackBundleConfig.output.libraryTarget;

webpackBundleConfig.devServer.port = '9000';

webpackBundleConfig.plugins.push(new HtmlWebpackPlugin({
  title: pkg.name,
  filename: isNpmStartDevMode ? 'index.html' :  'index.html',
  template: 'docsite/index.html'
}));

module.exports = webpackBundleConfig;
