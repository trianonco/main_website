<template>
  <div class="view error">
    <div class="wrapper">
      <!-- Header  -->
      <headerComponent/>

      <div class="error-404-main">
        <img
          src="../../assets/404/main.png"
          alt="Trianon Co. Cueros y Marroquineria Colombia. Error pagina no encontrada"
        >
      </div>

      <div class="error-404-back" @click="goToHome()">
        <i class="fas fa-less-than"></i>
        <i class="fas fa-less-than"></i>
        <h4>REGRESAR AL HOME</h4>
      </div>

      <div class="error-404-footer">
        <img src="../../assets/404/footer.png" alt="Trianon Co. Cueros y Marroquineria Colombia.">
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import HeaderComponent from "../../components/shared/header/header.component";
export default {
  name: "pageNotFound",
  components: {
    HeaderComponent
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    }
  }
};
</script>



<style lang="less">
@import (reference) "../../styles/index.less";
.error-404-main {
  display: block;
  width: 100%;
  height: calc( @size-height-app - @size-header-height - 2em - 20vh);
  background-color: black;

  #Flex-Col-Center-Center();
}
.error-404-main img {
  display: block;
  width: 100%;
  height: auto;
}

.error-404-back {
  width: 100vw;
  height: 2em;
  background-color: white;
  color: black;
  #Flex-Row-Center-Center();
}

.error-404-footer {
  display: block;
  width: 100vw;
  height: 20vh;
  background-color: black;
}
.error-404-footer img {
  width: 100vw;
  height: 20vh;
  object-fit: cover;
  object-position: center;
}
</style>

