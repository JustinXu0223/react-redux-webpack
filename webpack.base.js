/**
 * @component webpack.base.js
 * @description 基础环境
 * @time 2018/3/6
 * @author JOKER XU
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除dist
const CopyWebpackPlugin = require('copy-webpack-plugin'); // copy

module.exports = {
  entry: {
	app: './src/index.js',
	vendor: [
	  'lodash'
	]
  },
  module: {
	rules: [
	  {
		test: /\.js$/,
		loader: "babel-loader",
		options: {
		  presets: ['es2015']
		},
		include: [path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'test')]
	  },
	  {
		test: /\.(png|svg|jpg|gif|jpeg)$/, use:
		  [{
			loader: 'url-loader',
			options: {
			  fallback: 'file-loader',
			  limit: 8192, // publicPath: '../../',
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
	  from: "./static",
	  to: "static",
	  force: true
	}]),
	new HtmlWebpackPlugin({
	  filename: 'index.html',//输出的html路径
	  template: './public/index.html', //html模板路径
	  chunks: ['app', 'vendor', 'manifest'],
	  minify: {
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