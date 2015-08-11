var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var jest = require('gulp-jest');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var istanbul = require('gulp-istanbul');
var runSequence = require('run-sequence');

gulp.task('test_client', function () {
    return gulp.src('__tests__').pipe(jest({
        scriptPreprocessor: "../node_modules/gulp-jest/preprocessor.js",
        unmockedModulePathPatterns: [
            "node_modules/react"
        ],
        testPathIgnorePatterns: [
            "node_modules"
        ],
        moduleFileExtensions: [
            "js",
            "json",
            "react"
        ]
    }));
});

gulp.task('jshint', function (cb) { 
 return gulp.src(['./src/**/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  //************************************
  //IF YOU WANT TO ENFORCE JSHINT  AND MAKE IT FAIL ON ERRORS
  //UNCOMMENT THE FOLLOWING LINE
  //  .pipe(jshint.reporter('fail')); 
  //************************************
});


gulp.task('test_server', function (cb) {
   gulp.src(['src/server/**/*.js'])
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
       gulp.src(['src/server/test/**/test*.js'], { read: false })
        .pipe(mocha())
        .pipe(istanbul.writeReports({ dir: './server_coverage' , reporters: ['lcov','text-summary']})) // Creating the reports after tests ran
      //************************************
      //IF YOU WANT TO ENFORCE CODE COVERAGE  AND MAKE IT FAIL ON ERRORS
      //UNCOMMENT THE FOLLOWING LINE
      //.pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })) // Enforce a coverage of at least 90%
      //************************************
        .on('end', cb);
    });
});

gulp.task('test',function(cb) {
  runSequence('jshint','test_client','test_server',cb)
});
  
gulp.task('browserify', function() {
   return gulp.src('src/client/js/main.js')
      .pipe(browserify({transform:'reactify'}))
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('copy', function(cb) {
    gulp.src('src/client/index.html')
      .pipe(gulp.dest('dist'));
    gulp.src('src/client/css/**/*')
      .pipe(gulp.dest('dist/css')); 
    cb();
});

gulp.task('build',function(cb) {
  runSequence([ 'browserify', 'copy'])
});

gulp.task('default',function() {
  runSequence('test', 'build');
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['build']);
});
