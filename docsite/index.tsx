import Vue, { CreateElement } from 'vue';
import VueRouter from 'vue-router';
import { Component } from 'vue-property-decorator';
import './index.scss';
import createRouterConfig from './router';

// @ts-ignore
import xlucky from 'xlucky.vue2';

Vue.use(xlucky);

(window as any).pkgInfos = {
  name: process.env.PKG_NAME,
  version: process.env.PKG_VERSION,
};

// Vue.filter(xlucky.filterArray.name, xlucky.filterArray);
// Vue.filter(xlucky.filterArrayMulti.name, xlucky.filterArrayMulti);
// Vue.filter(xlucky.filterBoolean.name, xlucky.filterBoolean);
// Vue.filter(xlucky.filterMoney.name, xlucky.filterMoney);
// Vue.filter(xlucky.filterTime.name, xlucky.filterTime);
// Vue.component(xlucky.SwitchController.name, xlucky.SwitchController);
// Vue.component(xlucky.LinesEllipsis.name, xlucky.LinesEllipsis);

@Component({})
class App extends Vue {
  render(h: CreateElement) {
    return <router-view />;
  }
}

new Vue({
  router: new VueRouter({
    routes: [...createRouterConfig('zh-CN'), ...createRouterConfig('en-US'), { path: '/', redirect: '/zh-CN/user-guide/quickstart' }],
    mode: 'hash',
  }),
  render: (h) => h(App),
}).$mount('#app');

(window as any).codeSandBoxDataFn = function (data: any) {
  const pkg = data.files['package.json'].content;
  pkg.dependencies['element-ui'] = '2.13.2';
  pkg.dependencies['xlucky.vue2'] = 'latest';

  const js = data.files['index.js'].content;
  data.files['index.js'].content = js.replace(
    '// placeholder-after-vue-import',
    `
// placeholder-after-vue-import

import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import xlucky from 'xlucky.vue2';
import 'xlucky.vue2/lib/index.css';
Vue.use(ElementUI);
Vue.use(xlucky);
  `,
  );

  return data;
};

(window as any).codepenDataFn = function (data: any) {
  data.html = data.html.replace(
    '<!-- placeholder-code-start -->',
    `<script src="//unpkg.com/element-ui/lib/index.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"></link>
  <script src="//unpkg.com/xlucky.vue2"></script>
  <link rel="stylesheet" href="//unpkg.com/xlucky.vue2/lib/index.css"></link>

  <!-- placeholder-code-start -->
  `,
  );
  return data;
};
