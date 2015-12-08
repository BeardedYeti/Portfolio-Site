var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create(),
    spa = require('browser-sync-spa');
    sass = require('gulp-sass'),
    concat = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    Server = require('karma').Server,
    protractor = require("gulp-protractor").protractor,
    webdriver_standalone = require('gulp-protractor').webdriver_standalone,
    webdriver_update = require('gulp-protractor').webdriver_update,



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


// *BrowserSync Using Proxy Created by Express*
/* *To Start:
      - Start mongoDB (mongod --dbpath "mongodata_folder_name"--> mongo --> Use dbName)
      - $ node server.js
      - $ gulp serve
*/
/*Uncomment to execute node server.js - Not sure if it is working yet
    gulp.task('server', function (cb) {
      exec('node server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });


      exec('mongod --dbpath "E:\Users\Smith\Desktop\Project Repositories\mongodata"', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
      exec('mongo', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
      exec('use blog', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
    })
*/

    browserSync.use(spa({
        selector: "[ng-app]" // Only needed for angular apps
    }));

    gulp.task('serve', ['build-css'], function() {

        browserSync.init({
            proxy: {
              target: "localhost:8080"
            }
        });

        gulp.watch("source/sass/*.scss", ['build-css']);
        gulp.watch("client/js/**/*.js").on('change', browserSync.reload);
        gulp.watch("client/views/*.html").on('change', browserSync.reload);
    });

// *Use $ gulp to run tasks*

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
    .pipe(gulp.dest(output.stylesheets))
    .pipe(browserSync.stream());
    });

// *Copy any html files to client*
    gulp.task('copy-html', function() {
      return gulp.src(input.html)
        .pipe(gulp.dest(output.html));
    });

// *Watches Files for Changes and Runs Task on Update*
    gulp.task('watch', function() {
      gulp.watch(input.javascript, ['jshint', 'build-js']);
      gulp.watch(input.sass, ['build-css']);
      gulp.watch(input.html, ['copy-html']);
    });

//--------------------------------------------------------
// *Run Karma Test in Jasmine Framework Once and Exit*
//  To Use $ gulp test
    gulp.task('test', function (done) {
      new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
      }, done).start();
    });
//--------------------------------------------------------

// *Watch for File Changes and Re-run Tests on Each Change*
    gulp.task('tdd', function (done) {
      new Server({
        configFile: __dirname + '/karma.conf.js'
      }, done).start();
    });

// *E2E Tests With Protractor and Selenium Webdriver Server*
    gulp.task('webdriver_update', webdriver_update);
    gulp.task('webdriver_standalone', webdriver_standalone);
    gulp.task('protractor', ['webdriver_update'], function(cb) {
        gulp.src(['./test/e2e/*.js']).pipe(protractor({
            configFile: 'protractor.conf.js',
        })).on('error', function(e) {
            console.log(e)
        }).on('end', cb);
    });

    /*gulp.task('protractor', function(done) {
      var args = ['--baseUrl', 'http://localhost:3000'];
      gulp.src(["./test/e2e/*.js"])
        .pipe(protractor({
          configFile: "tests/protractor.conf.js",
          args: args
        }))
        .on('error', function(e) { throw e; });
    });*/

gulp.task('default', ['jshint', 'build-js', 'build-css', 'copy-html', 'watch']);
gulp.task('unit', ['test', 'serve']);
gulp.task('unit:cont', ['tdd', 'serve']);
gulp.task('e2e', ['serve', 'webdriver_update', 'webdriver_standalone','protractor']);
