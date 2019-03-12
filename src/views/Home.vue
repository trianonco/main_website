<template>
  <div class="view">
    <header-component/>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <v-lazy-image
          src="https://cdn-images-1.medium.com/max/1600/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
          src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
        />
      </swiper-slide>
      <swiper-slide>
        <v-lazy-image
          src="https://cdn-images-1.medium.com/max/1600/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
          src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
        />
      </swiper-slide>
      <swiper-slide>
        <v-lazy-image
          src="https://cdn-images-1.medium.com/max/1600/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
          src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
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

