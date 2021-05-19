/* eslint-disable linebreak-style */
const path = require('path');

const rules = [{
  test: /\.(js|jsx|ts)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: {
    presets: ['@babel/react', '@babel/env'],
  },
},
{
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader',
  ],
},
];

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules,
  },

  devServer: {
    publicPath: '/build',
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
