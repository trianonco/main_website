<template>
  <div class="banner credit cards">
    <h2>MÉTODOS DE PAGO</h2>
    <div class="credit-cards">
      <img src="../../../assets/credit-card-mc.png">
      <img src="../../../assets/credit-card-visa.png">
      <img src="../../../assets/credit-card-amex.png">
    </div>
    <p>Realiza tus pagos a través de trajeta de credito, debito automatico (PSE) ó efectivo por medio de Efecty</p>
  </div>
</template>

<script>
export default {
  name: "HomeBannerCreditCardsComponent",
  props: {}
};
</script>

<style lang="less">
@import (reference) "../../../styles/index.less";

.banner.credit.cards {
  display: block;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background-color: white;
  h2 {
    font-family: "TrajanPro";
    font-size: 0.75em;
    color: gray;
  }
  div.credit-cards {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    img {
      width: 5em;
    }
  }
  p {
    color: gray;
    line-height: 20px;
    font-size: 12px;
  }
}
</style>
