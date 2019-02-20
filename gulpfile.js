const { task, src, dest, series } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const rename = require('gulp-rename')
const del = require('del')

function clean () {
  return del(['./dist/*'])
}

function build () {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ]

  return src(['src/style/yzui.scss'])
    .pipe(sass({
      precision: 10
    }))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(dest('./dist'))
}

function copyIconJs () {
  return src(['src/components/Icons/iconfont.js'])
    .pipe(dest('./dist'))
}

function minify () {
  return src(['dist/yzui.css'])
    .pipe(cssnano())
    .pipe(rename('yzui.min.css'))
    .pipe(dest('./dist'))
}

exports.build = series(clean, build, copyIconJs)
exports.default = series(clean, build, copyIconJs, minify)
