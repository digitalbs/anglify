module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine', 'browserify'],

        files: [
            'spec/app/**/*.js'
        ],
        preprocessors: {
            'spec/app/**/*.js': ['browserify']
        },
        exclude: [],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 20000,
        singleRun: false,
        reportSlowerThan: 500,
        browserify: {
            watch: true
        }
    });
};