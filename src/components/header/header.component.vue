<template>
  <div class="header">
    <div class="header-title">
      <img class="header-title-logo" src="../../assets/main-logo.png">
      <div class="header-title-login">INICIAR SESIÓN</div>
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
.header {
  display: block;
  position: relative;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: 1em;
}
.header-title {
  display: block;
  position: relative;
  width: 100%;
  background-color: white;
  &-logo {
    display: block;
    width: 3.5em;
    padding: 1.5em;
    margin: 0 auto;
    position: relative;
  }
  &-login {
    position: absolute;
    color: #9b9b9b;
    padding: 0.5em;
    border-bottom: 1px solid #9b9b9b;
    top: 0.5em;
    right: 0.5em;
    font-size: 0.75em;
  }
}
</style>
