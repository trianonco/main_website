<template>
  <footer class="footer">
    <div class="footer-title">
      <h2>SÍGUENOS EN NUESTRAS REDES SOCIALES</h2>
    </div>
    <div class="footer-networks">
      <div class="footer-network" v-for="icon in icons" v-bind:key="icon.id">
        <a :href="icon.url" target="_blank">
          <img :src="icon.src" :alt="icon.alt">
        </a>
      </div>
    </div>
    <div class="footer-logo">
      <img src="./../../../assets/footer/bull.png" class alt>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      icons: [
        {
          id: 0,
          alt: "Facebook",
          url: "https://www.facebook.com",
          src: "img/social-networks/fb.png"
        },
        {
          id: 1,
          alt: "Instagram",
          url: "https://www.instagram.com",
          src: "img/social-networks/instagram.png"
        },
        {
          id: 2,
          alt: "Twitter",
          url: "https://www.twitter.com",
          src: "img/social-networks/twitter.png"
        },
        {
          id: 3,
          alt: "Pinterest",
          url: "https://www.pinterest.com",
          src: "img/social-networks/pinterest.png"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import (reference) "./../../../styles/index.less";
.footer {
  display: block;
  width: 100%;
  height: @10pm;
  margin: 0 auto;

  z-index: 500;

  position: relative;

  background-color: @color-black;
  color: @color-white;
  &-title {
    h2 {
      #Font-OpenSans("normal");
      font-weight: 300;
      font-size: (@2pm - 4px);
      padding: @1pm;
    }
  }

  &-logo {
    display: block;
    width: 100%;
    margin: 0 auto;
    img {
      display: block;
      width: 100%;
      margin: 0 auto;
      padding: @1pm;
      box-sizing: border-box;
    }
  }
  &-networks {
    #Flex-Row-Center-Center();
  }
  &-network {
    display: block;
    width: @4pm;
    padding: @1pm;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
