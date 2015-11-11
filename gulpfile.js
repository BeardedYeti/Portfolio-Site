var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    compass = require('gulp-compass'),
    concat = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),

    input = {
      'html': 'client/views/*.html',
      'sass': 'client/sass/*.scss',
      'javascript': 'client/js/**/*.js'
    },

    output = {
      'html'
    }
