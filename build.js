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
    watch             = require('metalsmith-watch'),
    serve             = require('metalsmith-serve'),
    skip              = require('metalsmith-skip'),
    Metalsmith        = require('metalsmith')
    ;

var forge = exports;

var skip_config = {
  'keys': ['skip', 'private', 'draft', 'example']
};

var watch_config = {
  'paths': {
    'src/**/*': true,
    'templates/**/*': '**/*.md',
  },
  'livereload': true,
};

var serve_config = {
  'port': 9876,
  'verbose': true
};

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
  'perPage': 10,
  'path': 'blog/page'
};

forge.init = function() {
  return Metalsmith(__dirname);
};

forge.finish = function(metal_instance) {
  return metal_instance
    .build(function(err) { if (err) throw err; })
    ;
};

forge.construct = function(metal_instance) {
  return metal_instance
    .use(skip(skip_config))
    // .use(collections(collections_config))
    // .use(paginate(pagination_config))
    // .use(markdown())
    // .use(layouts(layouts_config))
    ;
};

forge.watch = function(metal_instance) {
  return metal_instance
    .use(watch(watch_config))
    .use(serve(serve_config))
    ;
};


forge.build = function() {
  forge.finish(
    forge.construct(forge.init())
  );
};

forge.start = function() {
  forge.finish(
    forge.watch(
      forge.construct(forge.init())
    )
  );
};
