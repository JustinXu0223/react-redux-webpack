/**
 * @component webpack.config
 * @description
 * @time 2018/3/6
 * @author JOKER XU
 */

const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: 'static/js/[name].js', // .[hash]
    path: path.resolve(__dirname, 'dist'), // 输出的文件地址
    publicPath:''
  }
};