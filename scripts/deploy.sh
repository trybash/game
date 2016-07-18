#!/usr/bin/env sh
set -e

# This script can also be used locally to deploy to gh-pages

echo "\nRemove old dist/ directory\n"
rm -rf dist
echo "\nClone gh-pages branch\n"
git clone -b gh-pages --single-branch git@github.com:trybash/game.git dist
echo "\nBuild into gh-pages branch\n"
npm run build

echo "\nCommit and push changes\n"
cd dist
git add --all
git commit -m "Automatic build for: '$(cd .. && git log -1 --pretty=%B)'" \
  || (echo "Nothing new to commit" && exit)
echo "\nPushing updates\n"
git push origin gh-pages
