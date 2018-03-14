/**
 * @component webpack.base.js
 * @description 基础环境
 * @time 2018/3/6
 * @author JOKER XU
 */
'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除dist
const CopyWebpackPlugin = require('copy-webpack-plugin'); // copy

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: {
    app: [resolve('src/index.js')],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-redux',
      'react-redux',
      'redux',
      'redux-thunk'
    ]
  },
  resolve: {
    extensions: [' ', '.js', '.json', '.jsx', '.css', '.less', '.json'],
    modules: [resolve('src'), 'node_modules'], //绝对路径;
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/, use:
        [{
          loader: 'url-loader',
          options: {
            fallback: 'file-loader',
            limit: 8192,
            outputPath: 'static/images/',
            name: '[name]_[hash:7].[ext]',
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, use:
        [{
          loader: 'file-loader',
          options: {
            outputPath: 'static/fonts/',
            name: '[name]_[hash:7].[ext]',
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{
      from: './public',
      to: '',
      force: true
    }]),
    new HtmlWebpackPlugin({
      filename: 'index.html',//输出的html路径
      template: './public/index.html', //html模板路径
      chunks: ['app', 'vendor', 'manifest'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      }
    }),
    new webpack.HashedModuleIdsPlugin(), // 修复vendor hash
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest', // 指定公共 bundle 的名称。
      minChunks: Infinity
    })
  ]
};
