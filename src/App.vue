<script>

//import setAutoHeight from './scripts/height.js'

import RouterLoading from "./components/shared/loader/loader.component";

export default {
  components: {
    RouterLoading
  },

  methods: {

    initHeight(){
      //setAutoHeight();
    },

    initUserSession(){

    }
  },


  mounted() {
   this.initHeight();
   this.initUserSession();
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
  height: auto;

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
  height: auto;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
</style>
