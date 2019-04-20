<template>
  <div class="banner authorized shops">
    <br>
    <div class="banner-title">
      <h2>Tiendas Trianon</h2>
      <h3>CONTAMOS CON CINCO PUNTOS DIRECTOS CUATRO EN BOGOTÁ Y UNO EN PALMIRA</h3>
    </div>
    <div class="banner-button gold">
      <img class src="../../assets/button-place-ico-02.png">
      <h4>
        <span>VER UBICACIONES</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerAuthorizedShopsComponent",
  props: {}
};
</script>

<style lang="less">
@import (reference) "../../styles/index.less";
/*
.banner.authorized.shops {
  display: block;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background-color: black;
  color: white;
  .banner-title {
    h2 {
      font-family: "TrajanPro";
      font-size: 0.85em;
    }
    h3 {
      font-family: "Open Sans";
      text-transform: uppercase;
      color: @color-gray;
      font-size: 0.95em;
      font-weight: 300;
      letter-spacing: 1px;
    }
  }
  .banner-button {
    &.gold {
      #button-gold-dark();
    }
  }
}
*/
</style>
