import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import { VLazyImagePlugin } from "v-lazy-image";

import './service-workers/registerServiceWorker'

import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VLazyImagePlugin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
