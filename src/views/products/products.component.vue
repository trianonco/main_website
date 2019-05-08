<template>
  <div class="view products">
    <div class="wrapper">
      <!-- Headers -->
      <HeaderComponent/>

      <!-- Products Components -->
      <div class="products-banner">
        <img
          class="first"
          src="../../assets/gender-categories/male-bg.png"
          v-if="gender==='HOMBRE'"
        >
        <img
          class="first"
          src="../../assets/gender-categories/female-bg.png"
          v-if="gender==='DAMA'"
        >
        <h1>{{ description }}</h1>
        <img class="last" src="../../assets/gender-categories/male-bg.png" v-if="gender==='HOMBRE'">
        <img class="last" src="../../assets/gender-categories/female-bg.png" v-if="gender==='DAMA'">
      </div>

      <div class="products-filters-gender-color">
        <div class="products-filters-gender-color-male" v-if="gender === 'MALE'">
          <div class="yellow"></div>
          <div class="blue"></div>
        </div>
        <div class="products-filters-gender-color-female" v-if="gender === 'FEMALE'">
          <div class="yellow"></div>
          <div class="red"></div>
        </div>
      </div>
      <div class="products-filters">
        <h1>Filtrar por :</h1>
        <div
          class="filter"
          :class="isFilterActiveByName('price')"
          @click="setFilterActiveByName('price')"
        >PRECIO</div>
        <div
          class="filter"
          :class="isFilterActiveByName('color')"
          @click="setFilterActiveByName('color')"
        >COLOR</div>
        <div
          class="filter"
          :class="isFilterActiveByName('az')"
          @click="setFilterActiveByName('az')"
        >A-Z</div>
        <div
          class="filter"
          :class="isFilterActiveByName('za')"
          @click="setFilterActiveByName('za')"
        >Z-A</div>
      </div>
      <div class="products-filters-gender-color">
        <div class="products-filters-gender-color-male" v-if="gender === 'MALE'">
          <div class="blue" style="width: 100vw;"></div>
        </div>
        <div class="products-filters-gender-color-female" v-if="gender === 'FEMALE'">
          <div class="red" style="width: 100vw;"></div>
        </div>
      </div>

      <div class="products-list">
        <div class="products-list-item" v-for="product of products" v-bind:key="product.id">
          <ProductCardComponent :card="product"></ProductCardComponent>
        </div>
      </div>

      <!-- Footers -->
      <FooterComponent/>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
// @ is an alias to /src
import HeaderComponent from "../../components/shared/header/header.component";
import FooterComponent from "../../components/shared/footer/footer.component";
import ProductCardComponent from "../../components/products/product.card.component";
import { stringSimilarity } from "string-similarity-js";

export default {
  name: "products",
  components: {
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  },

  methods: {
    isFilterActiveByName(filterName) {
      if (this.filter === filterName) {
        return "active";
      } else {
        return "no-active";
      }
    },

    setFilterActiveByName(filterName) {
      if (filterName === "price" && filterName === this.filter) {
        if (!this.filterLowToHigh) {
          this.products.sort(function(a, b) {
            return a.price - b.price;
          });
        } else {
          this.products.sort(function(a, b) {
            return b.price - a.price;
          });
        }
        this.filterLowToHigh = !this.filterLowToHigh;
      }

      if (filterName === "price" && filterName !== this.filter) {
        if (this.filterLowToHigh) {
          this.products.sort(function(a, b) {
            return a.price - b.price;
          });
        } else {
          this.products.sort(function(a, b) {
            return b.price - a.price;
          });
        }
      }

      if (filterName === "color" && filterName === this.filter) {
        if (!this.filterLowToHigh) {
          this.products.sort(function(a, b) {
            return ("" + a.name).localeCompare(b.name);
          });
        } else {
          this.products.sort(function(a, b) {
            return ("" + b.name).localeCompare(a.name);
          });
        }
        this.filterLowToHigh = !this.filterLowToHigh;
      }

      if (filterName === "color" && filterName !== this.filter) {
        if (this.filterLowToHigh) {
          this.products.sort(function(a, b) {
            return ("" + a.name).localeCompare(b.name);
          });
        } else {
          this.products.sort(function(a, b) {
            return ("" + b.name).localeCompare(a.name);
          });
        }
      }

      if (filterName === "az") {
        // a-b => 0,1,2,3,4
        this.products.sort(function(a, b) {
          return ("" + a.name).localeCompare(b.name);
        });
      }

      if (filterName === "za") {
        // a-b => 0,1,2,3,4
        this.products.sort(function(a, b) {
          return ("" + b.name).localeCompare(a.name);
        });
      }

      this.filter = filterName;
    },

    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },

  created() {
    const db = firebase.firestore();
    const dbProducts = db.collection("products");
    dbProducts
      .get()
      .then(response => {
        const docs = response.docs;
        docs.map(doc => {
          const docData = doc.data();
          const docGender = docData.gender.toUpperCase();
          const docCategory = docData.category.toUpperCase();
          if (!this.category && !this.gender) {
            this.products.push(docData);
          } else {
            const isSameCategory =
              stringSimilarity(
                this.category.toUpperCase(),
                docCategory.toUpperCase()
              ) > 0.8;
            const isSameGender = docGender === this.gender;
            if (isSameCategory && isSameGender) {
              this.products.push(docData);
              console.log(docData);
            }
          }
        });
      })
      .catch(error => console.error(error));

    this.products = [];
  },

  computed: {
    category() {
      const routeCategory = this.$route.params.category;
      if (routeCategory === "WALLETS") {
        return "billetera";
      } else if (routeCategory === "BAGS") {
        return "bolso";
      } else if (routeCategory === "BELTS") {
        return "cinturon";
      } else if (routeCategory === "KEY_CHAINS") {
        return "llavero";
      } else if (routeCategory === "COIN_PURSES") {
        return "monedero";
      } else if (routeCategory === "CASH_PURSES") {
        return "porta billetes";
      } else if (routeCategory === "COSMETICS_PURSES") {
        return "porta comesticos";
      } else if (routeCategory === "KEY_CHAINS_PURSES") {
        return "porta llaveros";
      } else if (routeCategory === "DOCS_PURSES") {
        return "porta documentos";
      } else if (routeCategory === "PASSPORT_PURSES") {
        return "porta pasaporte";
      }

      return;
    },
    gender() {
      return this.$route.params.gender;
    },
    description() {
      return this.$route.params.description;
    }
  },

  data() {
    return {
      filter: "",
      filterLowToHigh: true,
      products: []
    };
  }
};
</script>

<style lang="less">
@import (reference) "../../styles/index.less";
div.view.products {
  display: block;
  width: 100%;

  div.view-wrapper {
  }

  .products-banner {
    background-color: black;
    color: white;

    display: block;
    width: 100%;

    padding-top: 1em;
    padding-bottom: 1em;

    h1 {
      #Font-TrajanPro();
    }

    #Flex-Row-Extremes();
    img {
      width: 1.5em;
      box-sizing: content-box;
      &.last {
        -moz-transform: scaleX(1);
        -o-transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        filter: FlipH;
        -ms-filter: "FlipH";
      }
      &.first {
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        filter: FlipH;
        -ms-filter: "FlipH";
      }
    }
  }

  .products-filters {
    #Font-TrajanPro();

    background-color: white;
    color: gray;

    display: block;
    width: 100%;

    box-sizing: border-box;

    padding: 1em;

    font-size: 12px;

    #Flex-Row-Extremes();

    .filter {
      text-decoration: underline;
      &.active {
        color: @color-yellow;
      }
    }
  }

  .products-filters-gender-color {
    display: block;
    width: 100vw;
    height: 5px;
    overflow: hidden;
    &-male {
      display: block;
      width: 100vw;
      height: 5px;
      overflow: hidden;
      div {
        display: inline-block;
        width: 50%;
        height: 5px;
        position: relative;
        top: -8px;

        &.red {
          background-color: @color-red;
        }
        &.blue {
          background-color: @color-blue;
        }
        &.yellow {
          background-color: @color-yellow;
        }
      }
    }
    &-female {
      display: block;
      width: 100vw;
      height: 5px;
      overflow: hidden;

      div {
        display: inline-block;
        width: 50%;
        height: 5px;
        position: relative;
        top: -8px;
        &.red {
          background-color: @color-red;
        }
        &.blue {
          background-color: @color-blue;
        }
        &.yellow {
          background-color: @color-yellow;
        }
      }
    }
  }

  .products-list {
    background-color: white;
    .products-list-item {
      display: inline-block;
      width: 50%;
    }
  }
}
</style>

