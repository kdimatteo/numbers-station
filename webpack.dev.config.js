const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge'); 
const commonConfig = require('./webpack.common.config.js');

module.exports = webpackMerge(commonConfig, {
  
  // plugins: [
  //   new HtmlWebpackPlugin({template: 'src/index.html'}),
  // //   new ExtractTextPlugin('style.css', { allChunks: true }),
  // ],

  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: {index: 'index.html'},
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
  
    outputPath: __dirname  + '/dist',

  },

  // devtool: "#eval-source-map"

});