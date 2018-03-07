/**
 * @component webpack.prod.js
 * @description 生产环境
 * @time 2018/3/6
 * @author JOKER XU
 */

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离css
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  output: {
	filename: 'static/js/[name].[hash:7].js', //
	path: path.resolve(__dirname, 'dist'), // 输出的文件地址
	publicPath: '/'
  },
  devtool: 'source-map',
  module: {
	rules: [
	  {
		test: /\.css$/,
		use: ExtractTextPlugin.extract({
		  fallback: "style-loader",
		  use: ["css-loader"]
		})
	  },
	  {
		test: /\.less$/,
		use: ExtractTextPlugin.extract({
		  fallback: "style-loader",
		  use: ["css-loader", "less-loader"]
		})
	  },
	]
  },
  plugins: [
	new webpack.BannerPlugin('上海市**网络科技版权所有，翻版必究'),
	new OptimizeCssAssetsPlugin({ // 压缩css插件
	  assetNameRegExp: /\.min\.css$/g,
	  cssProcessor: require('cssnano'),
	  cssProcessorOptions: {discardComments: {removeAll: true}},
	  canPrint: true
	}),
	new UglifyJSPlugin({
	  sourceMap: true
	}),
	new ExtractTextPlugin({
	  filename: "static/css/[name].min.css",
	  allChunks: true
	}),
	new webpack.DefinePlugin({
	  'process.env': {
		'NODE_ENV': JSON.stringify('production')
	  }
	})
  ]
});