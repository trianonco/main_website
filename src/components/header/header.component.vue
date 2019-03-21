<template>
  <div class="header">
    <div class="header-title">
      <img class="header-title-logo" src="../../assets/main-logo.png">
      <div class="header-title-login">
        <router-link to="/login">INICIAR SESIÓN</router-link>
      </div>
    </div>
    <div class="header-subtitle">LO MEJOR DE LA MARROQUINERÍA</div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import (reference) "./../../styles/index.less";
.header {
  display: block;
  width: 100%;
  height: @size-header-height;
  position: relative;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 0.25em;
  a {
    text-decoration: none;
  }
}
.header-title {
  display: block;
  position: relative;
  width: 100%;
  background-color: white;
  &-logo {
    display: block;
    width: 3em;
    padding: 1.25em;
    margin: 0 auto;
    position: relative;
  }
  &-login {
    position: absolute;
    color: #9b9b9b;
    padding: 0.25em;
    border-bottom: 1px solid #9b9b9b;
    top: 0.25em;
    right: 0.25em;
    font-size: 0.75em;
  }
}
</style>
