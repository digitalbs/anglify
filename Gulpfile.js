var gulp = require('gulp'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    bower = require('gulp-bower'),
    karma = require('gulp-karma'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

//Gulp Tasks

//bower
gulp.task('bower_install', function () {
    return bower()
        .pipe(gulp.dest('./lib/'));
});

//sass
gulp.task('sass', function () {
    gulp.src([
        './lib/bootstrap-sass-official/assets/stylesheets/bootstrap.scss',
        './src/app/sass/*.scss'
    ])
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});

//Browserify
gulp.task('browserify', function () {
    return browserify('./src/app/js/app.js')
        .bundle()
        .pipe(source('myApp.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});

//JSHint
gulp.task('lint', function () {
    gulp.src('./src/app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//connect
gulp.task('connect', function () {
    connect.server({
        port: 8000,
        livereload: true
    });
});

//watch
gulp.task('watch', ['lint'], function () {
    gulp.watch(['./src/app/js/*.js', './src/app/js/**/*.js'], [
        'lint',
        'browserify'
    ]);

    gulp.watch(['./src/**/*.scss'], [
        'sass'
    ]);

    gulp.watch(['index.html', './src/app/views/**/*.html'], [
        'views'
    ]);
});

//clean
gulp.task('bower', ['bower_install'], function () {
    return gulp.src('./bower_components', {read: false})
        .pipe(clean());
});

//karma
gulp.task('karma', function () {
    return gulp.src('./spec/app/**/*.js')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }));
});

//view
gulp.task('views', function () {
    gulp.src('index.html')
        .pipe(connect.reload());

    gulp.src('src/app/views/**/*')
        .pipe(connect.reload());
});

// Dev task
gulp.task('develop', [
    'browserify',
    'connect',
    'sass',
    'watch',
    'karma'
]);