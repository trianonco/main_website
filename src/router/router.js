import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: Home
    },
    {
      path: '/settings',
      name: 'settings',
      component: Home
    }
    ,
    {
      path: 'genero/men',
      name: 'men',
      component: Home
    }
    ,
    {
      path: 'genero/women',
      name: 'women',
      component: Home
    }
    ,
    {
      path: '/categories',
      name: 'categories',
      component: Home
    },
    {
      path: '/category/:categoryName',
      name: 'category:categoryName',
      component: Home
    }
    ,
    {
      path: '/',
      name: 'settings',
      component: Home
    }
    ,
    ,
    {
      path: '/product/:id',
      name: 'product',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./../views/Home.vue')
    }
  ]
})
