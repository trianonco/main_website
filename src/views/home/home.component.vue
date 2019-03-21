<script>
// @ is an alias to /src
import HeaderComponent from "../../components/header/header.component";
import GenderButtonsComponent from "../../components/gender-buttons/gender-buttons.component";
import SearchBarComponent from "../../components/search/search.component";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    GenderButtonsComponent,
    SearchBarComponent
  },
  data() {
    return {
      swiperOption: {
        effect: "fade",
        autoplay: {
          delay: 5000
        },
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {}
};
</script>

<template>
  <div class="view">
    <!-- Header & Navbar -->
    <header-component/>

    <!-- HomeSwiper -->
    <div class="swiper-home">MY SWIPER *</div>
    <!--  Gender Buttons -->
    <GenderButtonsComponent/>

    <!-- SearchBar & Chat  -->
    <SearchBarComponent></SearchBarComponent>
  </div>
</template>

<style lang="less">
@import (reference) "./../../styles/index.less";
.swiper-home {
  background-color: rebeccapurple;
  width: 100%;
  height: @size-swiper-home-height;
}
</style>
