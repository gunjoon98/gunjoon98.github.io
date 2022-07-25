#!/bin/bash
bundle exec jekyll build
rm -r dlans321.github.io/*
cp -r _site/* dlans321.github.io/

cd dlans321.github.io/
git add *
git add -u
git commit -m "commit"
git push

cd ..
git add *
git add -u
git commit -m "commit"
git push


