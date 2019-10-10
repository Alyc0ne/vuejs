import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import ListGoods from '@/components/ListGoods'
import Pos from '@/components/Pos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/pos',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/listgoods',
      name: 'ListGoods',
      component: ListGoods
    }
  ],
  mode: 'abstract'
})
