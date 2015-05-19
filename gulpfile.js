var gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  cssmin = require('gulp-cssmin');

// CSS
// ---

// LESS kompilace + SourceMaps

gulp.task('less', function () {
  return gulp.src('./src/less/index.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(rename('style.css'))
    .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ios 6', 'ie 7', 'ie 8', 'ie 9'],
            cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'));
});

// CSS minifikace

gulp.task('cssmin', function () {
  return gulp.src('./dist/css/style.css')
    .pipe(cssmin())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(gulp.dest('./dist/css/'));
});



gulp.task('default', function() {

});
