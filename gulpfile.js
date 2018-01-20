var gulp = require('gulp')
var requireDir = require('require-dir')

requireDir('gulp')

gulp.task('build', [
  'config',
  'images',
  'assets',
  'scss',
  'layout',
  'snippets',
  'templates',
  'locales',
  'svgIcons',
  'browsersync'
])

// Default gulp action when 'gulp' command is run
gulp.task('default', ['build', 'watch'])
