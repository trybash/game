#!/usr/bin/env sh

# To enable deployment with Git you need to add a new SSH key.
# 1. Create a key
#   - run `ssh-keygen -t rsa -b 4096 -C "your@email.com"`
#   - leave the password empty
#   - chose a new location for the key. Maybe your desktop
# 2. Add the public key to Github
#   - Copy the content of yourkey.pub
#   - Go to github.com/your-organisation/your-repo/settings/keys
#   - Add key with a meaningful title here
#   - Check "Allow write access"
# 3. Edit private key file
#   - Open the private key in your text editor
#   - Replace each new-line with "\n"
# 4. Add private key to Travis
#   - travis-ci.org/your-organisation/your-repo/settings
#   - Add a new environment variable "DEPLOY_KEY"
#   - Make sure "Display value in build log" is "OFF"
#   - Add content of private key file as value


echo "Setup SSH\n"
eval "$(ssh-agent -s)" # Start the ssh agent
# Read key, replace \n with actual new lines and write to file
echo "$DEPLOY_KEY" | sed 's/\\n/\n/g' > deploy_key.pem

chmod 600 deploy_key.pem # This key should have push access
ssh-add deploy_key.pem

./deploy.sh
