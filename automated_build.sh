# Copy static site
CWD=`pwd`

# Clone Pages repository
cd /tmp
git clone weeklysounds build

# cd build && git checkout -b YOUR_BRANCH origin/YOUR_BRANCH # If not using master

# Trigger Middleman rebuild
cd $CWD
bundle exec middleman contentful --rebuild

# Push newly built repository
cp -r $CWD/build/* /tmp/build

cd /tmp/build

git config --global user.email "germain.loret@gmail.com"
git config --global user.name "germainloret"

git add .
git commit -m "Automated Rebuild"
git push -f origin gh-pages
