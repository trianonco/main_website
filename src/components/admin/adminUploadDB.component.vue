<template>
  <div class="admin-section uploadDB">
    <div class="wrapper">
      <br>
      <h1>Home Upload DB</h1>

      <br>
      <br>

      <div class="container-responsive">
        <div class="row">
          <div class="col-md-12">
            <div
              id="drop"
              @drop="handleDrop"
              @dragover="handleDragover"
              @dragenter="handleDragover"
            >Drop Here</div>
          </div>
        </div>

        <br>
        <div class="buttons">
          <button type="button" class="btn btn-danger" @click="clearDB()">Limpiar Base de Datos</button>
          <button type="button" class="btn btn-success" @click="uploadDB()">Subir Base de Datos</button>
        </div>
        <br>

        <div class="row" v-if="!isClear">
          <div class="col-md-12">
            <hot-table
              :data="db.table"
              :colHeaders="db.headers"
              :rowHeaders="db.codes"
              :manualColumnResize="true"
              :manualRowResize="true"
              :dropdownMenu="true"
              :columnSorting="true"
              :filters="true"
              :colWidths=" 100"
              :width=" '100%'"
              :height=" 320"
              :rowHeights=" 23"
              :licenseKey="'non-commercial-and-evaluation'"
            ></hot-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { HotTable } from "@handsontable/vue";

/** DATA STATE **/
var state = {};
/** HELPERS **/

export default {
  name: "AdminUploadDBComponent",
  components: {
    HotTable
  },
  beforeMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!(user && user.email && user.email === "jl.mayorga236@gmail.com")) {
        this.$router.push("/");
      }
    });
  },
  data() {
    return {
      isClear: true,
      tickets: [{ name: "test" }],
      headers: ["Test header"],
      db: {
        codes: [],
        headers: [],
        table: []
      }
    };
  },
  methods: {
    clearDB() {
      this.isClear = true;
      this.tickets = [{ name: "test" }];
      this.headers = ["Test header"];
      this.db = {
        codes: [],
        headers: [],
        table: []
      };
    },

    uploadDB() {
      const dbAsObj = [];
      var db = firebase.firestore();
      var dbProducts = db.collection("products");

      firebase.auth().onAuthStateChanged(user => {
        if (user && user.email) {
          this.db.table.map(async (row, k) => {
            const CODE = row[0];
            const DESCRIPTION = row[1];
            const COLLECTION = row[2];

            const CATEGORY = row[1];
            const COLOR = row[3];
            const GENDER = CODE.toUpperCase()[0] === "D" ? "DAMA" : "HOMBRE";
            const SIZE_HEIGHT = row[4];
            const SIZE_WIDTH = row[5];
            const SIZE_DEPTH = row[6];
            const SIZES = {
              height: SIZE_HEIGHT + "",
              width: SIZE_WIDTH + "",
              depth: SIZE_DEPTH + ""
            };
            const SHORT_NAME = row[7];
            const CODEBARS = row[8];

            const PRICE_COP = row[9];
            const PRICE_USD = row[10];
            const PRICES = {
              COP: PRICE_COP,
              USD: PRICE_USD
            };

            this.getPhotosFromFirebaseStorage(CODE).then(PHOTOS => {
              const PRODUCT = {
                id: CODE,
                name: SHORT_NAME,
                description: DESCRIPTION,
                collection: COLLECTION,

                category: CATEGORY,
                color: COLOR,

                gender: GENDER,
                price: PRICES,
                codebar: CODEBARS,

                size: SIZES,
                photos: PHOTOS,
                meta: {}
              };

              const docRef = dbProducts.doc(PRODUCT.id);
              docRef.get().then(docSnapshot => {
                if (docSnapshot.exists) {
                  PRODUCT.meta["created"] = docSnapshot.data().meta.created;
                  PRODUCT.meta["updated"] = {
                    updatedBy: "",
                    updatedAt: ""
                  };
                  PRODUCT.meta.updated.updatedBy = user.email;
                  PRODUCT.meta.updated.updatedAt = new Date();

                  docRef
                    .set(PRODUCT)
                    .then(function() {
                      //console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                      //console.error("Error writing document: ", error);
                    });
                } else {
                  PRODUCT.meta["updated"] = {
                    updatedBy: "",
                    updatedAt: ""
                  };
                  PRODUCT.meta["created"] = {
                    createdBy: "",
                    createdAt: ""
                  };
                  PRODUCT.meta.created.createdBy = user.email;
                  PRODUCT.meta.created.createdAt = new Date();

                  docRef
                    .set(PRODUCT)
                    .then(function() {
                      //console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                      //console.error("Error writing document: ", error);
                    });
                }
              });
            });
          });
        }
      });
    },
    getPhotosFromFirebaseStorage(CODE) {
      return new Promise((resolve, reject) => {
        const PHOTOS = [];
        let counter = 0;
        for (let i = 1; i <= 5; i++) {
          const photo_alt = `Trianon Colombia. Productos en 100% Cuero. Producto ${CODE}`;
          const photoHD_url = `https://firebasestorage.googleapis.com/v0/b/trianonwebsite.appspot.com/o/PRODUCTOS%2FPHOTOS%2FHD%2F${CODE}-0${i}.jpg?alt=media`;
          const photoTHUMB_url = `https://firebasestorage.googleapis.com/v0/b/trianonwebsite.appspot.com/o/PRODUCTOS%2FPHOTOS%2FTHUMB%2F${CODE}-0${i}.jpg?alt=media`;
          PHOTOS.push({
            hd: {
              alt: photo_alt,
              src: photoHD_url
            },
            thumb: {
              alt: photo_alt,
              src: photoTHUMB_url
            }
          });
        }

        resolve(PHOTOS);
      });
    },
    get_header_row(sheet) {
      var headers = [],
        range = XLSX.utils.decode_range(sheet["!ref"]);
      var C,
        R = range.s.r; /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        var cell =
          sheet[
            XLSX.utils.encode_cell({ c: C, r: R })
          ]; /* find the cell in the first row */
        var hdr = "UNKNOWN " + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
    },
    fixdata(data) {
      var o = "",
        l = 0,
        w = 10240;
      for (; l < data.byteLength / w; ++l)
        o += String.fromCharCode.apply(
          null,
          new Uint8Array(data.slice(l * w, l * w + w))
        );
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    },
    workbook_to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetName]
        );
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      return result;
    },

    /** PARSING and DRAGDROP **/
    handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files,
        i,
        f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader(),
          name = f.name;
        reader.onload = e => {
          var results,
            data = e.target.result,
            fixedData = this.fixdata(data),
            workbook = XLSX.read(btoa(fixedData), { type: "base64" }),
            firstSheetName = workbook.SheetNames[0],
            worksheet = workbook.Sheets[firstSheetName];
          this.headers = this.get_header_row(worksheet);
          results = XLSX.utils.sheet_to_json(worksheet);
          this.tickets = results;

          const headersAsArray = Object.values(this.headers);
          const ticketsAsArray = this.tickets.map(ticket =>
            Object.values(ticket)
          );

          //const dbAsTable = [headersAsArray, ...ticketsAsArray];
          this.db.codes = this.tickets.map((ticket, index) => index);
          this.db.headers = this.headers;
          this.db.table = ticketsAsArray;
          console.log("db.headers");
          console.log(this.db.headers);
          this.isClear = false;
        };
        reader.readAsArrayBuffer(f);
      }
    },
    handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    }
  }
};
</script>
<style lang="less">
div.admin-section.uploadDB {
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

  div.buttons {
    width: 100%;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
}

#drop {
  border: 2px dashed #bbb;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  font: 20pt bold, "Vollkorn";
  color: #bbb;
}
table {
  color: black;
  background-color: white;
}

.handsontable {
  thead {
    th,
    td {
      padding: 5px 10px;
    }
  }

  td.contentCell {
    padding: 10px;
  }
}

td,
th {
  padding: 4px 4px !important;
  box-sizing: border-box !important;
}
.colHeaders {
  text-align: left;
}
</style>