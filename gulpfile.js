var gulp = require('gulp'),
    del = require('del'),
    forge = require('./build');

gulp.task('default', ['build']);
gulp.task('build', ['clean:metal', 'build:metal']);
gulp.task('serve', ['clean:metal', 'serve:metal']);

gulp.task('build:metal', function() {
  forge.build();
});

gulp.task('clean:metal', function (cb) {
  del(['build/**/*'], cb);
});

gulp.task('serve', function() {
  forge.start();
});


gulp.task('test', function() {

});
