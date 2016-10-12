const gulp = require('gulp');
const webpack = require('gulp-webpack');
const webpack_config = require('./webpack-config');
const named = require('vinyl-named');
const clean = require('gulp-clean');

gulp.task('clean', function () {
  gulp.src('aps/web/dist/*')
    .pipe(clean());
});

gulp.task('run', ['clean'], function() {
  gulp.src('aps/web/src/app.js')
    .pipe(named())
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest('./dist/'));
});