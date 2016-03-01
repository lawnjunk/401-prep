'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

var files = ['gulpfile.js', __dirname + '/lib/**/*.js', __dirname + '/test/**/*.js', 'hello.js'];
gulp.task('lint', function(){
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});
