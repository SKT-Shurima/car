// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem';
import './assets/css/base';
import 'mint-ui/lib/style.min.css';
import { Header,Button,Cell } from 'mint-ui';
import md5 from 'md5';
import mixins from './assets/js/mixins';
import vueg from 'vueg/src/index';
import 'vueg/css/transition-min.css';


Vue.config.productionTip = false;
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.mixin(mixins);
Vue.use(vueg, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
