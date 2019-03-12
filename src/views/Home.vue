<template>
  <div class="view">
    <header-component/>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <v-lazy-image src="../assets/Home-Slider/img1.png"/>
      </swiper-slide>
      <swiper-slide>
        <v-lazy-image src="../assets/Home-Slider/img2.png"/>
      </swiper-slide>
      <swiper-slide>
        <v-lazy-image src="../assets/Home-Slider/img3.png"/>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>


<style>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
  width: 500px;
  height: 100px;
}
.v-lazy-image-loaded {
  filter: blur(0);
  width: 100%;
}
</style>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/header/header.component";

export default {
  name: "HomeView",
  components: {
    HeaderComponent
  },
  data() {
    return {
      swiperOption: {}
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

