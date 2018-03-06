/**
 * @component webpack.dev.js
 * @description 开发环境配置
 * @time 2018/3/6
 * @author JOKER XU
 */
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
	}
});