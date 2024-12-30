const path = require('path')
const HtmlWebpackPluging = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
   mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js'
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
          }
        }, 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPluging({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new CleanWebpackPlugin()
  ]
}