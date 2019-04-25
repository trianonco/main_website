<template>
  <div class="login-share">
    <div class="login-share-wrapper">
      <h1>{{ message }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginShareComponent",
  data(){
    return{
      message : '¡COMPARTE Y GANA DESCUENTOS!'
    }
  }
};
</script>

<style lang="less">
@import (reference) "./../../../styles/index.less";
div.login-share{
  display:block;
  width: 100%;
  height: @size-login-share-height;
  background-color:@color-yellow;
  background-image: url('./../../../assets/share/gold-bg.png');
      background-repeat: repeat-x;
    background-size: contain;

    #Flex-Col-Center-Center();

   
  &-wrapper{
    display:block;
    width:fit-content;

    box-sizing: border-box;
    padding:1em;

    margin:0 auto;

    background-color: black;
    color: @color-white;


     #Font-TrajanPro('normal');
        #Font-Title();

  }

}
</style>
