import Vue from 'vue'
import Router from 'vue-router'

// ------------------------------------------------------- //
// -- Routes --------------------------------------------- //
// ------------------------------------------------------- //
import Home from './../views/home/home.component.vue'
import Login from './../views/login/login.component.vue'
import Admin from './../views/admin/admin.vue'
import Products from './../views/products/products.component.vue'
// ------------------------------------------------------- //


// ------------------------------------------------------- // 
// -- Errors --------------------------------------------- //
// ------------------------------------------------------- //
import PageNotFound from './../views/pageNotFound/pageNotFound.vue';
// ------------------------------------------------------- //
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
      path: '/home',
      redirect: { name: 'home' }
    }, {
      path: '/products/:gender/:category/:description',
      name: 'products',
      component: Products
    }, {
      path: '/products/:gender/:category',
      name: 'products',
      component: Products
    }, {
      path: '/products/:category',
      name: 'products',
      component: Products
    }, {
      path: '/admin',
      name: 'admin',
      component: Admin
    }, {
      path: '/safe',
      name: 'safe',
      component: Admin
    }, {
      path: '/terms',
      name: 'terms',
      component: Admin
    }, {
      path: '/politics',
      name: 'politics',
      component: Admin
    }, {
      path: '/sitemap',
      name: 'sitemap',
      component: Admin
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: "*",
      name: '404Error',
      component: PageNotFound
    }
  ]
})
