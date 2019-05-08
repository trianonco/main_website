<template>
  <div class="profile-product-card">
    <div class="product-card-header">
      <img class="bullet" src="./../../assets/gender-categories/bullet-gray.png" v-if="!UX.isOpen">
      <img class="bullet" src="./../../assets/gender-categories/bullet-gold.png" v-if="UX.isOpen">
      <span class="description">{{product.description}} {{product.id}}</span>
      <span class="see-more" @click="UX.isOpen = !UX.isOpen" v-if="!UX.isOpen">VER</span>
      <span class="see-more-transparent" v-if="UX.isOpen">VER</span>
    </div>
    <div class="product-card-content"></div>
  </div>
</template>

<script>
export default {
  name: "ProfileProductCard",
  props: ["product"],
  methods: {},
  data() {
    return {
      UX: {
        isOpen: false
      }
    };
  }
};
</script>

<style lang="less">
@import (reference) "../../styles/index.less";
div.profile-product-card {
  display: block;
  width: 100%;
  padding: 0px;
  margin: 0px;
}
div.product-card-header {
  #Font-TrajanPro();
  display: block;

  padding: 1em;
  box-sizing: border-box;

  color: black;
  background-color: white;

  border-bottom: 1px solid gray;

  #Flex-Row-Center-Extremes();

  img.bullet {
    display: block;
    box-sizing: content-box;
    width: 1em;
  }

  span.description {
    font-size: 10px;
    transform: scaleY(0.9);
  }

  span.see-more {
    font-family: "Open Sans";
    font-weight: normal;
    font-style: normal;
    font-size: 12px;
    text-decoration: underline;
    &-transparent {
      color: white;
    }
  }
}
</style>