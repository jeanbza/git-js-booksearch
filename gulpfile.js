var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var del = require('del');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var paths = {
  application_scripts: ['src/**/*.js']
};

/* JavaScript */
gulp.task('browserify:js', ['clean:js'], function() {
  var extensions = ['.js', '.json', '.es6', '.jsx'];
  return browserify({
      debug: true,
      fullPaths: true,
      extensions: extensions
    })
    .transform(babelify.configure({
      extensions: extensions
    }))
    .require("./src/app.js", {
      entry: true
    })
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

/* Styles */
gulp.task('scss', ['clean:css'], function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', function(err) {
      console.error(err);
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist/css/'));
});

/* Clean up */
gulp.task('clean:js', function() {
  return del(['dist/js/*', 'dist/js']);
});

gulp.task('clean:css', function() {
  return del(['dist/css/*', 'dist/css']);
});

gulp.task('clean:images', function() {
  return del(['dist/img/*', 'dist/img']);
});

gulp.task('clean', ['clean:js', 'clean:css', 'clean:images']);

gulp.task('default', ['clean', 'images', 'browserify:js', 'scss']);
