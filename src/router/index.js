import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Transactions from '@/components/transaction'
import Dashboard from '@/components/Dashboard'
import User from '@/components/user'
import Vuetify from 'vuetify'




Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/logout',
      redirect: '/'
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    },
    {
      path: '/users',
      name: 'users',
      component: User
    },
    {
    path: '/dashboard',
    name:'dashboard',
    component:Dashboard
    }
  ]
})

