// !!! This file is automatically generated by the build/prebuild.js (via npm run prebuild).
// !!! Please do not modify manually.

import { filterArray, filterArrayMulti, filterBoolean, filterMoney, filterTime } from './filters';
import HelloWorld from '../components/hello-world/hello-world';
import SwitchController from '../components/switch-controller/switch-controller';
import LinesEllipsis from '../components/lines-ellipsis/lines-ellipsis';
import { VueConstructor } from 'vue';

const components = [
  { name: 'xv-hello-world', component: HelloWorld },
  { name: 'xv-switch-controller', component: SwitchController },
  { name: 'xv-lines-ellipsis', component: LinesEllipsis },
];

function install(Vue: VueConstructor, opts = {}) {
  components.forEach((item) => {
    Vue.component(item.name, item.component);
  });

  Vue.filter('filterArray', filterArray);
  Vue.filter('filterArrayMulti', filterArrayMulti);
  Vue.filter('filterBoolean', filterBoolean);
  Vue.filter('filterMoney', filterMoney);
  Vue.filter('filterTime', filterTime);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: process.env.PKG_VERSION,
  install,
  filterArray,
  filterArrayMulti,
  filterBoolean,
  filterMoney,
  filterTime,
  HelloWorld,
  SwitchController,
  LinesEllipsis,
};