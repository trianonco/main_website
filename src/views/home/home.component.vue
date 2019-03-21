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
    <div class="swiper-home">MY SWIPER</div>
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

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
  width: 100%;
  height: auto;
}
.v-lazy-image-loaded {
  filter: blur(0);
  width: 100%;
}
.swiper-pagination-bullet-active {
  background-color: rgba(100, 100, 100, 0.5) !important;
}
.swiper-pagination-bullet {
  width: 1em !important;
  height: 1em !important;

  border: 2px solid rgba(100, 100, 100, 0.7) !important;
  border-radius: 0em !important;
}
</style>
