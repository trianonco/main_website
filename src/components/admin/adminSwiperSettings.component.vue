<template>
  <div class="admin-section swiperSettings">
    <div class="wrapper">
      <h1>Home Swiper Settings</h1>
      <div class="table">
        <!-- COL :: alt_description -->
        <div class="table-col">
          <div class="table-col-header">Description</div>
          <div class="table-col-rows">
            <div class="table-col-row" v-for="item of ITEMS" v-bind:key="item.orderId">
              <label v-if="!getIsEditable(item.orderId)">{{ item.alt_description }}</label>
              <input
                type="text"
                class="alt_description"
                v-model="item.alt_description"
                v-if="getIsEditable(item.orderId)"
              >
            </div>
          </div>
        </div>

        <!-- COL :: src_hd -->
        <div class="table-col">
          <div class="table-col-header">HD Images</div>
          <div class="table-col-rows">
            <div
              class="table-col-row"
              style="width:350px;padding:0em"
              v-for="item of ITEMS"
              v-bind:key="item.orderId"
            >
              <input
                v-if="getIsEditable(item.orderId)"
                type="file"
                class="src_hd"
                :ref="`InputFile-${item.id}`"
                @change="previewFiles(`InputFile-${item.id}`)"
              >
              <label
                v-if="!getIsEditable(item.orderId)"
                class="image"
              >{{ getCuttedText(item.src_hd) }}</label>
              <img class="image" :src="item.src_hd">
            </div>
          </div>
        </div>

        <!-- COL :: src_thumb -->
        <div class="table-col">
          <div class="table-col-header">Thumbs Image</div>
          <div class="table-col-rows">
            <div
              class="table-col-row"
              style="width:350px;padding:0em"
              v-for="item of ITEMS"
              v-bind:key="item.orderId"
            >
              <input
                v-if="getIsEditable(item.orderId)"
                type="file"
                class="src_thumb"
                :ref="`InputFile-${item.id}-thumb`"
                @change="previewFiles(`InputFile-${item.id}-thumb`)"
              >
              <label
                v-if="!getIsEditable(item.orderId)"
                class="image"
              >{{ getCuttedText(item.src_thumb) }}</label>
              <img class="image" :src="item.src_thumb">
            </div>
          </div>
        </div>

        <!-- COL :: edit_delete -->
        <div class="table-col">
          <div class="table-col-header">Edit</div>
          <div class="table-col-rows">
            <div class="table-col-row" v-for="item of ITEMS" v-bind:key="item.orderId">
              <i
                class="far fa-edit edit"
                @click="editRow(item.orderId)"
                v-if="!getIsEditable(item.orderId)"
              ></i>
              <i
                class="far fa-save edit"
                @click="editRow(item.orderId)"
                v-if="getIsEditable(item.orderId)"
              ></i>

              <i class="fas fa-trash-alt delete" @click="openModal(item.orderId)"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="button add" @click="addRow()">
        <i class="fas fa-plus-square"></i>
      </div>
    </div>

    <div class="modal" v-if="UX.isModalOpened">
      <div class="content">
        <h1>¿Seguro que desea borrar este elemento?</h1>
        <div class="buttons">
          <div class="button accept red" @click="deleteRow()">BORRAR</div>
          <div class="button decline" @click="closeModal()">CANCELAR</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "AdminSwiperSettingsComponent",
  methods: {
    previewFiles: function(refString) {
      console.log(refString);
      console.warn(this.$refs[refString][0].files[0]);
    },
    openModal(id) {
      this.UX.toDeleteOrderId = id;
      this.UX.isModalOpened = true;
    },
    closeModal() {
      this.UX.toDeleteOrderId = -1;
      this.UX.isModalOpened = false;
    },
    deleteRow() {
      this.ITEMS = this.ITEMS.filter(
        item => item.orderId !== this.UX.toDeleteOrderId
      );
      this.closeModal();
    },
    editRow(id) {
      if (this.UX.currentEditable === id) {
        this.UX.currentEditable = "";
      } else {
        this.UX.currentEditable = id;
      }
    },
    getCuttedText(txt) {
      if (txt && txt.length > 35) {
        return txt.substring(0, 23) + " ... " + txt.slice(-10);
      } else {
        return txt;
      }
    },
    getIsEditable(id) {
      if (this.UX.currentEditable === id) {
        return true;
      } else {
        return false;
      }
    },
    addRow() {
      if (this.ITEMS && this.ITEMS[this.ITEMS.length - 1].src_hd) {
        this.ITEMS.push({
          orderId: this.ITEMS.length + 1,
          alt_description: "Image Description",
          src_hd: "",
          src_thumb: ""
        });
      }
    }
  },
  mounted() {
    var db = firebase.firestore();
    db.collection("home-swiper-images")
      .get()
      .then(querySnapshot => {
        this.ITEMS = [];
        querySnapshot.forEach(doc => {
          const docData = doc.data();
          this.ITEMS.push({
            id: doc.id,
            orderId: docData.orderId,
            alt_description: docData.alt_description,
            src_hd: docData.src_hd,
            src_thumb: docData.src_thumb
          });
        });

        console.warn(this.ITEMS);

        this.ITEMS.sort((a, b) => a.orderId - b.orderId);
      });
  },
  data() {
    return {
      UX: {
        currentEditable: "",
        toDeleteOrderId: -1,
        isModalOpened: false
      },
      ITEMS: [{ orderId: 0 }]
    };
  }
};
</script>
<style lang="less">
div.admin-section.swiperSettings {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 1em;

  div.wrapper {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
  }

  div.table {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  div.table-col {
    text-align: center;

    box-sizing: border-box;
    padding: 0.5em;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    width: fit-content;
    max-width: 400px;
  }

  div.table-col-header {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    padding: 1em;
    border: 1px solid white;
    text-align: center;
    margin-bottom: 1em;
    box-sizing: border-box;
  }

  div.table-col-rows {
    width: 100%;
    display: block;
  }
  div.table-col-row {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    padding: 1em;
    border: 1px solid white;
    text-align: center;
    margin-bottom: 1em;
    box-sizing: border-box;
    height: 4em;
    overflow: hidden;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    input {
      background-color: rgba(0, 0, 0, 0);
      border: none;
      outline: none;
      color: white;
      width: fit-content;
      &.orderId {
        width: 40px;
      }
      &.alt_description {
        width: auto;
      }
    }
    label.image {
      text-align: left;
      padding-left: 1em;
      width: ~"calc(100% - 4em)";
    }
    img.image {
      height: 4em;
      width: 4em;
      object-fit: cover;
      object-position: center;
    }

    .edit {
      padding: 1em;
      padding-right: 0.5em;
    }
    .delete {
      padding: 1em;
      padding-left: 0.5em;
    }
  }

  div.button {
    display: block;
    padding: 0em;
    font-size: 2em;
    &.add {
      float: left;
      margin-left: 1em;
    }
  }

  div.modal {
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0px;
    left: 0px;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    div.content {
      display: block;
      width: 50vw;
      height: auto;
      background-color: white;
      color: black;
      padding: 1em;
      border-radius: 1.5em;

      h1 {
        font-size: 1.5em;
      }
      div.buttons {
        display: block;
      }
      div.button {
        display: inline-block;
        font-size: 1em;
        background-color: gray;
        color: white;
        padding: 1.5em;
        margin: 1em;
        border-radius: 1em;
        &.red {
          background-color: red;
        }
      }
    }
  }
}
</style>