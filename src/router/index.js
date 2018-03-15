import Vue from 'vue'
import Router from 'vue-router'
const Index = r => require.ensure([], () => r(require('../views/index/index')));

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
