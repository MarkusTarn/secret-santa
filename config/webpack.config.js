const path = require('path')
const config = require('config')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// const webpack = require('webpack')

const BUILD_DIR = path.resolve(__dirname, '../build')
const APP_DIR = path.resolve(__dirname, '../src/client')
const INDEX_HTML = path.resolve(__dirname, '../index.html')

const PROD_CONFIG_ENVS = ['staging', 'production']

module.exports = {
  mode: PROD_CONFIG_ENVS.includes(process.env.NODE_ENV) ? 'production' : 'development',
  entry: {
    main: `${APP_DIR}/index.jsx`,
  },
  output: {
    filename: 'js/bundle.[chunkhash].js',
    path: BUILD_DIR,
    publicPath: '/',
  },
  devServer: {
    port: config.get('client.port'),
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: `http://0.0.0.0:${config.get('service.port')}`,
      },
      '/socket.io': {
        target: `http://0.0.0.0:${config.get('service.port')}`,
        ws: true,
      },
    },
  },
  devtool: 'cheap-module-eavl-source-map',
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }],
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: INDEX_HTML,
      filename: './index.html',
      favicon: './src/client/icons/favicon.png',
    }),
  ],
}
