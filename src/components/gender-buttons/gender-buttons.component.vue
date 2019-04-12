<template>
  <div class="gender-buttons">
    <div class="gender-button male">
      <div class="wrapper">MUJER</div>
    </div>
    <div class="gender-button female">
      <div class="wrapper">HOMBRE</div>
    </div>
  </div>
</template>


<style lang="less">
@import (reference) "./../../styles/index.less";
.gender-buttons {
  width: 100%;
  height: @size-gender-buttons-height;
  background-color: white;

  font-family: "TrajanPro";

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
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.gender-button {
  display: block;
  width: 40%;
  padding: 0.1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }

  background: rgba(241, 231, 103, 1);
  background: -moz-linear-gradient(
    -45deg,
    rgba(241, 231, 103, 1) 0%,
    rgba(254, 182, 69, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, rgba(241, 231, 103, 1)),
    color-stop(100%, rgba(254, 182, 69, 1))
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(241, 231, 103, 1) 0%,
    rgba(254, 182, 69, 1) 100%
  );
  background: -o-linear-gradient(
    -45deg,
    rgba(241, 231, 103, 1) 0%,
    rgba(254, 182, 69, 1) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    rgba(241, 231, 103, 1) 0%,
    rgba(254, 182, 69, 1) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(241, 231, 103, 1) 0%,
    rgba(254, 182, 69, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1e767', endColorstr='#feb645', GradientType=1 );
}
.gender-button .wrapper {
  display: block;
  width: 100%;
  padding: 0.25em;

  background-color: white;
  box-sizing: border-box;

  font-size: 0.9em;
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

