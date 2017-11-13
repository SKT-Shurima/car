// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem';
import filter from './assets/js/filter';
import './assets/css/base';
import 'mint-ui/lib/style.min.css';
import md5 from 'md5';
import mixins from './assets/js/mixins';
import vueg from 'vueg/src/index';
import 'vueg/css/transition-min.css';
import { Header,Button,Cell,Toast,Indicator,MessageBox } from 'mint-ui';

Vue.config.productionTip = false;
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.mixin(mixins);
Vue.use(vueg, router);
Vue.prototype._back = function (){
	window.history.back();
}
Vue.filter('dateStyle',time=> {
	time-=0;
    var newDate = new Date(time);
    let {y,M,d,h,m,s}={y:newDate.getFullYear(),M:newDate.getMonth()+1,d:newDate.getDate(),h:newDate.getHours(),m:newDate.getMinutes(),s:newDate.getSeconds()};
    M = trans(M);
    d = trans(d);
    h = trans(h);
    m = trans(m);
    s = trans(s);
    return `${y}-${M}-${d}  ${h}:${m}:${s}`;
});
function trans (val){
    if (val < 10) {
      val = "0" + val ;
    }
    return val ;
};
window.Toast = Toast;
window.Indicator = Indicator;
window.MessageBox =MessageBox;
router.beforeEach((to,from,next)=>{
	let token = mixins.methods.getCookie('token');
	if(!token&&to.path!='/'){
		next({path:'/'})	
	}else{
		next()
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
