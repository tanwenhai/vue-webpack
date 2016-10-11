module.exports = {
  entry: {
    index: './src/*.js'
  },
  output: {
    path: './dist/',
    filename: '[name].js'
  },
  devtool: 'source-map',
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