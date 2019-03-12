<template>
  <div class="view">
    <header-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/header/header.component";

export default {
  name: "HomeView",
  components: {
    HeaderComponent
  }
};
</script>

