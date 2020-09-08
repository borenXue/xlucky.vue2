import Vue from 'vue';
import xlucky from '../src/index';

new Vue({
  render: h => h(xlucky.HelloWorld)
}).$mount('#app')
