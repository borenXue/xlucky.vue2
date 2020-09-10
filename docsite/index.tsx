import Vue from 'vue';
import VueRouter from 'vue-router';
import { Component } from 'vue-property-decorator';
import './index.scss';
import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';
import createRouterConfig from './router';

@Component({})
class App extends Vue {
  render () {
    return <router-view />
  }
}

Vue.use(VueSimpleMarkdown);

new Vue({
  router: new VueRouter({
    routes: [
      ...createRouterConfig('zh-CN'),
      ...createRouterConfig('en-US'),
      { path: '/', redirect: '/zh-CN/synopsis' },
    ],
    mode: 'hash',
  }),
  render: h => h(App)
}).$mount('#app')
