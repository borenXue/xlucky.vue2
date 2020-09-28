## 快速上手

### CDN 方式使用 [在线 Demo](https://codesandbox.io/s/elastic-wildflower-i0xze)

```html
<!-- 安装依赖: vue 2.x -->
<script src="//unpkg.com/vue@2.6.12/dist/vue.js"></script>

<!-- 安装依赖: element ui -->
<script src="//unpkg.com/element-ui/lib/index.js"></script>
<link rel="stylesheet" href="//unpkg.com/element-ui/lib/theme-chalk/index.css" />

<!-- 安装依赖: xlucky.vue2 -->
<script src="//unpkg.com/xlucky.vue2"></script>
<link rel="stylesheet" href="https://unpkg.com/xlucky.vue2/lib/index.css" />
```

### NPM 包使用 [在线 Demo](https://codesandbox.io/s/laughing-rosalind-sbmkg)

```javascript
import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN';

import xlucky from 'xlucky.vue2';
import 'xlucky.vue2/lib/index.css';

Vue.use(ElementUI, { zIndex: 1000, locale });

Vue.use(xlucky);
```
