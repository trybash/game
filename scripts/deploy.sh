echo "Hello world!"
# echo "Setup SSH"
# eval "$(ssh-agent -s)" # Start the ssh agent
# echo "$DEPLOY_KEY" > deploy_key.pem
# chmod 600 deploy_key.pem # This key should have push access
# ssh-add deploy_key.pem

# echo "Clone gh-pages branch"
# git clone -b gh-pages --single-branch git@github.com:trybash/game.git dist
# echo Build into gh-pages branch
# npm run build

# echo "Commit changes with useful message"
# cd dist
# git add --all
# git commit -m "Automatic build for: '$(cd .. && git log -1 --pretty=%B)'" \
#   || echo "Nothing new to commit" && exit
# echo "Pushing updates"
# git push origin gh-pages
