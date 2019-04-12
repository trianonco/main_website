<script>
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
  computed: {},
  mounted() {
    this.$getLocation().then(coordinates => {
      alert(
        "Welcome From " + JSON.stringify(coordinates) + " => BOGOTÁ, COLOMBIA"
      );
    });
  }
};
</script>

<template>
  <div class="view home">
    <!-- Home :: Begin -->
    <div class="wrapper">
      <!-- Header & Navbar -->
      <header-component/>

      <!-- HomeSwiper -->
      <HomeSwiperComponent/>

      <!--  Gender Buttons -->
      <GenderButtonsComponent/>

      <!-- SearchBar & Chat  -->
      <SearchBarComponent></SearchBarComponent>

      <!-- Banners  -->
      <BannerAuthorizedDistributarssComponent/>
      <BannerAuthorizedDistributorsComponent/>
      <BannerAuthorizedShopsComponent/>
      <BannerAboutUsComponent/>
      <BannerCreditCardsComponent/>
      <BannerFreeShippingComponent/>
      <BannerGuaranteeComponent/>
      <BannerAddressComponent/>

      <!-- Footers -->
      <FooterComponent/>
    </div>
    <!-- Home :: End  -->
  </div>
</template>

<style lang="less">
@import (reference) "./../../styles/index.less";
</style>
