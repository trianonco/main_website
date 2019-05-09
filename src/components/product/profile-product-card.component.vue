<template>
  <div class="profile-product-card">
    <div class="product-card-header">
      <img
        class="bullet"
        src="./../../assets/gender-categories/bullet-gray.png"
        v-if="!UX.isOpen"
        @click="UX.isOpen = !UX.isOpen"
      >
      <img
        class="bullet"
        src="./../../assets/gender-categories/bullet-gold.png"
        v-if="UX.isOpen"
        @click="UX.isOpen = !UX.isOpen"
      >
      <span
        class="description"
        @click="UX.isOpen = !UX.isOpen"
      >{{product.description}} {{product.id}}</span>
      <span class="see-more" @click="UX.isOpen = true" v-if="!UX.isOpen">VER</span>
      <span class="see-more-transparent" v-if="UX.isOpen">VER</span>
    </div>

    <div class="product-card-content" v-if="UX.isOpen">
      <!-- ----------------------------------- -->
      <!-- -- Buy State In Process ----------- -->
      <!-- ----------------------------------- -->
      <div class="buy-state inProcess">
        <h1>ESTADO : PROCESO DE COMPRA</h1>
        <h1 v-if="product.price">PRECIO: {{ parseFloat(product.price.COP) | toCurrency }}</h1>
        <img
          :src="product.photos[0].thumb.src.replace('thumbs','thumb')"
          :alt="product.photos[0].thumb.alt"
        >
        <div class="buttons">
          <div class="button remove" @click="removeProduct()">
            <span>-</span>
          </div>
          <div class="button items">
            <span>CANTIDAD : {{ n }}</span>
          </div>
          <div class="button add" @click="addProduct()">
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileProductCard",
  props: ["product", "n"],
  methods: {
    addProduct() {
      this.$store.dispatch("addToCart", this.product);
    },
    removeProduct() {
      this.$store.dispatch("removeToCart", this.product);
    }
  },
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
      font-family: "Open Sans";
      font-weight: normal;
      font-style: normal;
      font-size: 12px;
      text-decoration: underline;
    }
  }
}

div.product-card-content {
  #Font-TrajanPro();
  display: block;
  width: 100%;

  background-color: white;
  color: black;

  box-sizing: border-box;

  padding: 1em;

  h1 {
    font-size: 10px;
    transform: scaleY(0.9);
  }

  div.buy-state {
    h1 {
    }
    img {
      display: block;
      width: ~"calc(100% - 2em)";
      margin: 2em auto;
      margin-bottom: 0px;
      border: 1px solid black;
    }

    .buttons {
      display: block;
      width: ~"calc(100% - 2em)";
      margin: 0em auto;
      #Font-TrajanPro();
      #Flex-Row-Center-Extremes();
      .button {
        background-color: @color-gray;
        color: white;
        width: 100%;
        #Flex-Row-Center-Center();

        span {
          padding: 1em;
        }
        &.remove {
          width: 3em;
        }
        &.add {
          width: 3em;
        }
      }
    }
  }
}
</style>