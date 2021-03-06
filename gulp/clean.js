/*
* Destroys the destination folder before re-populating it.
* Clean will not run while Gulp is watching.
*/

var constants = require('../constants')
var gulp = require('gulp')
var del = require('del')
var cleaned = false

gulp.task('clean', function (cb) {
  if (!cleaned) {
    del('./' + constants.theme + '/*', '!./' + constants.theme + '/.git').then(function () {
      return cb()
    })
    cleaned = true
  } else {
    return cb()
  }
})
