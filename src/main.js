// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem';
import filter from './assets/js/filter';
import './assets/css/base';
import 'mint-ui/lib/style.min.css';
import { Header,Button,Cell,Toast } from 'mint-ui';


Vue.config.productionTip = false;
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);

Vue.prototype._back = function (){
	window.history.back();
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
