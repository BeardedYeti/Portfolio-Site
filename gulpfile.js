var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    concat = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),

    input = {
      'html': 'source/html/*.html',
      'sass': 'source/sass/*.scss',
      'javascript': 'source/js/**/*.js'
    },

    output = {
      'html': 'client/views',
      'stylesheets': 'client/css',
      'javascript': 'client/js'
    }

// *Lint Javascript through jshint*
    gulp.task('jshint', function() {
      return gulp.src('source/javascript/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
    });

// *Concatenate JS files, minify if --type production*
    gulp.task('build-js', function() {
      return gulp.src(input.javascript)
        .pipe(sourcemaps.init())
          .pipe(concat('build.js'))
          // Only uglify if gulp is ran with '--type production'
          .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.javascript));
    });

// *Compile SCSS Files*
    gulp.task('build-css', function() {
    return gulp.src(input.sass)
    .pipe(sourcemaps.init())
      .pipe(sass({
        css: 'client/css',
        sass: 'source/sass'
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.stylesheets));
    });

// *Copy any html files to client*
    gulp.task('copy-html', function() {
      return gulp.src(input.html)
        .pipe(gulp.dest(output.html));
    });

// *Watches files for changes and runs task on update*
    gulp.task('watch', function() {
      gulp.watch(input.javascript, ['jshint', 'build-js']);
      gulp.watch(input.sass, ['build-css']);
      gulp.watch(input.html, ['copy-html']);
    });

    

gulp.task('default', ['jshint', 'build-js', 'build-css', 'copy-html', 'watch']);
