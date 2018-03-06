/**
 * @component webpack.config
 * @description
 * @time 2018/3/6
 * @author JOKER XU
 */

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离css
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除dist

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'static/js/[name].[hash:7].js', //
    path: path.resolve(__dirname, 'dist'), // 输出的文件地址
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      },
      { test: /\.(png|svg|jpg|gif|jpeg)$/, use:
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
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use:
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
    new ExtractTextPlugin({
      filename: "static/css/[name].min.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename : 'index.html',//输出的html路径
      template : './public/index.html', //html模板路径
      chunks : ['app'],
      minify: {
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      }
    }),
  ]
};