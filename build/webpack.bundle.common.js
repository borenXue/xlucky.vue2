const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const { resolve, getExternalsForProduction } = require('./helper');
const pkg = require('../package.json');

const sourceMap = process.env.NODE_ENV !== 'production';
const devtool = sourceMap ? (process.env.WEBPACK_DEV_SERVER ? 'inline-source-map' : 'cheap-source-map') : undefined;

let externals = {};

if (process.env.NODE_ENV === 'production') {
  externals = getExternalsForProduction();
} else {
  externals = {
    vue: 'Vue',
  };
}

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: resolve('src/index.ts'),
  output: {
    path: resolve('lib'),
    publicPath: '',
    filename: 'xlucky-vue2.common.js',
    libraryTarget: 'commonjs2',
  },
  devtool,
  optimization: { minimize: false },
  devServer: {
    compress: false,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 9001,
  },
  externals,
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.scss', '.sass'],
  },
  // eslint-disable-next-line
  plugins: [
    new StylelintWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env.PKG_VERSION': `'${pkg.version}'`,
      'process.env.PKG_NAME': `'${pkg.name}'`,
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx|js)$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter'),
            },
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: 'cache-loader', options: { cacheDirectory: '.cache/ts-loader' } }, { loader: 'babel-loader' }, { loader: 'ts-loader', options: { transpileOnly: true } }],
      },
      {
        test: /\.(css|scss|sass)$/i,
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
