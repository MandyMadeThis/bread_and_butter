var constants = require('../constants')
var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var shopify = require('./shopify')

// Minify images - YAS Please
gulp.task('images', ['clean'], function () {
  return gulp.src('src/images/**/*')
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest('./' + constants.theme + '/assets'))
    .pipe(shopify.stream())
})
