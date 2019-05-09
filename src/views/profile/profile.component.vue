<template>
  <div class="view profile">
    <HeaderComponent :profile="true"></HeaderComponent>
    <div v-if="isLogged">
      <div class="wrapper" v-if="cart && cart.items.length == 0">
        <div class="wrapper-title">
          <span>{{user.displayName.split(' ')[0]}}, BIENVENIDO A TU PERFIL TRIANON</span>
        </div>
        <div class="wrapper-text">
          <span>Aquí encontrarás los productos que hayas seleccionado, el estado de envio y los detalles de tus compras.</span>
        </div>
        <div class="wrapper-container">
          <div class="wrapper-container-header">
            <img src="../../assets/gender-categories/bullet-gray.png">
            <h1>ESPACIO PARA TUS PRODUCTOS</h1>
          </div>
          <div class="wrapper-container-content">
            <img src="../../assets/plus_icon-01.png" @click="addItem()">
            <p
              class="normal"
            >¿Qué esperas?, descubre los articulos considerados lo mejor de la arroquinería.</p>
            <p class="light">¡ Toca el simbolo + para empezar!</p>
          </div>
        </div>
      </div>
      <div class="wrapper" v-if="cart && cart.items.length > 0">
        <div class="products">
          <ProfileProductCard
            :product="product"
            :n="cart.items.filter( item => item.id === product.id).length"
            v-for="(product, index) of cart_items_unique"
            v-bind:key="index"
          ></ProfileProductCard>
        </div>

        <h1>{{ getTotalPrice() | toCurrency }}</h1>
        <br>
        <br>
      </div>
      <LoginShareComponent :theme="'gray'"></LoginShareComponent>
    </div>
    <div v-if="!isLogged">
      <h1>NO ESTAS LOGGEADO!</h1>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";

import HeaderComponent from "../../components/shared/header/header.component";
import FooterComponent from "../../components/shared/footer/footer.component";
import LoginShareComponent from "../../components/login/login-share/login-share.component";
import ProfileProductCard from "../../components/product/profile-product-card.component";

export default {
  name: "Profile",

  methods: {
    addItem() {
      this.$router.push("/products");
    },
    getTotalPrice() {
      return this.cart.items
        .map(item => parseFloat(item.price.COP))
        .reduce((sum, price) => price + sum);
    }
  },

  components: {
    HeaderComponent,
    FooterComponent,
    LoginShareComponent,
    ProfileProductCard
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cart_items_unique() {
      return Array.from(new Set(this.$store.state.cart.items));
    }
  },

  data() {
    return {
      isLogged: false,
      user: {}
    };
  },

  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogged = true;
        this.user = user;
      } else {
        this.isLogged = false;
        this.user = {};
      }
    });
  }
};
</script>

<style lang="less">
@import (reference) "../../styles/index.less";
div.view.profile {
  display: block;
  width: 100%;
  background-color: black;
  color: white;

  div.wrapper {
    display: block;
    width: 100%;
    padding: 1em;

    box-sizing: border-box;
    #Font-OpenSans();

    &-title {
      color: white;
      width: fit-content;
      margin: 0 auto;
      text-transform: uppercase;
      #Font-OpenSans();
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 12px;
      padding: 0.5em 0em 1em 0em;
    }
    &-text {
      color: white;
      width: 100%;
      margin: 0 auto;
      #Font-OpenSans("light");
      letter-spacing: 1px;
      line-height: 150%;
      font-size: 11px;
      font-weight: 300;
      padding: 0.5em 0em 1em 0em;
    }
  }

  div.wrapper-container {
    display: block;
    width: 100%;
    background-color: white;
    color: gray;
    #Font-TrajanPro();

    &-header {
      #Flex-Row-Center-toLeft();
      padding: 1em;
      border-bottom: 1px solid gray;
      h1 {
        padding: 0em 1em;
        margin: 0px;
        text-align: left;
        font-size: 11px;
      }
      img {
        width: 1em;
      }
    }

    &-content {
      #Font-OpenSans();
      img {
        box-sizing: content-box;
        width: 3.5em;
        padding: 1em;
      }
      p {
        transform: scaleY(0.9);
        font-size: 12px;
        padding-bottom: 0.5em;
        &.normal {
          color: black;
        }
        &.light {
          color: gray;
          padding-bottom: 2em;
        }
      }
    }
  }
}
</style>