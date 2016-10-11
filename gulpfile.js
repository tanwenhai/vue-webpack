var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack-config');
var named = require('vinyl-named');

gulp.task('default', function() {
  gulp.src('src/*.js')
    .pipe(named())
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest('./dist/'));
});