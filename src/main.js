import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import firebase from "firebase";

// Vue Vendors & PlugIn
import { VLazyImagePlugin } from "v-lazy-image";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueGeolocation from 'vue-browser-geolocation';
import 'swiper/dist/css/swiper.css'
import './service-workers/registerServiceWorker'

// Vue Install Plug Ins
Vue.use(VueGeolocation);
Vue.use(VueAwesomeSwiper)
Vue.use(VLazyImagePlugin);

// Vue ProdTip
Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCAyLU_M5wt6vc95F9t7xX0liwZw2mF6o4",
  authDomain: "trianonwebsite.firebaseapp.com",
  databaseURL: "https://trianonwebsite.firebaseio.com",
  projectId: "trianonwebsite",
  storageBucket: "trianonwebsite.appspot.com",
  messagingSenderId: "131857560430"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
