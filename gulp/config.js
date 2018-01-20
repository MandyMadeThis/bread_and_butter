var gulp = require('gulp')
var constants = require('../constants')
var toJSON = require('gulp-js-to-json')
var shopify = require('./shopify')

gulp.task('config', ['clean'], function () {
  return gulp.src('src/config/settings_schema.js')
    .pipe(toJSON())
    .pipe(gulp.dest('./' + constants.theme + '/config'))
    .pipe(shopify.stream())
})
