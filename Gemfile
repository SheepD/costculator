source 'https://rubygems.org'
ruby '2.4.0'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', github: 'rails/rails'

gem 'pg'
gem 'puma', '~> 3.0'
gem 'coffee-rails'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'npm-pipeline-rails'

gem 'jbuilder', '~> 2.5'

group :development, :test do
  gem 'pry-byebug'
  gem 'faker'
  gem 'factory_girl_rails'
end

group :test do
  gem 'rspec-rails'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
