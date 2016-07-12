#!/usr/bin/env sh

# This script can also be used locally to deploy to gh-pages

echo "Remove old dist/ directory"
rm -rf dist
echo "Clone gh-pages branch"
git clone -b gh-pages --single-branch git@github.com:trybash/game.git dist
echo Build into gh-pages branch
npm run build

echo "Commit and push changes"
cd dist
git add --all
git commit -m "Automatic build for: '$(cd .. && git log -1 --pretty=%B)'" \
  || (echo "Nothing new to commit" && exit)
echo "Pushing updates"
git push origin gh-pages
