<!-- =========================================================================================
  File Name: DataSupplierThumbView.vue
  Description: Data List - Thumb View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="product-add" class="form-add-product">
    <vs-button to="/owner/product" class="mb-6" icon-pack="feather" icon="icon-chevron-left" color="dark" type="line" >Kembali ke Katalog</vs-button>
    <vx-card
    title="Tambah Produk">
        <div class="vx-row mb-6 mt-5">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Nama Produk</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="text" class="w-full" icon-pack="feather" icon="icon-archive" name="product" v-model="product" v-validate="'required'"/>
            <span class="text-danger text-sm" v-show="errors.has('product')">{{ errors.first('product') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Pilih Kategori</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <v-select v-model="category" class="w-full" :options="$store.state.dataProduk.categories" label="kategori" v-validate="'required'"  name="item-category"></v-select>
            <span class="text-danger text-sm" v-show="errors.has('item-category')">{{ errors.first('item-category') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Foto Produk</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-upload

              multiple
              text="Upload Multiple"
              action="https://jsonplaceholder.typicode.com/posts/"
              limit=5
              :show-upload-button="false"
              accept="image/png, image/jpeg, image/jpg"
              name="foto"
              v-validate="'required'" />
            <span class="text-danger text-sm" v-show="errors.has('foto')">{{ errors.first('foto') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Deskripsi</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-textarea width="300px" v-model="description" v-validate="'required'" class="w-full" name="item-deskripsi" />
            <span span class="text-danger text-sm" v-show="errors.has('item-deskripsi')">{{ errors.first('item-deskripsi') }}</span>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Varian Produk</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">

          <div class="varian"
            v-for="(varian, counter) in varians"
            v-bind:key="counter">

            <vx-card noShadow cardBorder remove-card-action class="mb-3" :title="`Varian Produk ${counter+1}`">
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Nama Varian <sup class="text-danger">*</sup></span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-input icon-pack="feather" icon="icon-tag" placeholder="Varian" v-model="varian.name" class="w-full"  name="item-price" v-validate="'required'" />
                  <span class="text-danger text-sm" v-show="errors.has('item-price')">{{ errors.first('item-price') }}</span>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>SKU</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-input icon-pack="feather" icon="icon-hash" placeholder="SKU12345" v-model="varian.sku" class="w-full"  name="item-price" />
                  <span class="text-danger text-sm" v-show="errors.has('item-price')">{{ errors.first('item-price') }}</span>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Harga Modal</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vue-numeric currency="Rp. " separator="." v-model="varian.hpp" class="vs-inputx vs-input--input w-full normal" name="item-price"></vue-numeric>
                  <span class="text-danger text-sm" v-show="errors.has('item-price')">{{ errors.first('item-price') }}</span>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Harga Jual <sup class="text-danger">*</sup></span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vue-numeric currency="Rp. " separator="." v-model="varian.price" class="vs-inputx vs-input--input w-full normal" name="item-price" v-validate="'required'"></vue-numeric>
                  <span class="text-danger text-sm" v-show="errors.has('item-price')">{{ errors.first('item-price') }}</span>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Harga Diskon <small class="text-grey text-xs">optional</small></span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vue-numeric currency="Rp. " separator="." v-model="varian.discount" class="vs-inputx vs-input--input w-full normal" name="item-diskon"></vue-numeric>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Gunakan Stok ?</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-switch color="success" v-model="varian.useStok">
                    <span slot="on">Ya</span>
                    <span slot="off">Tidak</span>
                  </vs-switch>
                  <vs-input icon-pack="feather" icon="icon-box" placeholder="Jumlah Stok" v-show="varian.useStok" v-model="varian.stock" class="w-full mt-3" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="item-jumlah" />
                  <span span class="text-danger text-sm" v-show="errors.has('item-jumlah')">{{ errors.first('item-jumlah') }}</span>
                </div>
              </div>
              <div class="vx-row ">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Gunakan Grosir ?</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-switch color="success" v-model="varian.useGrosir">
                    <span slot="on">Ya</span>
                    <span slot="off">Tidak</span>
                  </vs-switch>
                  <vue-numeric currency="Rp. " separator="." placeholder="Harga Grosir" v-show="varian.useGrosir" v-model="varian.wholesaler" class=" w-full mt-3 vs-inputx vs-input--input w-full normal" name="item-diskon"></vue-numeric>
                  <span span class="text-danger text-sm" v-show="errors.has('item-jumlah')">{{ errors.first('item-jumlah') }}</span>
                </div>
              </div>
            </vx-card>

          </div>
            <vs-button icon-pack="feather" icon="icon-plus" size="small" @click="addVarian">Tambah Varian</vs-button>
          </div>
        </div>
        <div class="vx-row mt-20">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" @click="submitData" >Tambah Produk</vs-button>
            <vs-button color="dark" type="flat" class="mb-2" @click="popupActivo = false">Batal</vs-button>
          </div>
        </div>
      </vx-card>
  </div>
</template>

<script>
import moduleDataProduk from '@/store/produk/moduleProduk.js'
// import { Validator } from 'vee-validate'
import vSelect from 'vue-select'
import VueNumeric from 'vue-numeric'

export default {
  data () {
    return {
      useStok : false,
      useGrosir : false,

      // data v-model form popup
      id : null,
      product: '',
      category : '',
      description : '',
      varians : [
        {
          name : '',
          sku : '',
          hpp : 'Rp. ',
          price : 'Rp. ',
          discount : 'Rp. ',
          stock : '',
          wholesaler : 'Rp. '
        }
      ]
      // data v-model form popup

    }
  },
  components: {
    'v-select': vSelect,
    'vue-numeric': VueNumeric
  },
  computed: {

  },
  methods: {
    addVarian () {
      this.varians.push({
        name : '',
        sku : '',
        hpp : '',
        price : '',
        discount : '',
        stock : '',
        wholesaler : ''
      })
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            produk : this.produk,
            foto : this.foto,
            kategori : this.kategori,
            jumlah : this.jumlah,
            deskripsi : this.deskripsi,
            harga : this.harga,
            diskon : this.diskon,
            id_business : this.$store.state.AppActiveUser.id_business
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataProduk/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.produks} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataProduk/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.produks} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          }
          this.$validator.reset()
          this.popupActivo = false
        }
      })
    },

    initValues (data) {
      if (!data.id) {
        // data v-model form popup
        this.id = null
        this.produk = ''
        this.foto = ''
        this.kategori = ''
        this.jumlah = ''
        this.deskripsi = ''
        this.harga = ''
        this.diskon = ''
        // data v-model form popup
      } else {
        // data v-model form popup
        this.id = data.id
        this.produk = data.produk
        this.foto = data.foto
        this.kategori = data.kategori
        this.jumlah = data.jumlah
        this.deskripsi = data.deskripsi
        this.harga = data.harga
        this.diskon = data.diskon
        // data v-model form popup
      }
    },
    addNewData () {

    }
  },
  created () {
    if (!moduleDataProduk.isRegistered) {
      this.$store.registerModule('dataProduk', moduleDataProduk) //dataSupplier ganti dengan dataNamamenu
      moduleDataProduk.isRegistered = true
    }
    const id = {
      idBusiness : this.$store.state.AppActiveUser.id_business
    }
    this.$store.dispatch('dataProduk/fetchProductCategory', id)
  }
}
</script>
