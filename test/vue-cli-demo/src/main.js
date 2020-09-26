import Vue from 'vue';
import xlucky from 'xlucky.vue2';
import 'xlucky.vue2/lib/index.css';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(xlucky);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
