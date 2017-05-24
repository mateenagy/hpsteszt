// /////////////////////////////////////////////////////////////////////////////
// Required
// /////////////////////////////////////////////////////////////////////////////

var gulp = require('gulp'),
	sass = require('gulp-sass');
	browserSync = require('browser-sync').create();

// /////////////////////////////////////////////////////////////////////////////
// Sass task
// /////////////////////////////////////////////////////////////////////////////

gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

// /////////////////////////////////////////////////////////////////////////////
// Sass task
// /////////////////////////////////////////////////////////////////////////////

gulp.task('html', function(){
	gulp.src('*.html')
	.pipe(browserSync.stream());
});

// /////////////////////////////////////////////////////////////////////////////
// BrowserSync task
// /////////////////////////////////////////////////////////////////////////////

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// /////////////////////////////////////////////////////////////////////////////
// Watch task
// /////////////////////////////////////////////////////////////////////////////

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('*.html', ['html']);
});

// /////////////////////////////////////////////////////////////////////////////
// Default task
// /////////////////////////////////////////////////////////////////////////////

gulp.task('default', ['sass', 'html', 'browser-sync', 'watch']);