<template>
  <div class="admin-section randomDB">
    <h1>RANDOM DB</h1>

    <div class="button" @click="doRandomDB()">Randomize</div>
    <br>
    <div class="button" @click="doUpdateDB()">Update DB</div>
    <br>

    <div class="products">
      <table>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>PriceCo</th>
          <th>PriceUSD</th>
          <th>Color</th>
          <th>Collection</th>
        </tr>

        <tr class="product" v-for="product of RANDOM.products" v-bind:key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.gender }}</td>
          <td>{{ product.price_co }}</td>
          <td>{{ product.price_usd }}</td>
          <td>{{ product.color }}</td>
          <td>{{ product.collection }}</td>
        </tr>

        <!--

          id: random_id,
          name: random_name,
          gender: random_gender,

          photo_src: random_photo_src,
          photo_alt: random_photo_alt,

          created_date: random_created_date,
          created_byUser_Id: random_created_byUser_Id,
          updated_date: random_updated_date,
          updated_byUser_Id: random_updated_byUser_Id,

          price_co: random_price_co,
          price_usd: random_price_usd,

          color: random_color,
          collection: random_collection

        -->
      </table>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "AdminRandomDBComponent",

  mounted() {
    this.RANDOM.products = [];
  },

  methods: {
    getRandomItemFromArray(items) {
      return items[~~(items.length * Math.random())];
    },

    doRandomDB() {
      this.RANDOM.products = [];
      for (let n = 0; n < 100; n++) {
        const random_color = this.getRandomItemFromArray(this.RANDOM.colors);
        const random_name = `${this.getRandomItemFromArray(
          this.RANDOM.names
        )} ${this.getRandomItemFromArray(this.RANDOM.sizes)} ${random_color}`;
        const random_collection = this.getRandomItemFromArray(
          this.RANDOM.collections
        );

        const random_price_usd = 10 * Math.random() + 25 * Math.random();
        const random_price_co =
          1000 * (2 + 1 * Math.random()) * random_price_usd;

        const random_gender = this.getRandomItemFromArray(this.RANDOM.genders);
        const random_id = `${random_collection}-${Math.random()
          .toString(36)
          .substring(2)}:${Math.random()
          .toString(36)
          .substring(7)}`;

        const random_photo_src = "";
        const random_photo_thumb_src = "";
        const random_photo_alt = `Trianon Co ${random_collection} ${random_name} color ${random_color}`;

        const random_created_byUser_Id = Math.floor(1000000 * Math.random());
        const random_created_date = new Date(
          +new Date() - Math.floor(Math.random() * 10000000000)
        );

        const random_updated_byUser_Id = Math.floor(1000000 * Math.random());
        const random_updated_date = new Date();

        const random_product = {
          id: random_id,
          name: random_name,
          gender: random_gender,

          photo_src: random_photo_src,
          photo_thumb_src: random_photo_thumb_src,
          photo_alt: random_photo_alt,

          created_date: random_created_date,
          created_byUser_Id: random_created_byUser_Id,
          updated_date: random_updated_date,
          updated_byUser_Id: random_updated_byUser_Id,

          price_co: random_price_co,
          price_usd: random_price_usd,

          color: random_color,
          collection: random_collection
        };

        this.RANDOM.products.push(random_product);
      }
    },

    doUpdateDB() {
      var db = firebase.firestore();
      this.RANDOM.products.map(randomProduct => {
        if (randomProduct.name) {
          console.warn(randomProduct);
          db.collection("products")
            .add(randomProduct)
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
          console.log(firebase);
        }
      });
    }
  },
  data() {
    return {
      RANDOM: {
        names: [
          "Billetera",
          "Cinturon",
          "Bolso",
          "Porta Documentos",
          "Monedero",
          "Maleta",
          ""
        ],
        sizes: ["Grande", "Pequeño", "Mediano"],
        genders: ["MALE", "FEMALE", ["MALE", "FEMALE"]],
        colors: [
          "Rojo",
          "Azul",
          "Verde",
          "Violeta",
          "Café",
          "Marrón",
          "Negro",
          "Blanco",
          "Cian"
        ],
        collections: [
          "Nuestra Tierra",
          "Entrecciato Parker",
          "Florencia",
          "Gucci",
          "King",
          "Napa",
          "Carnaza",
          "Cinveg",
          "Oxford",
          "Clark",
          "Prado",
          "Roma",
          "Vikingo"
        ],
        products: []
      }
    };
  }
};
</script>
<style lang="less">
div.admin-section.randomDB {
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #d0d0d0;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #d0d0d0;
    color: black;
  }
}
div.admin-section.randomDB {
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  h1 {
  }
  .button {
    width: fit-content;
    background-color: white;
    color: black;
    padding: 1em;
    border-radius: 1em;
  }
}
</style>