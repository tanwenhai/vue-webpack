var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack-config');

gulp.task('default', function() {
  webpack(webpack_config);
});