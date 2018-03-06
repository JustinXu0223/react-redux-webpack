/**
 * @component webpack.config
 * @description
 * @time 2018/3/6
 * @author JOKER XU
 */

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离css

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'static/js/[name].js', // .[hash]
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
              name: '[name]_[hash].[ext]',
            }
          }]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "static/css/[name].min.css",
      allChunks: true
    }),
  ]
};