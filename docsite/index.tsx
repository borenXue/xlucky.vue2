import Vue from 'vue';
import VueRouter from 'vue-router';
import { Component } from 'vue-property-decorator';
import './index.scss';
import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';
import createRouterConfig from './router';
// filter 系列
import xlucky from '../src/index';

import LiveDemoBox from './component/LiveDemoBox';

Vue.filter(xlucky.filterArray.name, xlucky.filterArray);
Vue.filter(xlucky.filterArrayMulti.name, xlucky.filterArrayMulti);
Vue.filter(xlucky.filterBoolean.name, xlucky.filterBoolean);
Vue.filter(xlucky.filterMoney.name, xlucky.filterMoney);
Vue.filter(xlucky.filterTime.name, xlucky.filterTime);

Vue.component(LiveDemoBox.name, LiveDemoBox);

@Component({})
class App extends Vue {
  render() {
    return <router-view />;
  }
}

Vue.use(VueSimpleMarkdown);

new Vue({
  router: new VueRouter({
    routes: [...createRouterConfig('zh-CN'), ...createRouterConfig('en-US'), { path: '/', redirect: '/zh-CN/synopsis' }],
    mode: 'hash',
  }),
  render: (h) => h(App),
}).$mount('#app');
