let notProduct = process.env.NODE_ENV != 'production';
let plugins = [];
let webpack = require('webpack');

if (! notProduct) {
  // see http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
  }));
}

module.exports = {
  output: {
    filename: '[name].js'
  },
  devtool: notProduct ? 'source-map' : '',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  plugins: plugins,
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
};