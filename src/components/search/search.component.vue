<template>
  <div class="search-bar-and-chat">
    <div class="search-bar">
      <img src="../../assets/lupa-icon.png">
      <input type="text" placeholder=" ... ">
    </div>
    <div class="chat">
      <img src="./../../assets/chat-icon.png">
    </div>
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
.search-bar-and-chat {
  width: 100%;
  height: @size-search-bar-height;
  background-color: black;
  color: #fff;
  position: relative;
  h1 {
    font-size: 20px;
  }
}
.search-bar {
  width: calc(100% - 2em);
  height: @size-search-bar-height;
  margin: 0 auto;
  background-color: black;
  color: #fff;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  img {
    width: 2.25em;
  }
  input {
    margin: 0em 0em 0em 1em;
    background-color: black;
    padding-bottom: 0.5em;
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    color: white;
    font-size: 1.1em;
    letter-spacing: 0.1em;
    width: 10em;
    font-family: "TrajanPro";
    width: 65vw;
  }
}
.chat {
  position: absolute;
  top: 2vh;
  right: 0.75em;
  img {
    width: 2.25em;
  }
}
</style>
