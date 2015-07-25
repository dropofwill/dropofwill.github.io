var gulp = require('gulp'),
    gulp_front_matter = require('gulp-front-matter'),
    gulpsmith = require('gulpsmith'),
    markdown = require('metalsmith-markdown'),
    layouts = require('metalsmith-layouts'),
    collections = require('metalsmith-collections'),
    permalinks = require('metalsmith-permalinks'),
    _ = require('lodash');

var layouts_config = {
  'engine': 'handlebars',
  'default': 'layout.handlebars',
  'directory': 'src/layouts'
};

var collections_config = {
  'blogs': {
    pattern: 'src/content/blogs/*.md',
    sortBy: 'date',
    reverse: true
  },
  'projects': {
    pattern: 'src/content/projects/*.md'
  }
};

gulp.task('default', function() {

});

gulp.task('build', function() {
  gulp.src('./src/**/*')
    .pipe(gulp_front_matter())
      .on("data", function(file) {
        _.assign(file, file.frontMatter);
        delete file.frontMatter;
      })

    .pipe(
      gulpsmith()
        .use(markdown())
        // .use(collections(collections_config))
        .use(layouts(layouts_config))
  )
  .pipe(gulp.dest('./build'))
  ;
});

gulp.task('test', function() {

});
