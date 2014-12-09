var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

gulp.task('scripts', function() {
  gulp.src(['./bower_components/jquery/dist/jquery.min.js'])
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./dist/assets/js'))
});

gulp.task('styles', function() {
  gulp.src(['sass/lithium.scss'])
    .pipe(sass({ style: 'compressed', 
        loadPath: [
            './sass',
            './bower_components/font-awesome/scss',
            './bower_components/compass-breakpoint/stylesheets',
            './bower_components/animate.css-scss',
            './bower_components/juice/dist',
            './bower_components/jeet/scss',
            './bower_components/modular-scale/stylesheets',
    ] }))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('fontawesome', function() {
    return gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}').pipe(gulp.dest('./dist/assets/fonts')); });

gulp.task('watch', function() {
    watch('**/*.scss', function () {
        gulp.start('styles');
    });
});