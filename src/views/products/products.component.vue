<template>
  <div class="view products">
    <div class="wrapper">

      <!-- Headers -->
      <HeaderComponent/>

      <!-- Products Components -->
      <div class="products-banner">
          <img class="first" src="../../assets/gender-categories/male-bg.png" v-if="gender==='MALE'"/>
          <img class="first"  src="../../assets/gender-categories/female-bg.png" v-if="gender==='FEMALE'"/>
          <h1> {{ description }}</h1>
          <img class="last"  src="../../assets/gender-categories/male-bg.png" v-if="gender==='MALE'"/>
          <img class="last"  src="../../assets/gender-categories/female-bg.png" v-if="gender==='FEMALE'"/>
      </div>

      <div class="products-filters">
            <h1>
                Filtrar por :
            </h1>
            <div class="filter" :class="isFilterActiveByName('price')" @click="setFilterActiveByName('price')">PRECIO</div>
            <div class="filter" :class="isFilterActiveByName('color')" @click="setFilterActiveByName('color')">COLOR</div>
            <div class="filter" :class="isFilterActiveByName('az')"    @click="setFilterActiveByName('az')">A-Z</div>
            <div class="filter" :class="isFilterActiveByName('za')"    @click="setFilterActiveByName('za')">Z-A</div>
      </div>


      <div class="products-list">

          <div class="products-product" v-for="product of products" v-bind:key="product.id">
              <div class="product-wrapper">
                  <div class="isNew" v-if="product.isNew || true">
                      NUEVO
                  </div>
                  <img class="photo" :src="product.image.src" :alt="product.image.alt">
                  <h2 class="price"> {{ product.price | toCurrency}}</h2>
                  <h2 class="name"> {{ product.name}}</h2>
                  <h2 class="color"> Color {{ product.color}}</h2>
              </div>
          </div>

      </div>
      
     
      <!-- Footers -->
      <FooterComponent/>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../../components/shared/header/header.component";
import FooterComponent from "../../components/shared/footer/footer.component";

export default {
  name: "products",
  components: {
    HeaderComponent,
    FooterComponent
  },

  methods:{

      isFilterActiveByName(filterName){
          if(this.filter === filterName){
              return 'active';
          }else{
              return 'no-active';
          }
      },


      setFilterActiveByName(filterName){
          

          if(filterName === 'price' && filterName === this.filter){
              if(!this.filterLowToHigh){
                  this.products.sort(function(a, b){return a.price-b.price});
              }else{
                  this.products.sort(function(a, b){return b.price-a.price});  
              }
              this.filterLowToHigh = !this.filterLowToHigh;
          }

          if(filterName === 'price' && filterName !== this.filter){
              if(this.filterLowToHigh){
                  this.products.sort(function(a, b){return a.price-b.price});
              }else{
                  this.products.sort(function(a, b){return b.price-a.price});  
              }
          }

         if(filterName === 'color' && filterName === this.filter){
              if(!this.filterLowToHigh){
                  this.products.sort(function(a, b){return a.color-b.color});
              }else{
                  this.products.sort(function(a, b){return b.color-a.color});  
              }
              this.filterLowToHigh = !this.filterLowToHigh;
          }

          if(filterName === 'color' && filterName !== this.filter){
              if(this.filterLowToHigh){
                  this.products.sort(function(a, b){return a.color-b.color});
              }else{
                  this.products.sort(function(a, b){return b.color-a.color});  
              }
          }



          if(filterName === 'az'){
              // a-b => 0,1,2,3,4
              this.products.sort(function(a, b){return a.name-b.name});
          }

         if(filterName === 'za'){
              // a-b => 0,1,2,3,4
              this.products.sort(function(a, b){return b.name-a.name});
          }

          this.filter = filterName;
          
      },

      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

  },


  created(){

      const random_colors = ['Rojo','Amarillo','Cafe','Negro','Miel','Purpura'];
      const random_names = ['Billetera','Bolso' ,'Porta documentos','Llavero','Maleta','Cinturon'];

      this.products = [];
      for( let i = 0;  i < 200; i++){
            const mock_id = i;
            const mock_isNew = (Math.random() > 0.5) || true;
            const mock_price = this.getRandomInt(50000,500000);
            const mock_name = random_names[Math.floor(Math.random()*random_names.length)];
            const mock_color = random_colors[Math.floor(Math.random()*random_colors.length)];
            const mock_photo_src = 'https://loremflickr.com/200/200/'+i;
            const mock_photo_alt = 'Random Product Trianon Co';

            const mock_product = {
                id : mock_id,
                image:{
                    src: mock_photo_src,
                    alt: mock_photo_alt,
                },
                price: mock_price,
                name: mock_name,
                color: mock_color
            };

            this.products.push(mock_product);
      }


  },


  computed:{
      category(){
          return this.$route.params.category;
      },
      gender(){
          return this.$route.params.gender;
      },
      description(){
          return this.$route.params.description;
      }
  },


  data(){
      return{
          filter:'',
          filterLowToHigh: true,
          products: []
      }
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

  .products-banner{
      background-color:black;
      color:white;
      
      display: block;
      width:100%;

      padding-top: 1em;
      padding-bottom: 1em;

      h1{
          #Font-TrajanPro();
      }

      #Flex-Row-Extremes();
      img{
          width: 1.5em;
          &.last{
               -moz-transform: scaleX(1);
        -o-transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        filter: FlipH;
        -ms-filter: "FlipH";
          }
          &.first{
               -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        filter: FlipH;
        -ms-filter: "FlipH";
          }
      }
  }

  .products-filters{
      
      #Font-TrajanPro();
      
      background-color:white;
      color:gray;
      
      display: block;
      width:100%;

      box-sizing: border-box;

      padding: 1em;

      font-size:12px;

      #Flex-Row-Extremes();

      .filter{

          &.active{
              color : @color-yellow;
          }

      }

  }

.products-list{
    background-color:white;
}
  .products-product{
      display:block;

     background-color:rgba(0,0,0,0);
      width: ~"calc(50% - 0.2em)";
      padding:0.5em 0.5em;
box-sizing:border-box;
      display:inline-block;

      .product-wrapper{
          width:100%;
          padding:0em 0em;
          box-sizing:border-box;
          background-color:rgba(0,0,0,0);
          border:1px solid black;
        
      }

   

      .isNew{
          display:block;
          width:100%;
          padding:0.5em;
          letter-spacing: 3px;
          font-weight:900;
          box-sizing:border-box;
          background-color:@color-yellow;
          color:white;
          #Font-OpenSans();
      }

      .photo{
          width:50%;
          padding:25%;

      }

      .price{
          display:block;
          background-color: #575656;
          color:white;
          text-align: center;
          padding:0.5em;
          margin-bottom:1px;
          font-size:12px;
          #Font-TrajanPro();
      }

        .name{
            display:block;
            background-color: #575656;
            color:white;
            text-align: center;
            padding:0.5em;
            font-size:10px;
            #Font-TrajanPro();
      }

      .color{
            display:block;
            background-color: #575656;
            color:white;
            text-align: center;
            padding:0.5em;
            font-size:10px;
            #Font-TrajanPro();
      }
  }
}
</style>

