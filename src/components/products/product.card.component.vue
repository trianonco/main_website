<template>
  <div class="product-card" v-if="isCard">
    <div class="product-wrapper" @click="goToProductView()">
      <div class="isNew" v-if="isNew">NUEVO</div>

      <v-lazy-image
        class="photo"
        :src="card.photos[0].hd.src"
        :src-placeholder="card.photos[0].thumb.src"
      />
      <h2 class="price">{{ parseFloat(card.price.COP) | toCurrency}}</h2>
      <h2 class="name">{{ card.description }}</h2>
      <h2 class="color">Color {{ card.color}}</h2>
    </div>
  </div>
</template>
<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "ProductCardComponent",
  props: ["card"],

  mounted() {
    this.$http(
      "https://firebasestorage.googleapis.com/v0/b/trianonwebsite.appspot.com/o/PRODUCTOS%2FPHOTOS%2FTHUMB%2FDA617-08-01.jpg?alt=media&token=d81c84f7-4e37-443a-89f5-e3cca162eca1"
    )
      .then(response => (this.isCard = true))
      .catch(error => console.error(error));
  },
  data() {
    return {
      isNew: false,
      isCard: false
    };
  },
  components: {
    VLazyImage
  },
  methods: {
    setIsCard() {
      this.isCard = true;
    },
    goToProductView() {
      if (this.card) {
        this.$router.push(`/product/id/${this.card.id}`);
      } else {
        console.error(
          "No this.card.id @ product.card.component => " + this.card.name
        );
        console.error(this.card);
      }
    }
  }
};
</script>
<style lang="less">
@import (reference) "./../../styles/index.less";
div.product-card {
  display: block;

  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding: 0.5em 0.5em;
  box-sizing: border-box;
  display: inline-block;

  .product-wrapper {
    width: 100%;
    padding: 0em 0em;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid black;
    position: relative;
  }

  .isNew {
    display: block;
    position: absolute;
    width: 100%;
    padding: 0.5em;
    letter-spacing: 3px;
    font-weight: 900;
    box-sizing: border-box;
    background-color: @color-yellow;
    color: white;
    #Font-OpenSans();
  }

  .photo {
    width: 100%;
    padding: 0%;
  }

  .price {
    display: block;
    background-color: #575656;
    color: white;
    text-align: center;
    padding: 0.5em;
    margin-bottom: 1px;
    font-size: 12px;
    #Font-TrajanPro();
  }

  .name {
    display: block;
    background-color: #575656;
    color: white;
    text-align: center;
    padding: 0.5em;
    font-size: 10px;
    #Font-TrajanPro();
  }

  .color {
    display: block;
    background-color: #575656;
    color: white;
    text-align: center;
    padding: 0.5em;
    font-size: 10px;
    #Font-TrajanPro();
  }
}
</style>