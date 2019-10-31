import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import ListGoods from '@/components/ListGoods'
import Pos from '@/components/Pos'
import State from '@/components/State'

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
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/pos',
      name: 'pos',
      component: Pos
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: ListGoods
    },
    {
      path: '/teststate',
      name: 'teststate',
      component: State
    }
  ]
})
