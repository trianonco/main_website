import Vue from 'vue'
import Router from 'vue-router'

// ------------------------------------------------------- //
// -- Routes --------------------------------------------- //
// ------------------------------------------------------- //
import Home from './../views/home/home.component.vue'
import Login from './../views/login/login.component.vue'
import Admin from './../views/admin/admin.vue'
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
    }
    , {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
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
