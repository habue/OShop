const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    new UglifyJsPlugin({
        sourceMap: true
    })
  ]
});
