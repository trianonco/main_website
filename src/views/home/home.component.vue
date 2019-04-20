<script>
// Firebase
//import firebase from "firebase";

// Vuex Store
import store from "./../../store/store.js";

// Meta Tags
import metaTags from "./meta-tags.json";

// Shared
import HeaderComponent from "../../components/shared/header/header.component";
import FooterComponent from "../../components/shared/footer/footer.component";

// Home Components
/*
import GenderButtonsComponent from "../../components/home/home-gender-buttons/gender-buttons.component";
import SearchBarComponent from "../../components/home/search/home-search.component";
import HomeSwiperComponent from "../../components/home/home-swiper/home-swiper.component";

// Banners Components
import BannerAuthorizedDistributorsComponent from "../../components/home/home-banners/banner-authorized-distributors.component";
import BannerAuthorizedShopsComponent from "../../components/home/home-banners/banner-authorized-shops.component";
import BannerAboutUsComponent from "../../components/home/home-banners/banner-about-us.component";
import BannerCreditCardsComponent from "../../components/home/home-banners/banner-credit-cards.component";
import BannerFreeShippingComponent from "../../components/home/home-banners/banner-free-shipping.component";
import BannerGuaranteeComponent from "../../components/home/home-banners/banner-guarantee.component";
import BannerAddressComponent from "../../components/home/home-banners/banner-address.component";
*/

export default {
  name: "HomeView",

  // metaInfo: metaTags.metaInfo,

  components: {
    HeaderComponent,
    FooterComponent

    /*
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
    */
  },

  data() {
    return {};
  },

  computed: {
    user() {
      //return store.state.user;
    }
  },

  methods: {
    updateUser() {
      //store.dispatch("updateUser", {});
    }
  },

  mounted() {
    //this.$getLocation().then(coordinates => {});
    //this.$ga.page("/home");
    //this.$analytics.fbq('track', 'PageView');
  }
};
</script>

<template>
  <div class="view home">
    <!-- Home :: Begin -->
    <div class="wrapper">
      <!-- Header  -->
      <headerComponent/>

      <!-- Footers -->
      <FooterComponent/>
    </div>
    <!-- ------------- -->
  </div>
</template>

<style lang="less">
@import (reference) "../../styles/index.less";
</style>
