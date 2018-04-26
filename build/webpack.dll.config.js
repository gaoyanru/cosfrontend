const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    libs: ['antd', 'babel-polyfill', 'bootstrap', 'bundle-loader', 'echarts', 'jquery', 'js-cookie', 'lettering.js', 'react', 'react-dom', 'react-redux', 'react-router', 'react-router-dom', 'redux', 'redux-actions', 'redux-saga', 'redux-thunk', 'title-notify']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "Dll.js",
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: "[name]_[hash]",
      path: path.join(__dirname, '..', "./dist/manifest.json"),
    })
  ]
}
