const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './app/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
     
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
    }]
  },
  module: {
  rules: [
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }
  ]
},
plugins: [
  new ExtractTextPlugin('style.css')
],
 
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map'
};