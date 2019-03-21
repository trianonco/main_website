<script>
import RouterLoading from "./components/loader/loader.component";
export default {
  components: {
    RouterLoading
  },
  mounted() {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    window.addEventListener("resize", () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    });
  }
};
</script>

<template>
  <div id="app">
    <router-loading/>
    <router-view/>
  </div>
</template>

<style lang="less">
@import "./styles/index.less";
:root {
  --app-height: 100%;
}

html,
body {
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;

  @media not all and (hover: hover) {
    height: var(--app-height);
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: block;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
</style>
