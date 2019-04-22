<template>
  <div class="view admin">
    <div class="wrapper">
      <HeaderComponent></HeaderComponent>
      <h1>ADMIN</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../../components/shared/header/header.component";
export default {
  name: "adminView",
  components: {
    HeaderComponent
  },
  mounted() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#photo").files[0];
  }
};
</script>

