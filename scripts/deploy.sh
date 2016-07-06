# ssh setup
eval "$(ssh-agent -s)" # Start the ssh agent
echo "$DEPLOY_KEY" > deploy_key.pem
chmod 600 deploy_key.pem # This key should have push access
ssh-add deploy_key.pem

npm run build
git clone -b gh-pages --single-branch git@github.com:trybash/game.git
