var gulp = require('gulp');
var less = require('gulp-less');
var scss = require('gulp-scss');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-csso');

gulp.task('js', function(){
    return gulp.src('resources/js/*.js')
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(gulp.dest('public/js'))
});

gulp.task('css', function(){
    return gulp.src('resources/js/*.scss')
        .pipe(scss())
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/css'))
});

gulp.task('default', [ 'js', 'css' ]);

