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

var tap = function(file_interceptor, metal_interceptor) {
  return function(files, metalsmith, done) {
    file_interceptor(files);
    metal_interceptor(metalsmith);
  };
};

var helpers = require('./templates/helpers');

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
  },
  'helpers': helpers()
};

var collections_config = {
  'posts': {
    'pattern': 'content/posts/*.md',
    'sortBy': 'date',
    'reverse': true,
    'limit': 5
  },
  'projects': {
    'pattern': 'content/projects/*.md'
  }
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
    .clean(true)
    .use(skip(skip_config))
    .use(collections(collections_config))
    .use(markdown())

    .use(layouts(layouts_config))

    // .use(tap(console.log,
    //          function(obj) {
    //            console.log(JSON.stringify(obj._metadata, null, 4));
    //          }))
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
