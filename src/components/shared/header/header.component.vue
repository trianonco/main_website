<template>
  <div class="header">
    <div class="header-nav">
      <div class="header-nav-back">
        <img
          class="back"
          src="@/assets/header/back.png"
          alt="Trianon Colombia, Back. Regresa a la vista anterior."
        >
      </div>
      <div class="header-nav-auth">
        <div class="header-nav-login">
          <h3>INICIAR SESIÓN</h3>
        </div>
        <div class="header-nav-profile">
          <img
            class="profile"
            src="@/assets/header/profile.png"
            alt="Trianon Colombia, Profile. Perfil persional. Usuarios de Trianon"
          >
          <h3>MI PERFIL</h3>
        </div>
      </div>
    </div>
    <div class="header-logo">
      <img
        class="logo"
        src="@/assets/header/logo.png"
        alt="Trianon Colombia, La mejor marroquinería."
      >
    </div>
    <div class="header-title">
      <h1>LA MEJOR MARROQUINERÍA</h1>
    </div>
  </div>
</template>


<script>
export default {
  name: "HeaderComponent"
};
</script>


<style lang="less">
@import (reference) "./../../../styles/index.less";
div.header {
  #constructor-header();
  &-nav {
    #constructor-header-nav();
  }
  &-logo {
    #constructor-header-logo();
  }
  &-title {
    #constructor-header-title();
  }
}
</style>
