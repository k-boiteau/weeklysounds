activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end

# Prismic configuration
api = Prismic.api('https://weeklysounds.prismic.io/api')
response = api.query(Prismic::Predicates.at("document.type", "playlist"))
playlists = response.results.sort_by {|playlist| playlist.fragments['date'].value}.reverse

# Routes
page "/playlists.html", locals: { playlists: playlists }
playlists.each do |playlist|
  proxy "/playlists/#{playlist.slugs.first}.html", "/playlists/show.html", locals: { playlist: playlist }, ignore: true
end

# Helpers
helpers do
  # View helpers
  def truncate(string, number)
    if string.size > number
      "#{string.chars.first(number).join}..."
    else
      string
    end
  end
end
