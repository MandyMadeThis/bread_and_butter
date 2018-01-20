var gulp = require('gulp')
var flatten = require('gulp-flatten')
var changed = require('gulp-changed')
var constants = require('../constants')
var folders = ['assets', 'snippets', 'sections', 'templates', 'layout', 'locales']
var shopify = require('./shopify')

folders.forEach(function (folder) {
  var SRC = 'src/' + folder + '/**/*'
  var DEST = './' + constants.theme + '/' + folder
  gulp.task(folder, ['clean'], function () {
    return gulp.src(SRC)
      .pipe(flatten())
      .pipe(changed(DEST))
      .pipe(gulp.dest(DEST))
      .pipe(shopify.stream())
  })
})
