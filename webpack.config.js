const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/[name].[hash].css"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV
    })
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {

    entry: {
      "app": path.resolve(__dirname, 'src/app.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      publicPath: path.resolve(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          },
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              }
            ]
          })
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}