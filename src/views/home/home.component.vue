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
import RouterLoading from "../../components/shared/loader/loader.component";

// Home Components
import HomeSwiperComponent from "../../components/home/home-swiper/home-swiper.component";
import HomeGenderButtonsComponent from "../../components/home/home-gender-buttons/home-gender-buttons.component";
import HomeSearchBarComponent from "../../components/home/home-search/home-search.component";

/*

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
    FooterComponent,
    RouterLoading,
    HomeSwiperComponent,
    HomeGenderButtonsComponent,
    HomeSearchBarComponent
    /*
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
    <!-- Home :: Loader -->
    <router-loading/>
    <!-- Home :: Begin -->
    <div class="view-wrapper">
      <!-- Header  -->
      <HeaderComponent/>

      <!-- Home => Swiper  -->
      <HomeSwiperComponent/>
      <!-- Home => Gender Buttons -->
      <HomeGenderButtonsComponent/>
      <!-- Home => Search -->
      <HomeSearchBarComponent/>

      <!-- Footers -->
      <FooterComponent/>
    </div>
    <!-- ------------- -->
  </div>
</template>

<style lang="less">
@import (reference) "../../styles/index.less";
div.view.home {
  display: block;
  width: 100%;

  div.view-wrapper {
    height: calc(@size-height-app + @size-footer-height);
    overflow: hidden;
  }
}
</style>
