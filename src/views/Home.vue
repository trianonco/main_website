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
        effect: "fade",
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
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

