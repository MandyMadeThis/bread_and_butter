var gulp = require('gulp')
var rename = require('gulp-rename')
var svgstore = require('gulp-svgstore')
var shopify = require('./shopify')
var cheerio = require('gulp-cheerio')

gulp.task('svgIcons', ['clean'], function () {
  return gulp.src('src/icons/**/*.svg')
    .pipe(rename({prefix: 'icon-'}))
    .pipe(svgstore({inlineSvg: true}))
    .pipe(cheerio({
      run: function ($) {
        $('svg').attr('style', 'position: absolute; width: 0; height: 0; overflow: hidden;');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(rename({prefix: 'svg-', extname: '.liquid'}))
    .pipe(gulp.dest('./src/snippets/'))
    .pipe(shopify.stream())
})
