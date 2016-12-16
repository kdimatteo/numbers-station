const path       = require('path')
// const AppConfig  = require('./src/app-config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/main.js' ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
  //   new ExtractTextPlugin('style.css', { allChunks: true }),
  ],

  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: 'style!css?modules'
      },

      // {
      //   test: /\.scss$/, 
      //   loaders: ['style', 'css', 'namespace-css?.' + AppConfig.cssNameSpace, 'sass']
      // },
      
      // {
      //   test: /\.(eot|woff|woff2|ttf|otf|svg|png|jpg)$/,
      //   loader: 'url-loader?limit=50000&name=[name]-[hash].[ext]'
      // },
      
      {
        test: /\.js/,
        include: [/src/, /node_modules/],
        loader: 'babel',
        query: {
          plugins: [ 'transform-es2015-block-scoping' ],
          presets: [ 'es2015' ]
        }
      }
    ]
  },

  devtool: "#eval-source-map"

}