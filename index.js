var _                 = require('lodash'),
    gulp              = require('gulp'),
    gulp_front_matter = require('gulp-front-matter'),
    gulpsmith         = require('gulpsmith'),
    markdown          = require('metalsmith-markdown'),
    layouts           = require('metalsmith-layouts'),
    collections       = require('metalsmith-collections'),
    permalinks        = require('metalsmith-permalinks'),
    branch            = require('metalsmith-branch'),
    relative          = require('metalsmith-relative'),
    paginate          = require('metalsmith-paginate'),
    Metalsmith        = require('metalsmith')
    ;

var layouts_config = {
  'engine': 'handlebars',
  'default': 'layouts/layout.hbs',
  'directory': 'templates',
  'partials': {
    'header': '../partials/header',
    'footer': '../partials/footer'
  }
};

var collections_config = {
  'blogs': {
    'pattern': 'src/content/blogs/*.md',
    'sortBy': 'date',
    'reverse': true
  },
  'projects': {
    'pattern': 'src/content/projects/*.md'
  }
};

var pagination_config = {
  perPage: 10,
  path: 'blog/page'
};

Metalsmith(__dirname)
  .use(collections(collections_config))
  .use(paginate(pagination_config))
  .use(markdown())
  .use(layouts(layouts_config))
  .build(function(err) {
    if (err) throw err;
  })
  ;
