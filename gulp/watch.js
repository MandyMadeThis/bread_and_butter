var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')
var constants = require('../constants')
var babel = require('babelify')
var browsersync = require('./browsersync')

// Watch all the things
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['reload-on-css'])
  gulp.watch('src/js/**/*.js', ['reload-on-js'])
  gulp.watch('src/images/**/*', ['reload-on-img'])
  gulp.watch('src/icons/**/*.svg', ['reload-on-svg'])
  gulp.watch('src/assets/**/*', ['reload-on-assets'])
  gulp.watch('src/sections/**/*.liquid', ['reload-on-sections'])
  gulp.watch('src/snippets/**/*.liquid', ['reload-on-snippet'])
  gulp.watch('src/templates/**/*.liquid', ['reload-on-template'])
  gulp.watch('src/locales/**/*.json', ['reload-on-locale'])
  gulp.watch('src/layout/**/*.liquid', ['reload-on-layout'])
  gulp.watch('src/config/**/*', ['reload-on-config'])

  var watcher = watchify(browserify({
    // Specify the entry point of your app
    entries: ['src/js/app.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }).transform(babel))

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source('src/js/app.js'))
      .pipe(gulp.dest('./' + constants.theme + '/'))
  })
})

gulp.task('reload-on-css', ['scss'], reload)
gulp.task('reload-on-js', ['browserify'], reload)
gulp.task('reload-on-img', ['images'], reload)
gulp.task('reload-on-svg', ['svgIcons'], reload)
gulp.task('reload-on-assets', ['assets'], reload)
gulp.task('reload-on-sections', ['sections'], reload)
gulp.task('reload-on-snippet', ['snippets'], reload)
gulp.task('reload-on-template', ['templates'], reload)
gulp.task('reload-on-locale', ['locales'], reload)
gulp.task('reload-on-layout', ['layout'], reload)
gulp.task('reload-on-config', ['config'], reload)

function reload (done) {
  browsersync.reload()
  done()
}
