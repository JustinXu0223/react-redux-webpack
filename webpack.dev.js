/**
 * @component webpack.dev.js
 * @description 开发环境
 * @time 2018/3/6
 * @author JOKER XU
 */
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const fs = require('fs');
const lessToJs = require('less-vars-to-js');

const themeVariables = lessToJs(fs.readFileSync(resolve('ant-theme-vars.less'), 'utf8'));

function resolve (dir) {
  return path.join(__dirname, dir)
}

const port = 8080;

module.exports = merge(base, {
  output: {
    filename: 'static/js/[name].js', //
    path: resolve('dist'), // 输出的文件地址
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/node_modules/, resolve('src/styles')],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[local]_[hash:base64:8]"
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/, resolve('src/styles')],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[local]_[hash:base64:8]"
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              importLoaders: 2,
              modifyVars: themeVariables,
              javascriptEnabled: true,
            },
          },
        ],
      },
      // 对antd-design 和src/styles全局样式配置
      {
        test: /\.css$/,
        include: [/node_modules/, resolve('src/styles')],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: [/node_modules/, resolve('src/styles')],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              importLoaders: 2,
              modifyVars: themeVariables,
              javascriptEnabled: true,
            },
          },
        ],
      },
    ]
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: port,
    hot: true,
    clientLogLevel: "error",
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new OpenBrowserPlugin({url: 'http://localhost:' + port}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'BABEL_ENV': JSON.stringify(process.env.BABEL_ENV || 'development'),
        'BASE_API_ENDPOINT' : JSON.stringify(process.env.BASE_API_ENDPOINT)
      },
    }),
  ],
});
