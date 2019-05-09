import Vue from 'vue'
import Meta from 'vue-meta';
import App from './App.vue'
import router from './routes/router'
import store from './store/store'

// Firebase 
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/messaging';
import 'firebase/storage';

// Vue Vendors & PlugIn
import axios from 'axios'
import VueAxios from 'vue-axios'
import VLazyImagePlugin from 'v-lazy-image';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueGeolocation from 'vue-browser-geolocation';
import VueAnalytics from 'vue-analytics'
import VueFacebookPixel from 'vue-analytics-facebook-pixel'

import 'swiper/dist/css/swiper.css'
import 'handsontable/dist/handsontable.full.css';
import './service-workers/registerServiceWorker'

// Vue Install Plug Ins
Vue.use(Meta);
Vue.use(VueAxios, axios);
Vue.use(VueGeolocation);
Vue.use(VueAwesomeSwiper)
Vue.use(VLazyImagePlugin);
//Vue.use(VueFacebookPixel)  ;
Vue.use(VueAnalytics, {
  id: 'UA-138600827-1'
})

// Vue ProdTip
Vue.config.productionTip = false;


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


// Init Facebook Pixel

/*
Vue.analytics.fbq.init('984344015003425', {
  em: 'user@mail.com'
});
*/

console.clear();
console.log('');
console.group(' Trianon PWA Welcome ! ');
console.warn('  --------------------------------------------- ');
console.warn(' |                                             |');
console.warn(' |            TRIANON PWA APP                  |');
console.warn(' |                                             |');
console.warn(' | + By Trianon Colombia                       |');
console.warn(' | + Updated at 18/04/19                       |');
console.warn(' | + Contact with jl.mayorga236@gmail.com      |');
console.warn(' | + Thanks, Gracias, ありがとう, 谢谢          |');
console.warn(' |                                             |');
console.warn('  --------------------------------------------- ');
console.groupEnd();
console.log('');


Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
