const gulp = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");

gulp.task('es6', () => {
	browserify('src/script.js')
		.transform('babelify', {
			presets: ['es2015']
		})
		.bundle()	
		.pipe(source('script.js'))
		.pipe(buffer())
		.pipe(gulp.dest('build/'));
});