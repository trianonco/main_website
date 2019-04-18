
<template>
  <div class="banner address">
    <div class="header">
      <div class="title">
        <img src="../../assets/bullet-gold-01.png">
        <h2>PUNTO DE FÁBRICA</h2>
        <img src="../../assets/bullet-gold-01.png">
      </div>
      <div class="address">
        BOGOTÁ | CALLE 6A # 33 - 22
        <br>TEL : (1) 2011688 / CEL: 310 785 6037
      </div>
    </div>
    <div class="links">
      <router-link to="/safe">COMPRA SEGURA</router-link>/
      <router-link to="/terms">TERMINOS DE SERVICIO</router-link>/
      <router-link to="/politics">POLITICAS DE PRIVACIDAD</router-link>/
      <router-link to="/sitemap">MAPA DEL SITIO</router-link>/
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerAddressComponent",
  props: {}
};
</script>

<style lang="less">
@import (reference) "../../styles/index.less";
/*
.banner.address {
  display: block;
  width: 100%;
  padding: 0em;
  padding-bottom: 1em;
  box-sizing: border-box;
  background-color: black;
  background-image: url("../../assets/address-bg.png");
  background-size: contain;
  background-position: center;

  color: white;

  .links {
    color: white;
    text-decoration: none;
    font-size: 0.9em;
    width: 90%;
    margin: 0 auto;
    a {
      color: black;
      text-decoration: none;
    }
  }

  div.header {
    display: block;
    width: 90%;
    margin: 0 auto;
    background-color: white;
    color: black;
    margin-bottom: 1em;
    .address {
      font-family: "Open Sans";
      text-transform: uppercase;
      font-size: 0.85em;
      font-weight: 300;
      width: 90%;
      margin: 0 auto;
      padding-bottom: 0.5em;
    }
    .title {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;

      font-family: "TrajanPro";
      font-size: 0.7em;
      font-weight: 300;
      padding: 0em 0.25em;

      img {
        width: 1em;
      }
    }
  }
}
*/
</style>
