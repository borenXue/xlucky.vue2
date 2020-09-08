const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const sourceMap = process.env.NODE_ENV !== 'production';
const devtool = sourceMap ? (
  process.env.WEBPACK_DEV_SERVER ? 'inline-source-map' : 'cheap-source-map'
) : undefined;

function resolve(fileOrDir) {
  return path.resolve(process.cwd(), fileOrDir)
}

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: resolve('src/index.ts'),
  output: {
    path: resolve('dist'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  devtool,
  devServer: {
    contentBase: resolve('dist'),
    compress: false,
    disableHostCheck: true,
    host: '0.0.0.0',  
    port: 9001
  },
  externals: {
    vue: 'Vue'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.scss', '.sass'],
  },
  plugins: [
    new ProgressBarPlugin(),
  ],
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
        use: [
          { loader: 'cache-loader', options: { cacheDirectory: '.cache/ts-loader' } },
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          { loader: 'css-loader', options: { sourceMap, importLoaders: 2 } },
          { loader: 'postcss-loader', options: { sourceMap } },
          { loader: 'sass-loader', options: { sourceMap } },
        ],
      },
    ],
  },
}
