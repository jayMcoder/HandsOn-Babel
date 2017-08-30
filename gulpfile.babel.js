/*
* Gulp configuration for babel task
*/
const gulp = require('gulp');
const babel = require('gulp-babel');

/* Default task loads js from src
* folder and outputs to dist/gulp folder
*/
gulp.task('default', ()=>{
  return gulp.src('src/*.js')
  .pipe(babel())
  .pipe(gulp.dest('dist/gulp'));
});
