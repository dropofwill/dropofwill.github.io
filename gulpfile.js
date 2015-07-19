var gulp = require('gulp'),
    gulpsmith = require('gulpsmith'),
    permalinks = require('metalsmith-permalinks');

gulp.task('default', function() {

});

gulp.task('build', function() {
  gulp.src('./src/**/*')
    .pipe(
      gulpsmith()
        .use(permalinks('post/:title'))
  )
  .pipe(gulp.dest('./build'))
  ;
});

gulp.task('test', function() {

});
