<template>
  <footer class="footer">
    <div class="title">SÍGUENOS EN NUESTRAS REDES SOCIALES</div>
    <div class="networks">
      <div class="network" v-for="icon in icons" v-bind:key="icon.id">
        <img :src="icon.src" :alt="icon.alt">
      </div>
    </div>
    <div class="trianon-logo"></div>
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
          url: "www.facebook.com",
          src: "img/social-networks/fb.png"
        },
        {
          id: 1,
          alt: "Instagram",
          url: "www.instagram.com",
          src: "img/social-networks/fb.png"
        },
        {
          id: 2,
          alt: "Twitter",
          url: "www.twitter.com",
          src: "img/social-networks/fb.png"
        },
        {
          id: 3,
          alt: "Pinterest",
          url: "www.pinterest.com",
          src: "img/social-networks/fb.png"
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
  display: none;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 13px;
  padding: 1em;
  .networks {
    img {
      width: 25%;
    }
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
</style>
