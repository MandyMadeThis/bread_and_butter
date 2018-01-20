var gulp = require('gulp')
var sass = require('gulp-sass')
var sassGlob = require('gulp-sass-glob')
var autoprefixer = require('gulp-autoprefixer')
var constants = require('../constants')
var notify = require('./notify')
var concat = require('gulp-concat')
var shopify = require('./shopify')

// scss —> Expanded/Readable CSS file
gulp.task('scss', ['clean'], function () {
  
  var styleStream = convertSCSS({
    path: 'src/scss/style.scss',
    output: 'style.css'
  })

  return styleStream
})

function convertSCSS (options) {
  return gulp.src(options.path)
    .on('error', notify)
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer({ browsers: ['last 2 version', '> 1%', 'IE 10'] }))
    .pipe(concat(options.output))
    .pipe(gulp.dest('./' + constants.theme + '/assets'))
    .pipe(shopify.stream())
}
