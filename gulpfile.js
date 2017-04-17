// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jasmine = require('gulp-jasmine');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

const http = require('http');
const connect = require('connect');
const serveStatic = require('serve-static');

let httpServer; 

//local host will be set up for testing purposes
//Contents of public folder can be viewed by typing in URL
//URL = localhost:9000
gulp.task('http', (done) => {
  const app = connect().use(serveStatic('public'));
  httpServer = http.createServer(app).listen(9000, done);
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('./assets/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

//unit test
// Test JS
gulp.task('unit_test', function () {
    return gulp.src('assets/js/*.js')
        .pipe(jasmine());
});


// Default Task
gulp.task('default', ['lint','unit_test', 'http'], ()=> {
    httpServer.close();
});


/* Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

*/
