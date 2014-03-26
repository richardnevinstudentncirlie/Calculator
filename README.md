Calculator
==========
richardnevinstudentncirlie

1. GIT Repository
https://github.com/richardnevinstudentncirlie/Calculator.git


2. Clone Repository
cd C:\MScWebTech2\AdvancedRichInterApps\APPS
git clone https://github.com/richardnevinstudentncirlie/Calculator.git Calculator
git add .
git status
git commit -a -m "Initial Setup"
git push
git pull
git commit -a -m "Basic Calculator and testing"
git push
git commit -a -m "Include Calculate.js"
git push

3. Gemfile
# A sample Gemfile
#source "https://rubygems.org"
# gem "rails"

source :rubygems
gem 'rack'


4. config.ru
use Rack::Static,
  :urls => ["/html", "/js", "/css"],
  :root => "app"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'app, max-age=86400'
    },
    File.open('app/html/index.html', File::RDONLY)
  ]
}


5.
bundle install


6.
git remote add origin https://github.com/richardnevinstudentncirlie/Calculator.git
git push origin master
git pull


7.
heroku create
http://mighty-cove-2855.herokuapp.com/ | git@heroku.com:mighty-cove-2855.git


8.
git remote add heroku git@heroku.com:mighty-cove-2855.git


9.
git push heroku master


10.
http://mighty-cove-2855.herokuapp.com/

11.
git commit -a -m "Description of change"
git push origin master
git push heroku master
http://desolate-mesa-9336.herokuapp.com/