<template>
  <div class="view products">
    <!-- Headers -->
    <HeaderComponent/>
    <div class="view-wrapper">
      <h1>
        <img src="../../assets/gender-categories/bullet-gold.png">
        <span>100% Cuero. 100% Colombiano</span>
        <img src="../../assets/gender-categories/bullet-gold.png">
      </h1>
      <div class="view-wrapper-frame">
        <div class="view-wrapper-frame-content" v-if="product.photos">
          <div class="product-photo-swiper">
            <swiper :options="swiperOption" ref="productSwiper">
              <!-- slides -->
              <swiper-slide
                v-for="(swiperImage) of getProductPhotos()"
                v-bind:key="swiperImage.alt"
              >
                <img
                  class="photo"
                  onerror="this.onerror=null; this.style.display = 'none'"
                  :src="swiperImage.thumb.src.replace('thumbs','thumb')"
                  width="100%"
                >
              </swiper-slide>
            </swiper>
          </div>

          <div class="price" v-if="product.price">{{ parseFloat(product.price.COP) | toCurrency }}</div>
          <div class="description" v-if="product.description && product.color">
            {{ product.description }}
            <br>
            {{ product.color }}
          </div>
          <div class="photos">
            <img
              class="photo"
              @error="imgLoadError(0)"
              @click="productSwiperGoToSlide(0)"
              onerror="this.onerror=null; this.style.display = 'none'"
              :src="product.photos[0].thumb.src.replace('thumbs','thumb')"
            >
            <img
              onerror="this.onerror=null; this.style.display = 'none'"
              class="photo"
              @click="productSwiperGoToSlide(1)"
              @error="imgLoadError(1)"
              :src="product.photos[1].thumb.src.replace('thumbs','thumb')"
            >
            <img
              class="photo"
              @error="imgLoadError(2)"
              @click="productSwiperGoToSlide(2)"
              onerror="this.onerror=null; this.style.display = 'none'"
              :src="product.photos[2].thumb.src.replace('thumbs','thumb')"
            >
            <img
              class="photo"
              @error="imgLoadError(3)"
              @click="productSwiperGoToSlide(3)"
              onerror="this.onerror=null; this.style.display = 'none'"
              :src="product.photos[3].thumb.src.replace('thumbs','thumb')"
            >
          </div>

          <div class="button theme-black border-gold" @click="doAddToCart()">
            <h5>COMPRAR</h5>
          </div>

          <div class="message">
            <h3>EL PRODUCTO SE AÑADIRÁ A TU PERFIL</h3>
          </div>
        </div>
      </div>

      <div class="view-description" v-if="product.id && product.size">
        <div class="product-reference">Referencia : {{product.id}}</div>
        <div
          class="product-sizes"
        >Alto : {{product.size.height}} cms Ancho: {{product.size.width}} cms</div>
      </div>

      <FooterComponent/>
      <!-- Footers -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import VLazyImage from "v-lazy-image";
import HeaderComponent from "../../components/shared/header/header.component";
import FooterComponent from "../../components/shared/footer/footer.component";

export default {
  name: "product",
  components: {
    HeaderComponent,
    FooterComponent,
    VLazyImage
  },

  methods: {
    doAddToCart() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$store.dispatch("addToCart", this.product);
          //MOSTAR QUE YA COMPRO
        } else {
          this.$router.push("/login");
        }
      });
    },
    productSwiperGoToSlide(k) {
      this.swiper.slideTo(k, 1000, true);
    },
    imgLoadError(index) {
      this.photosOnErrorsIndex.push(index);
    },
    getProductPhotos() {
      return this.product.photos.filter(
        (photo, index) => !this.photosOnErrorsIndex.includes(index)
      );
    }
  },

  created() {
    const db = firebase.firestore();
    const dbProducts = db.collection("products");
    dbProducts
      .doc(this.id)
      .get()
      .then(response => {
        this.product = response.data();
      })
      .catch(error => console.error(error));
  },

  mounted() {},

  computed: {
    id() {
      return this.$route.params.id;
    },
    swiper() {
      return this.$refs.productSwiper.swiper;
    }
  },

  data() {
    return {
      photosOnErrorsIndex: [],
      product: {},
      swiperImages: [],
      swiperOption: {
        effect: "slide",
        autoplay: {
          delay: 5000
        },
        slidesPerView: 1
      }
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
    display: block;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;

    background-color: black;
    color: white;

    #Font-TrajanPro();

    h1 {
      display: block;
      width: 100%;
      padding: 1em 0em;
      padding-top: 0em;
      img {
        width: 1em;
        display: inline-block;
        padding: 0.5em;
        vertical-align: middle;
        box-sizing: content-box;
      }
      span {
        display: inline-block;
        vertical-align: middle;
        letter-spacing: 0px;
        -webkit-transform: scaleY(0.9);
        transform: scaleY(0.9);
      }
    }
  }

  div.view-wrapper-frame {
    display: block;
    width: 100%;
    background-color: white;
    color: black;
    padding: 1em;
    padding-bottom: 0em;

    div.card {
      display: block;
      width: 100%;
      border: 1px solid black;
      color: black;
      padding: 1em;
    }

    div.view-wrapper-frame-content {
      display: block;
      width: 100%;
      border: 1px solid black;
      color: black;
      padding: 0em;
      padding-left: 0em;
      padding-right: 0em;
      padding-bottom: 0em;

      .price,
      .description {
        display: block;
        width: 100%;
        background-color: @color-gray-dark;
        padding: 1em 0em;
        margin: 0em;
        color: white;
        line-height: 1;
      }
      div.product-photo-swiper {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 1px;
      }
      div.photos {
        width: 100%;
        padding: 0.5em 0em;
        box-sizing: border-box;
        #Flex-Row-Center-toLeft();
        .photo {
          display: block;
          width: ~"calc(25% - 1em)";
          margin: 0em 0.5em;
          margin-left: 0em;
          border: 1px solid black;
          &:first-child {
            margin-left: 0.5em;
          }
        }
      }
    }
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

  div.button {
    display: block;
    width: ~"calc(100% - 1em)";
    box-sizing: border-box;
    padding: 1em;
    margin: 0.5em auto;
    margin-top: 0em;
    #Font-TrajanPro();
    &.theme-black {
      background-color: @color-black;
      color: white;
    }
    &.border-gold {
      border: 2px solid @color-yellow;
    }
  }

  div.message {
    display: block;
    width: ~"calc(100% - 1em)";
    box-sizing: border-box;
    padding: 1em;
    margin: 0em auto;
    margin-top: 0em;
    #Font-TrajanPro();
    h3 {
      font-size: 12px;
      letter-spacing: 0px;
      -webkit-transform: scaleY(0.9);
      transform: scaleY(0.9);
    }
  }

  div.view-description {
    display: block;
    width: ~"calc(100% - 0em)";
    box-sizing: border-box;

    margin: 0em auto;
    margin-top: 0em;
    background-color: gray;
    color: white;
    .product-reference {
      width: 100%;
      padding: 1em;
      box-sizing: border-box;
      border-bottom: 1px solid white;
    }
    .product-sizes {
      width: 100%;
      padding: 1em;
      box-sizing: border-box;
      color: black;
    }
  }
}
</style>

