const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve, CamelCase } = require('./helper');
const components = require('../components.json');

const sourceMap = process.env.NODE_ENV !== 'production';
const devtool = sourceMap ? (process.env.WEBPACK_DEV_SERVER ? 'inline-source-map' : 'cheap-source-map') : undefined;

const entries = {};
for (const key in components) {
  entries[CamelCase(key)] = resolve(components[key]);
}

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: entries,
  output: {
    path: resolve('lib'),
    publicPath: '',
    filename: '[name]/index.js',
    libraryTarget: 'commonjs',
    library: 'default',
  },
  devtool,
  externals: {
    vue: 'Vue',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.scss', '.sass'],
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name]/style/index.css' }), new ProgressBarPlugin()],
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.tsx?$/,
      //   exclude: [/node_modules/],
      //   loader: 'eslint-loader',
      //   options: { cache: true, extensions: ['.ts', '.tsx'] },
      // },
      // {
      //   enforce: 'pre',
      //   test: /\.s(c|a)ss$/,
      //   exclude: [/node_modules/],
      //   loader: 'eslint-loader',
      //   options: { cache: true, extensions: ['.ts', '.tsx'] },
      // },
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: 'cache-loader', options: { cacheDirectory: '.cache/ts-loader' } }, { loader: 'babel-loader' }, { loader: 'ts-loader', options: { transpileOnly: true } }],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap, importLoaders: 2 } },
          { loader: 'postcss-loader', options: { sourceMap } },
          { loader: 'sass-loader', options: { sourceMap } },
        ],
      },
    ],
  },
};
