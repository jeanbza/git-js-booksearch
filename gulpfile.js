var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var watch = require('gulp-watch');
var del = require('del');
var path = require('path'); // TODO: Replace with simple path

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var paths = {
  application_scripts: ['src/**/*.js']
};

gulp.task('watch', [], function() {
  gulp.watch(['./src/*.js', './src/**/*.js'], ['build:js']);
});

gulp.task('build:js', ['clean:js'], function() {
  var extensions = ['.js', '.json', '.es6', '.jsx'];
  return browserify({
      debug: true,
      fullPaths: true,
      extensions: extensions
    })
    .transform(babelify.configure({
      extensions: extensions
    }))
    .require('./src/app.js', {
      entry: true
    })
    .bundle()
    .pipe(source('./app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('less', ['clean:css'], function() {
    return gulp.src('./less/**/*.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'node_modules', 'semantic-ui-less') ]
      }))
      .pipe(concat('app.css'))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('clean:js', function() {
  return del(['dist/js/*', 'dist/js']);
});

gulp.task('clean:css', function() {
  return del(['dist/css/*', 'dist/css']);
});

gulp.task('clean', ['clean:js', 'clean:css']);

gulp.task('default', ['clean', 'build:js', 'less']);
