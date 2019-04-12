<template>
  <div class="banner about us">
    <img src="../../assets/about-us-header.png">
    <div class="banner-title">
      <h2>UNA TRADICIÓN DESDE 1935</h2>
      <h3>En TRIANON hemos construido experience y tradición por más de 80 años, dedicándonos a la fabricación de marroquineriá y accesorios en cuero, como, billeteras, bolsos, cinturones y llaveros, entre otros. Nuestra escencia está en el talento humano, fabricando productos con insumos 100% colombianos. En Trianon, creamos artesanalmente cada artículo con la más alta calidad y detalle, logrando que cada producto sea una pieza única.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerAboutUsComponent",
  props: {}
};
</script>

<style lang="less">
@import (reference) "../../styles/index.less";
.banner.about.us {
  display: block;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background-color: white;
  background-image: url("./../../assets/about-us-bg.png");
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
  color: black;
  img {
    display: block;
    width: 100%;
  }
  .banner-title {
    h2 {
      font-family: "TrajanPro";
      font-size: 0.85em;
    }
    h3 {
      font-family: "Open Sans";
      text-transform: uppercase;
      color: @color-black;
      font-size: 0.95em;
      font-weight: 300;
      letter-spacing: 1px;
      width: 90%;
      margin: 0 auto;
    }
  }
  .banner-button {
    &.gold {
      #button-gold-dark();
    }
  }
}
</style>
