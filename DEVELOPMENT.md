# 贡献指南

## 开发与调试

```bash

npm start

```

## 如何发布

- 1、修改版本号: package.json 和 package-lock.json
- 2、`./build/autodeploy-docsite.sh`
- 3、`nrm use npm && npm whoami && npm publish`
- 4、`git push origin master`
