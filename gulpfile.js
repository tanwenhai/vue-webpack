var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack-config');

gulp.task('default', function() {
  gulp.src('src/app.js')
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest('dist'));
});