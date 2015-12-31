var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
//var concat = require('gulp-concat');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./js/**/*.js', ['livereload', 'browserify']);
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('browserify', function() {
  // Single entry point to browserify
  gulp.src('./js/*.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest('./public/js/build'));
});

// gulp.task('scriptsConcat', function() {
//   return gulp.src('./public/js/build/*.js')
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('./public/dist/'));
// });

gulp.task('default', ['connect', 'watch', 'sass', 'browserify']);