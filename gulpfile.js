var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var del = require('del');
var path = require('path');

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
    .pipe(source('./app.js'))
    .pipe(gulp.dest('dist/js'));
});

/* Styles */
gulp.task('less', ['clean:css'], function() {
    return gulp.src('./less/**/*.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'node_modules', 'semantic-ui-less') ]
      }))
      .pipe(concat('app.css'))
      .pipe(gulp.dest('dist/css'));
});

/* Clean up */
gulp.task('clean:js', function() {
  return del(['dist/js/*', 'dist/js']);
});

gulp.task('clean:css', function() {
  return del(['dist/css/*', 'dist/css']);
});

gulp.task('clean', ['clean:js', 'clean:css']);

gulp.task('default', ['clean', 'browserify:js', 'less']);
