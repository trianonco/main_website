<template>
  <div class="SearchBarComponent">
    <h1>SERCH COMPONENTN</h1>
  </div>
</template>

<script>
export default {
  name: "SearchBarComponent"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import (reference) "./../../styles/index.less";
.SearchBarComponent {
  width: 100%;
  height: @size-search-bar-height;
  background-color: black;
  color: #fff;
  h1 {
    font-size: 20px;
  }
}
</style>
