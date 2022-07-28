#!/bin/bash
bundle exec jekyll build

cd ../cache/
git rm -r *
cp -r ../blog/_site/* .
git add .
git commit -m "commit"
git push

cd ../blog/
git add .
git commit -m "commit"
git push


