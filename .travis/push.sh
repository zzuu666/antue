#!/bin/sh

setup_git() {
  git config --global user.email "546485299@qq.com"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout -b gh-pages
  cp ./site/dist/* ./
  git add .
  git commit -m "Travis update: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin/gh-pages https://${GH_TOKEN}@github.com/zzuu666/antue.git
  git push --quiet --set-upstream origin gh-pages
}

setup_git
commit_website_files
upload_files
