
<template>
  <div class="banner guarantee">
    <img src="../../assets/guarantee-header.png">
    <div class="banner-title">
      <h2>GARANTÍA DIRECTA</h2>
      <p>
        Los productos de pequeña marroquinería han sido diseñados para ser llevados en el bolsillo interno de sacos, chaquetas, camisas, bolsos y maletines; el uso inadecuado en otros bolsillos deforman el producto,
        el cual esta garantizado en su manufactura. Las rayas y variaciones de tono son características naturales del cuero y no constituyen defecto.
      </p>
      <br>
      <p>La garantía no cubre daños ocasionados por el usuario tales como: rasgaduras, manchas de tinta ó variaciones de coloración por solventes y limpiadores.</p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerGuaranteeComponent",
  props: {}
};
</script>

<style lang="less">
@import (reference) "../../styles/index.less";
.banner.guarantee {
  display: block;
  width: 100%;
  padding: 0em;
  box-sizing: border-box;
  background-color: black;
  color: white;
  img {
    width: 100%;
    display: block;
    padding-top: 1.25em;
    padding-bottom: 0.25em;
  }
  h2 {
    font-family: "TrajanPro";
    font-size: 0.85em;
  }
  p {
    font-family: "Open Sans";
    text-transform: uppercase;
    font-size: 0.85em;
    font-weight: 300;
    width: 90%;
    margin: 0 auto;
  }
}
</style>
