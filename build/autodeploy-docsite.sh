export pkgVersion=`cat package.json | grep "\"version\"" | sed 's/.*"version".*"\(.*\)".*/\1/g'`

# 1、修改版本号: package.json 与 package-lock.json
npm run build
#   指定 docsite 中 index.html 内写的 sdk 的版本号
sed -i'.index.backup.html' -e "s/xlucky\.vue2/xlucky\.vue2@${pkgVersion}/g" lib/docsite/index.html
git add package.json package-lock.json
git commit -am "chore(release): v${pkgVersion}"

rm -rf .cache/gh-pages/v${pkgVersion} && mkdir -p .cache/gh-pages/v${pkgVersion}
cp -R lib/ .cache/gh-pages/v${pkgVersion}



git checkout gh-pages



rm -rf versions/v${pkgVersion} && mkdir -p versions/v${pkgVersion}
cp -R .cache/gh-pages/v${pkgVersion}/* versions/v${pkgVersion}/
rm -rf autogen index.* && cp -R .cache/gh-pages/v${pkgVersion}/docsite/* ./

versionArrayStr=`ls -l versions | awk '{print $9}' | tr "\n" " " | xargs | sed 's/ /", "/g;  s/^/["/;  s/$/"]/'`;
echo "var historyVersions = ${versionArrayStr};" > history_versions.js

git add . && git commit -am "chore(release-docsite): v${pkgVersion}"
git push origin gh-pages

git checkout master
# nrm use npm && npm whoami && npm publish
