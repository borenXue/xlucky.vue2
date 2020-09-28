export pkgVersion=`cat package.json | grep "\"version\"" | sed 's/.*"version".*"\(.*\)".*/\1/g'`

# 1、修改版本号: package.json 与 package-lock.json
npm run build
git add src/index.ts package.json package-lock.json
git commit -am "chore(release): v${pkgVersion}"

rm -rf .cache/gh-pages/v${pkgVersion} && mkdir -p .cache/gh-pages/v${pkgVersion}
cp -R lib/ .cache/gh-pages/v${pkgVersion}



git checkout gh-pages



rm -rf versions/v${pkgVersion} && mkdir -p versions/v${pkgVersion}
cp -R .cache/gh-pages/v${pkgVersion}/* versions/v${pkgVersion}/
rm -rf autogen index.* && cp -R .cache/gh-pages/v${pkgVersion}/docsite/* ./

git add . && git commit -am "chore(release-docsite): v${pkgVersion}"
git push origin gh-pages

git checkout master
# nrm use npm && npm whoami && npm publish
