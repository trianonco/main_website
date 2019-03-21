<template>
  <div class="gender-buttons">
    <div class="gender-button male">
      <div class="wrapper">HOMBRE</div>
    </div>
    <div class="gender-button female">
      <div class="wrapper">MUJER</div>
    </div>
  </div>
</template>


<style lang="less">
@import (reference) "./../../styles/index.less";
.gender-buttons {
  width: 100%;
  height: @size-gender-buttons-height;

  display: block;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.gender-button {
  display: block;
  width: 40%;
  padding: 0.1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  box-sizing: border-box;
  background: radial-gradient(
      ellipse farthest-corner at right bottom,
      #fedb37 0%,
      #fdb931 8%,
      #9f7928 30%,
      #8a6e2f 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      #ffffff 0%,
      #ffffac 8%,
      #d1b464 25%,
      #5d4a1f 62.5%,
      #5d4a1f 100%
    );
}
.gender-button .wrapper {
  display: block;
  width: 100%;
  padding: 0.25em;

  background-color: white;
  box-sizing: border-box;
}
</style>

<script>
export default {
  name: "GenderButtonsComponent",
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {}
};
</script>

