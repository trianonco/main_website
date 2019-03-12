<template>
  <transition name="fade">
    <div class="view-loader" :class="{ active: UI.isLoading , loaded : UI.isLoaded }">
      <img src="../../assets/main-logo.png">
    </div>
  </transition>
</template>

<script>
export default {
  name: "RouterLoading",
  created() {
    setTimeout(() => {
      this.UI.isLoading = true;
      setTimeout(() => {
        this.UI.isLoaded = true;
      }, 3500);
    }, 500);
  },
  data() {
    return {
      UI: {
        isLoaded: false,
        isLoading: false
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.view-loader {
  display: block;
  background-color: white;
  z-index: 100;

  width: 100vw;
  height: 100%;
  max-height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-transition: top 1000ms ease-in-out;
  -moz-transition: top 1000ms ease-in-out;
  -ms-transition: top 1000ms ease-in-out;
  -o-transition: top 1000ms ease-in-out;
  transition: top 1000ms ease-in-out;

  img {
    width: 50vw;
    opacity: 0;
    -webkit-transition: all 3500ms ease-in-out;
    -moz-transition: all 3500ms ease-in-out;
    -ms-transition: all 3500ms ease-in-out;
    -o-transition: all 3500ms ease-in-out;
    transition: all 3500ms ease-in-out;
  }

  &.active {
    img {
      width: 50vw;
      opacity: 1;
    }
  }
  &.loaded {
    top: -100vh;
  }
}
</style>
