var gulp = require('gulp')
var browsersync = require('browser-sync').create()
var config = require('../config.json')

gulp.task('browsersync', function (done) {
  browsersync.init({
    proxy: 'https://bread-and-butter-designs.myshopify.com',
    notify: false,
    startPath: '/?preview_theme_id=' + config.theme_id
  })
})

module.exports = browsersync
