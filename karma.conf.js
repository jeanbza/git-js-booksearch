module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['babelify']
    },
    reporters: [
      'dots', 'html'
    ],
    'scripts': {
      'test': './node_modules/.bin/karma start --single-run --browsers Firefox'
    }
  });
};
