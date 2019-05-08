<template>
  <div class="view admin">
    <div class="wrapper">
      <HeaderComponent></HeaderComponent>
      <div class="wrapper">
        <ul class="tab-menu">
          <li @click="setSection('randomDB')" :class="getActiveItemClass('randomDB')">Random DB</li>
          <li @click="setSection('swiper')" :class="getActiveItemClass('swiper')">Home Swiper</li>
          <li @click="setSection('uploadDB')" :class="getActiveItemClass('uploadDB')">Upload DB</li>
        </ul>
        <section class="tab-content">
          <AdminRandomDBComponent v-if="UX.currentSection==='randomDB'"></AdminRandomDBComponent>
          <AdminSwiperSettingsComponent v-if="UX.currentSection==='swiper'"></AdminSwiperSettingsComponent>
          <AdminUploadDBComponent v-if="UX.currentSection==='uploadDB'"></AdminUploadDBComponent>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// <h2 @click="setRandomFirebaseDB()">RANDOM DB</h2>
// @ is an alias to /src
import HeaderComponent from "../../components/shared/header/header.component";
import AdminRandomDBComponent from "../../components/admin/adminRandomDB.component";
import AdminSwiperSettingsComponent from "../../components/admin/adminSwiperSettings.component";
import AdminUploadDBComponent from "../../components/admin/adminUploadDB.component";
export default {
  name: "adminView",
  components: {
    HeaderComponent,
    AdminRandomDBComponent,
    AdminSwiperSettingsComponent,
    AdminUploadDBComponent
  },
  mounted() {},
  methods: {
    setSection(sectionName) {
      this.UX.currentSection = sectionName;
    },
    getActiveItemClass(sectionName) {
      if (this.UX.currentSection === sectionName) {
        return "active";
      } else {
        return "";
      }
    }
  },
  data() {
    return {
      UX: {
        currentSection: "randomDB"
      }
    };
  }
};
</script>


<style lang="less">
@import (reference) "./../../styles/index.less";
div.view.admin {
  display: block;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;

  background-color: @color-gray-dark;
  color: white;

  .wrapper {
    display: block;
    width: 100%;
  }
  ul.tab-menu {
    display: inline-block;
    vertical-align: top;
    width: 200px;
    height: 100vh;
    padding: 0px;
    margin: 0px;
    background-color: #1c1b1b;
    li {
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 1em;
      margin: 0px;
      text-align: center;
      border-bottom: 1px solid @color-gray;
      cursor: pointer;
      &:hover {
        background-color: @color-gray;
      }
      &.active {
        background-color: @color-gray;
      }
    }
  }
  section.tab-content {
    display: inline-block;
    vertical-align: top;
    width: ~"calc(100% - 200px)";
    height: ~"calc(100vh - 30px)";
    overflow-y: scroll;
  }
}
</style>

