###
# Blog settings
###

Time.zone = "UTC"

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "posts"

  # Matcher for blog source files
  blog.sources = "content/posts/{title}.html"
  blog.permalink = "{year}/{title}.html"
	blog.layout = "article"
  blog.summary_length = 300
  blog.default_extension = ".md"
  blog.taglink = "tags/{tag}.html"
  # blog.permalink = "{title}.html"
  # blog.summary_separator = /(READMORE)/
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # blog.summary_generator = Proc.new do |rendered|
  #   doc = Oga.parse_xml rendered
  #   summary = doc.css('p').first
  #   puts summary
  #   puts doc.css('p')
  #   return summary
  # end

  # Enable pagination
	blog.paginate = true
	blog.per_page = 2
	blog.page_link = "page/{num}"
end

page "/feed.xml", layout: false
page "/bizleg_feed.xml", layout: false
page "/linux_dev_feed.xml", layout: false

###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.output_style = :compact
end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", layout: false
#
# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

activate :directory_indexes

activate :syntax
set :inline_theme, "github"
set :markdown_engine, :kramdown
set :markdown, layout_engine: :slim,
               tables: true,
               smartypants: true

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

###
# Disqus
###
set :disqus_short_name, 'dropofwill'

activate :deploy do |deploy|
  deploy.method = :git
end

set :site_url, ''

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
	activate :minify_css

  # Minify Javascript on build
	activate :minify_javascript

  # Enable cache buster
	activate :asset_hash

  # Use relative URLs
  activate :relative_assets
  set :relative_links, true
  set :site_url, '/blog'
  # set :http_prefix, "/blog"
end
