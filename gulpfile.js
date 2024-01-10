const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('./src/**/main.scss') // Path to your SCSS files
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist')); // Output directory for CSS files
}
gulp.task('sass', compileSass);

function watchSass() {
    gulp.watch('./src/**/*.scss', compileSass);
}
gulp.task('watch', watchSass);

