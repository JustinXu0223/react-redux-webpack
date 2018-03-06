/**
 * @component webpack.prod.js
 * @description 生产环境
 * @time 2018/3/6
 * @author JOKER XU
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除dist
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.BannerPlugin('上海市**网络科技版权所有，翻版必究'),
    new OptimizeCssAssetsPlugin({ // 压缩css插件
      assetNameRegExp: /\.min\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    /*new UglifyJSPlugin({
      sourceMap: true
    }),*/
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});