import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/home/home.component.vue'
import Login from './../views/login/login.component.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/user',
      name: 'user',
      component: Home
    }, {
      path: '/settings',
      name: 'settings',
      component: Home
    }, {
      path: 'gender/men',
      name: 'men',
      component: Home
    }, {
      path: 'gender/women',
      name: 'women',
      component: Home
    }, {
      path: '/categories',
      name: 'categories',
      component: Home
    }, {
      path: '/category/:categoryName',
      name: 'category:categoryName',
      component: Home
    }, {
      path: '/product/:id',
      name: 'product',
      component: Home
    }, {
      path: '/about',
      name: 'about',
      component: () => import('./../views/Home.vue')
    }
  ]
})
