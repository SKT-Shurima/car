import Vue from 'vue'
import Router from 'vue-router'
import login  from '@/components/login';
import Home from '@/components/Home';
import maintain from  '@/components/maintain';
import maintainRefer from '@/components/maintainRefer';
import endangerment from  '@/components/endangerment';
import endangerRefer from '@/components/endangerRefer';
import endangerNum from '@/components/endangerNum';
import endangerDetail from  '@/components/endangerDetail';
import endangerNumRefer from '@/components/endangerNumRefer';
import history from '@/components/history';
import saleCar from '@/components/saleCar';
import explain from '@/components/explain';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/login',
      component: login 
    },{
      path: '/home',
      component: Home
    },{
    	path: '/maintain',
    	component: maintain
    },{
      path: '/maintainRefer',
      component: maintainRefer
    },{
      path: '/endangerment',
      component: endangerment
    },{
      path: '/endangerNum',
      component: endangerNum
    },{
      path: '/endangerRefer',
      component: endangerRefer
    },{
      path: '/endangerDetail',
      component: endangerDetail
    },{
      path: '/endangerNumRefer',
      component: endangerNumRefer
    },{
      path: '/history',
      component: history
    },{
      path: '/saleCar',
      component: saleCar
    },{
      path: 'explain',
      component: explain
    }
  ]
})
