const gulp = require('gulp');
const htmlmin = require('gulp-html-minifier');
const mkdirp = require('mkdirp');
const copydir = require('copy-dir');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  console.log('1. Minfy: Gulp build');
});

gulp.task('build', () => {

  mkdirp('./build', function (err) {
    if (err) console.error(err)
    else {
      // Minify HTML
      gulp.src('./*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./build'));

      // Minify CSS
      gulp.src('./css/*')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./build/css'));

      // Minify JavaScript
      gulp.src('./js/*.js')
      .pipe(uglify({
        mangle: false
      })).pipe(gulp.dest('./build/js'));

      copydir('./font-awesome', './build/font-awesome', (err, files) => {});
      copydir('./img', './build/img', (err, files) => {});
      copydir('./fonts/comme', './build/fonts/comme', (err, files) => {});
    }
  });
});
 