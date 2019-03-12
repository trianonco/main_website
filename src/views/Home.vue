<template>
  <div class="view">
    <header-component/>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <v-lazy-image
          :src="require('../assets/Home-Slider/img1.png')"
          :src-placeholder="require('../assets/Home-Slider/img1-placeholder.jpg')"
        />
      </swiper-slide>
      <swiper-slide>
        <v-lazy-image
          :src="require('../assets/Home-Slider/img2.png')"
          :src-placeholder="require('../assets/Home-Slider/img2-placeholder.jpg')"
        />
      </swiper-slide>
      <swiper-slide>
        <v-lazy-image
          :src="require('../assets/Home-Slider/img3.png')"
          :src-placeholder="require('../assets/Home-Slider/img3-placeholder.jpg')"
        />
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
  width: 100%;
  height: auto;
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
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
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

