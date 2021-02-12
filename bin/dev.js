const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webpackConfig);

let nodemonStarted = false;

compiler.watch({}, (err) => {
  if (err) {
    console.log('Compilation failed: ', err);
  }
  console.log('Compilation was successfully');

  if (!nodemonStarted) {
    nodemonStarted = true;
    nodemon({
      script: path.resolve(__dirname, '../dist/server/server.js'),
      watch: [
        path.resolve(__dirname, '../dist/server'),
        path.resolve(__dirname, '../dist/client')
      ]
    })
  }
});
