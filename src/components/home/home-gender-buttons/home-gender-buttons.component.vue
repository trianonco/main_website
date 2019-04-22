<template>
  <div class="gender-selector">
    <div class="gender-buttons">
      <div class="gender-button female" @click="openGenderContent('FEMALE')">
        <div class="wrapper">MUJER *</div>
      </div>
      <div class="gender-button male" @click="openGenderContent('MALE')">
        <div class="wrapper">HOMBRE</div>
      </div>
    </div>

    <div class="gender-contents" :class="getStatusClass()">
      <!-- Gender Content :: Female, Male -->
      <div class="gender-content">
        <div class="close-button" @click="closeGenderContent()">x</div>
        <ul class="categories" :class="getGenderClass()">
          <li class="category" v-for="category in categories" v-bind:key="category.id">
            <div v-if="isCategoryByGender(category)">
              <img src="../../../assets/gender-categories/bullet-gold.png" v-if="category.id === 0">
              <img src="../../../assets/gender-categories/bullet-gray.png" v-if="category.id !== 0">
              <h5>{{ category.description }}</h5>
            </div>
          </li>
        </ul>
        <div class="border">
          <img
            src="./../../../assets/gender-categories/female-border.png"
            v-if="gender === 'FEMALE'"
          >
          <img src="./../../../assets/gender-categories/male-border.png" v-if="gender === 'MALE'">
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="less">
@import (reference) "./../../../styles/index.less";
.gender-selector {
  display: block;
  width: 100%;
  height: @size-gender-buttons-height;
  z-index: 20;
  .gender-buttons {
    z-index: 50;
    position: relative;
    #Gender-Buttons();
    height: @size-gender-buttons-height;
    .gender-button .wrapper {
      padding: @1pm;
    }
  }
  .gender-contents {
    z-index: 25;
    #Gender-Content();
  }
}
</style>

<script>
export default {
  name: "HomeGenderButtonsComponent",
  components: {},

  data() {
    return {
      categories: [
        {
          id: 0,
          code: "WALLETS",
          description: "Billeteras",
          gender: ["MALE", "FEMALE"]
        },
        {
          id: 1,
          code: "BAGS",
          description: "Bolsos y Maletines",
          gender: ["MALE", "FEMALE"]
        },
        {
          id: 2,
          code: "BELTS",
          description: "Cinturones",
          gender: ["MALE", "FEMALE"]
        },
        {
          id: 3,
          code: "KEY_CHAINS",
          description: "Llavero",
          gender: ["MALE", "FEMALE"]
        },
        {
          id: 4,
          code: "COIN_PURSES",
          description: "Monederos y Tarjeteros",
          gender: ["MALE", "FEMALE"]
        },
        {
          id: 5,
          code: "CASH_PURSES",
          description: "Porta Billetes",
          gender: ["MALE", "FEMALE"]
        },
        {
          id: 6,
          code: "COSMETICS_PURSES",
          description: "Porta Cosméticos",
          gender: ["FEMALE"]
        },
        {
          id: 7,
          code: "KEY_CHAINS_PURSES",
          description: "Porta Llaveros",
          gender: ["MALE"]
        },
        {
          id: 8,
          code: "DOCS_PURSES",
          description: "Porta Documentos",
          gender: ["MALE", "FEMALE"]
        },
        {
          id: 9,
          code: "PASSPORT_PURSES",
          description: "Porta Pasaportes",
          gender: ["MALE", "FEMALE"]
        }
      ],
      gender: "MALE",
      isOpen: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    closeGenderContent() {
      this.isOpen = false;
    },

    openGenderContent(gender) {
      this.isOpen = true;
      this.gender = gender;
    },

    goToCategory(category) {
      alert(category);
    },

    getGenderClass() {
      return this.gender;
    },

    getStatusClass() {
      if (this.isOpen === true) {
        return "opened";
      } else {
        return "closed";
      }
    },

    isCategoryByGender(category) {
      return (
        category.gender.filter(gender => gender === this.gender).length > 0
      );
    }
  }
};
</script>

