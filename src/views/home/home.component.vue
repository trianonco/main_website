<script>
// Firebase
import firebase from "firebase";
// Vuex Store
import store from "./../../store/store.js";

// @ is an alias to /src
import HeaderComponent from "../../components/header/header.component";
import GenderButtonsComponent from "../../components/gender-buttons/gender-buttons.component";
import SearchBarComponent from "../../components/search/search.component";
import HomeSwiperComponent from "../../components/home-swiper/home-swiper.component";

// Banner
import BannerAuthorizedDistributorsComponent from "../../components/home-banners/banner-authorized-distributors.component";
import BannerAuthorizedShopsComponent from "../../components/home-banners/banner-authorized-shops.component";
import BannerAboutUsComponent from "../../components/home-banners/banner-about-us.component";
import BannerCreditCardsComponent from "../../components/home-banners/banner-credit-cards.component";
import BannerFreeShippingComponent from "../../components/home-banners/banner-free-shipping.component";
import BannerGuaranteeComponent from "../../components/home-banners/banner-guarantee.component";
import BannerAddressComponent from "../../components/home-banners/banner-address.component";

// Footer
import FooterComponent from "../../components/footer/footer.component";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    GenderButtonsComponent,
    SearchBarComponent,
    HomeSwiperComponent,
    BannerAuthorizedDistributorsComponent,
    BannerAuthorizedShopsComponent,
    BannerAboutUsComponent,
    BannerCreditCardsComponent,
    BannerFreeShippingComponent,
    BannerGuaranteeComponent,
    BannerAddressComponent,
    FooterComponent
  },

  data() {
    return {};
  },

  computed: {
    user() {
      return store.state.user;
    }
  },

  methods: {
    updateUser() {
      store.dispatch("updateUser", {});
    },

    initMessage() {
      const messaging = firebase.messaging();
      console.warn(messaging);
      messaging
        .requestPermission()
        .then(response => {
          messaging
            .getToken()
            .then(token => {
              console.log("token do usuário:", token);
            })
            .catch(error => {
              console.error(error);
            });
        })
        .catch(error => {
          console.error(error);
        });
    }
  },

  mounted() {
    //this.$getLocation().then(coordinates => {});
    this.initMessage();
    this.$ga.page("/home");
    this.$$analytics.fbq('track', 'PageView');
  }
};
</script>

<template>
  <div class="view home">
    <!-- Home :: Begin -->
    <div class="wrapper">
      <!-- Header & Navbar -->
      <headerComponent/>

      <h1 @click="updateUser()">CLICK TO UPDATE USER</h1>

      <h1>{{ user }}</h1>

      <!-- Footers -->
      <FooterComponent/>
    </div>
    <!-- ------------- -->
  </div>
</template>

<style lang="less">
@import (reference) "../../styles/index.less";
</style>
