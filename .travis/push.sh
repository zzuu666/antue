#!/bin/sh

setup_git() {
  git config --global user.email "546485299@qq.com"
  git config --global user.name "Travis CI"
  git clone https://${GH_TOKEN}@github.com/zzuu666/antue.git gh-pages
  cd gh-pages
}

commit_website_files() {
  git checkout gh-pages
  cp ../site/dist/* ./
  git add .
  git commit -m "Travis update: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git push --quiet
}

setup_git
commit_website_files
upload_files
