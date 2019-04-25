<template>
  <div class="view login">
    <div class="wrapper">

      <!-- Headers -->
      <HeaderComponent/>

      <!-- Login Components -->
      <LoginSigninComponent></LoginSigninComponent>
      <LoginShareComponent></LoginShareComponent>
      
      <!-- Footers -->
      <FooterComponent/>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../../components/shared/header/header.component";
import FooterComponent from "../../components/shared/footer/footer.component";
import LoginSigninComponent from "../../components/login/login-signin/login-signin.component";
import LoginShareComponent from "../../components/login/login-share/login-share.component";

export default {
  name: "login",
  components: {
    HeaderComponent,
    FooterComponent,
    LoginSigninComponent,
    LoginShareComponent
  }
};
</script>

<style lang="less">
@import (reference) "../../styles/index.less";
div.view.home {
  display: block;
  width: 100%;

  div.view-wrapper {

  }
}
</style>

