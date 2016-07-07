var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
//var less = require('gulp-less');
var less = require('gulp-less-sourcemap');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// Where do you store your less files?
var lessDir = 'less';

// Which directory should LESS compile to?
var targetCSSDir = 'dist/css';

// Compile less, autoprefix CSS3,
// and save to target CSS directory
gulp.task('css', function () {
	return gulp.src(lessDir + '/main.less')
		.pipe(less({sourceMap:{sourceMapRootpath:'./'}}).on('error', gutil.log))
		.pipe(autoprefix('last 10 version'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(targetCSSDir))
		.pipe(notify('CSS minified'))
});

// Keep an eye on less files for changes...
gulp.task('watch', function () {
	gulp.watch(lessDir + '/*.less', ['css']);
});

// What tasks does running gulp trigger?
gulp.task('default', ['css', 'watch']);