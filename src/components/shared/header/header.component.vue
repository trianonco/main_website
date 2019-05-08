<template>
  <header class="header" :class="getHeaderClass()">
    <!-- -->

    <!-- Header :: Nav -->
    <div class="header-nav">
      <!-- Header :: Nav :: Back -->
      <div class="header-nav-back">
        <div v-show="hasBack()">
          <img
            class="back"
            @click="gotToBack()"
            src="@/assets/header/back.png"
            alt="Trianon Colombia, Back. Regresa a la vista anterior."
          >
          <h3>ATRÁS</h3>
        </div>
      </div>

      <!-- Header :: Nav :: Logo -->
      <div class="header-nav-logo">
        <img
          class="logo"
          @click="goToHome()"
          v-show="hasLogo()"
          src="@/assets/header/logo.png"
          alt="Trianon Colombia, La mejor marroquinería."
        >
      </div>

      <!-- Header :: Nav :: Auth -->
      <div class="header-nav-auth">
        <div class="header-nav-auth-login" v-if="hasLogin() && !hasProfile()">
          <h3 @click="goToLogin()">INICIAR SESIÓN</h3>
        </div>
        <div class="header-nav-auth-profile" v-if="hasProfile()">
          <div class="wrapper">
            <img
              class="profile"
              src="@/assets/header/profile.png"
              alt="Trianon Colombia, Profile. Perfil persional. Usuarios de Trianon"
            >
            <h3>MI PERFIL</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Header :: Title -->
    <div class="header-title">
      <h1>LO MEJOR DE LA MARROQUINERÍA</h1>
    </div>

    <!-- -->
  </header>
</template>


<script>
import store from "./../../../store/store.js";
export default {
  name: "HeaderComponent",

  props: ["profile"],

  computed: {
    view() {
      return store.state.view;
    }
  },

  methods: {
    hasBack() {
      const currentRouteName = this.$router.currentRoute.name;
      const isHome = currentRouteName === "home" || currentRouteName === "/";
      return !isHome;
    },
    hasLogin() {
      const currentRouteName = this.$router.currentRoute.name;
      const isLogin = currentRouteName === "login";
      return isLogin || true;
    },
    hasProfile() {
      const currentRouteName = this.$router.currentRoute.name;
      const isProfile = currentRouteName === "profile";
      return isProfile;
    },
    hasLogo() {
      const currentRouteName = this.$router.currentRoute.name;
      const isLogo = true;
      return isLogo;
    },
    setHeaderClass(headerClassName) {
      this.UI.themeClass = headerClassName;
    },
    getHeaderClass() {
      const isError404 = this.$router.currentRoute.name === "404Error";
      if (isError404) {
        this.setHeaderClass("dark");
      } else {
        this.setHeaderClass("light");
      }
      return this.UI.themeClass;
    },
    goToLogin() {
      this.$router.push("/login");
      store.dispatch("setView", { id: 1, name: "LOGIN_VIEW" });
    },
    goToHome() {
      this.$router.push("/");
      //store.dispatch("setView", { id : 0 , name : 'LOGIN_HOME'});
    },
    gotToBack() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      UI: {
        themeClass: "light" // 'light' 'dark'
      }
    };
  }
};
</script>


<style lang="less">
@import (reference) "./../../../styles/index.less";
.header {
  #constructor-header();
  &-nav {
    #constructor-header-nav();
  }
  &-title {
    #constructor-header-title();
  }
}
</style>
