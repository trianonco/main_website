<template>
  <div class="swiper home-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="swiperImage of swiperImages" v-bind:key="swiperImage.id">
        <v-lazy-image :src="swiperImage.src_hd" :src-placeholder="swiperImage.src_thumb"/>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import firebase from "firebase";
import VLazyImage from "v-lazy-image";

export default {
  name: "HomeSwiperComponent",

  components: {
    VLazyImage
  },

  data() {
    return {
      swiperImages: [],
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
  mounted() {
    var db = firebase.firestore();
    db.collection("home-swiper-images")
      .get()
      .then(querySnapshot => {
        this.swiperImages = [];
        querySnapshot.forEach(doc => {
          const docData = doc.data();
          this.swiperImages.push(docData);
        });

        this.swiperImages.sort((a, b) => a.orderId - b.orderId);
      });
  }
};
</script>

<style lang="less">
@import (reference) "./../../../styles/index.less";

.swiper.home-swiper {
  width: 100%;
  height: @size-home-swiper;
  z-index: 10;
}

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
  width: 100vw;
  object-fit: cover;
  object-position: center;
  height: @size-home-swiper;
}
.v-lazy-image-loaded {
  filter: blur(0);
  width: 100vw;
  object-fit: cover;
  object-position: center;
  height: @size-home-swiper;
}
.swiper-pagination-bullet-active {
  background-color: rgba(100, 100, 100, 0.5) !important;
}
.swiper-pagination-bullet {
  width: 1em !important;
  height: 1em !important;

  border: 2px solid rgba(100, 100, 100, 0.7) !important;
  border-radius: 0em !important;
  outline: none;
  span {
    outline: none;
  }
}
.swiper-pagination-bullet-active {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
* {
  outline: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  &:focus {
    outline: none !important;
  }
}
</style>
