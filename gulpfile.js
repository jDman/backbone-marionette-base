var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    connect      = require('gulp-connect'),
    open         = require("gulp-open"),
    browserify   = require('gulp-browserify'),
    sass         = require('gulp-sass'),
    handlebars   = require('gulp-handlebars'),
    defineModule = require('gulp-define-module'),
    port         = process.env.port || 3031;

//open server
gulp.task('open', function(){
    var options = {
      url: 'http://localhost:' + port,
    };
    gulp.src('./app/index.html')
        .pipe(open('', options));
});

//connect to server
gulp.task('connect', function() {
    connect.server({
      root: 'app',
      port: port,
      livereload: true
    });
});

//browserify js
gulp.task('browserify', function () {
  return gulp.src('./app/js/main.js')
             .pipe(browserify())
             .pipe(concat('app.js'))
             .pipe(gulp.dest('./app/scripts'));
});

//uglify, concat js
gulp.task('js', function () {
  return gulp.src('./app/scripts/**/*.js')
             .pipe(uglify())
             .pipe(gulp.dest('./dist/scripts'))
             .pipe(connect.reload());
});

//sass to css
gulp.task('sass', function () {
  return gulp.src('./app/scss/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('./app/css'))
             .pipe(gulp.dest('./dist/css'))
             .pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('./app/index.html')
             .pipe(gulp.dest('./dist'))
             .pipe(connect.reload());
});

//handlebars templates
gulp.task('templates', function () {
  return gulp.src('./app/templates/*.hbs')
             .pipe(handlebars())
             .pipe(defineModule('node'))
             .pipe(gulp.dest('./app/templates/'))
             .pipe(gulp.dest('./dist/templates/'))
             .pipe(connect.reload());
});

gulp.task('updateTemplates', function () {
  return gulp.src('./app/templates/*.js')
             .pipe(gulp.dest('./dist/templates/'));
});

gulp.task('watch', function() {

  gulp.watch('./app/templates/*.hbs', ['templates']);

  gulp.watch('./app/templates/*.js', ['updateTemplates']);

  gulp.watch('./app/js/**/*.js', ['browserify']);

  gulp.watch('./app/scripts/**/*.js', ['js']);

  gulp.watch('./app/scss/*.scss', ['sass']);

  gulp.watch('./app/index.html', ['html']);

});

gulp.task('default', ['browserify', 'templates', 'updateTemplates', 'connect', 'open', 'watch']);
