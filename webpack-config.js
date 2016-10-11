module.exports = {
  output: {
    filename: '[name].js'
  },
  devtool: process.env.NODE_ENV != 'production' ? 'source-map' : '',
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
  }
};