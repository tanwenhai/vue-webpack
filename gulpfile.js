var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack-config');
var named = require('vinyl-named');
var clean = require('gulp-clean');

gulp.task('clean', function () {
  gulp.src('dist/*')
    .pipe(clean());
});

gulp.task('run', ['clean'], function() {
  gulp.src('src/*.js')
    .pipe(named())
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest('./dist/'));
});