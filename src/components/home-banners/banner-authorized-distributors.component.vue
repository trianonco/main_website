<template>
  <div class="banner authorized distributors">
    <br>
    <div class="banner-title">
      <h2>Distribuidos Autorizados</h2>
      <h3>
        ENCUENTRA nuestros productos en
        MÚLTIPLEs puntos por toda COLOMBIA.
      </h3>
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
  name: "BannerAuthorizedDistributorsComponent",
  props: {}
};
</script>

<style lang="less">
@import (reference) "../../styles/index.less";
.banner {
  display: block;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background-color: white;
  &.authorized.distributors {
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
        #button-gold();
      }
    }
  }
}
</style>
