const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
var proxy = require('http-proxy-middleware');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

const proxyUrl = 'https://x-admin.i-counting.cn';

app.use('/api', proxy({target: proxyUrl, changeOrigin: true}));
app.use('/infocenter', proxy({target: proxyUrl, changeOrigin: true}));
app.use(webpackDevMiddleware(compiler, {
  // noInfo: true,
  // publicPath: '/v2/',
  stats: {
		colors: true
	}
}));

app.use(require("webpack-hot-middleware")(compiler));


app.listen(3003, function () {
  console.log('app listening on port 3003!\n');
});
