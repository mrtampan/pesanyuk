<!-- =========================================================================================
  File Name: DataSupplierThumbView.vue
  Description: Data List - Thumb View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="addstocks">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="cursor-pointer mr-4 mb-4">

            <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32">
              <span class="mr-2">Actions</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>

            <vs-dropdown-menu>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Delete</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Print</span>
                </span>
              </vs-dropdown-item>

            </vs-dropdown-menu>
          </vs-dropdown>

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-primary" @click.stop="addNewData()">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-white">Tambah Stok</span>
          </div>
        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ addstocks.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : addstocks.length }} of {{ queriedItems }}</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
          <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
          <vs-dropdown-menu>

            <vs-dropdown-item @click="itemsPerPage=4">
              <span>4</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=10">
              <span>10</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=15">
              <span>15</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=20">
              <span>20</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <template slot="thead">
        <vs-th sort-key="Tanggal">Tanggal Pembelian</vs-th>
        <vs-th sort-key="Order">No Order</vs-th>
        <vs-th sort-key="Supplier">Supplier</vs-th>
        <vs-th sort-key="Jumlah">Jumlah Pembelian</vs-th>
        <vs-th sort-key="Status">Status</vs-th>
        
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td>
              <!--- <p>{{ tr.tgl }}</p> -->
            </vs-td>

            <vs-td>
              <p>{{ tr.invoice_stock }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.supplier_name }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.total }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.status_stock }}</p>
            </vs-td>

              <vs-td class="whitespace-no-wrap">
              <vx-tooltip delay=".3s" text="Ubah Data">
              <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" class="ml-12" />
              </vx-tooltip>
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <vx-tooltip delay=".3s" text="Hapus Data">
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr)" />
                </vx-tooltip>
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <vx-tooltip delay=".3s" text="Hapus Data">
              <feather-icon icon="CheckSquareIcon" svgClasses="w-5 h-5 hover:text-success stroke-current" class="ml-2" @click.stop="checkData(tr)" />
              </vx-tooltip>
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <vx-tooltip delay=".3s" text="Detail Data">
              <feather-icon icon="EyeIcon" svgClasses="w-5 h-5 hover:text-dark stroke-current" class="ml-2" @click.stop="detailData(tr)" />
                </vx-tooltip>
              </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>

    <vs-popup class="crud uppercase" :title="titlePopup" :active.sync="popupActivo">
      <template>
        <h4 class="mb-5 font-bold">Informasi Tambah Stok</h4>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Pilih Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-select v-model="supplier" class="w-full select-large" >
              <vs-select-item :key="indexSuppliers" :value="itemSuppliers.id" :text="itemSuppliers.supplier" v-for="(itemSuppliers,indexSuppliers) in suppliers" class="w-full" />
            </vs-select>
            <span class="text-danger text-sm" v-show="errors.has('supplier')">{{ errors.first('supplier') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Catatan</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-textarea v-model="catatan" label="catatan" v-validate="'required'" width="auto" />
            <span class="text-danger text-sm" v-show="errors.has('catatan')">{{ errors.first('catatan') }}</span> <br>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Pilih Produk</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-select v-model="produk" class="w-full select-large" >
              <vs-select-item :key="indexitem" :value="item.id_product" :text="item.name_product" v-for="(item,indexitem) in products" class="w-full" />
            </vs-select>
            <span class="text-danger text-sm" v-show="errors.has('produk')">{{ errors.first('produk') }}</span>
            <vs-th sort-key="Jumlah">Jumlah Pembelian</vs-th>            
            <vs-th></vs-th>
            <vs-th sort-key="Beli">Harga Beli</vs-th>
            <vs-tr>
              <vs-td>
                <p><vs-input icon-pack="feather" icon="icon-box"  v-model="jumlah" class="mt-3 w-full" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="item-jumlah"/>
                <span class="text-danger text-sm" v-show="errors.has('item-jumlah')">{{ errors.first('item-jumlah') }}</span></p>
              </vs-td>
              <vs-td></vs-td>
              <vs-td>
                <p><vs-input icon-pack="feather" icon="icon-box"  v-model="beli" class="mt-3 w-full" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="beli" />
                <span class="text-danger text-sm" v-show="errors.has('beli')">{{ errors.first('beli') }}</span></p>
              </vs-td>
            </vs-tr>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" @click="submitData" >Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="popupActivo = false">Reset</vs-button>
          </div>
        </div>
      </template>
    </vs-popup>
  </div>
</template>

<script>
// import DataViewSidebarSupplier from './supplier/SupplierPopup.vue'
import moduleDataProduk from '@/store/produk/moduleProduk.js' //penamaan moduleDataSupplier diganti sesual menui
import moduleDataSupplier from '@/store/supplier/moduleSupplier.js' //penamaan moduleDataSupplier diganti sesual menui
import moduleDataAddStock from '@/store/tambahstok/moduleTambahStok.js' //penamaan moduleDataSupplier diganti sesual menui
import { Validator } from 'vee-validate'
import vSelect from 'vue-select'
const dict = {
  custom: {
    jumlah: {
      required: 'Wajib masukkan nama Supplier'
    },
    beli: {
      required: 'Wajib Masukkan Beli'
    },
    supplier: {
      required : 'Wajib masukkan Supplier'
    },
    catatan: {
      required : 'Wajib masukkan Catatan'
    },
    kirim:{
      required : 'Wajib di Centang'
    },
    produk: {
      required : 'Wajib masukkan Produk'
    }
  }
}

// register custom messages
Validator.localize('id', dict)


export default {
  data () {
    return {
      // data v-model form popup
      id : null,
      jumlah : '',
      beli : '',
      supplier: '',
      catatan : '',
      kirim : '',
      produk : '',
      // data v-model form popup

      activeConfirm: false,
      selected: [],
      popupActivo:false,
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      popupData: {},
      titlePopup: 'Tambah',
      title: 'Tambah Stok' // Ganti Sesuai jenis data CRUD
    }
  },
  components: {
    'v-select': vSelect
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    addstocks () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataAddStock.addstocks //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.addstocks.length //ganti suppliers dengan menu yang baru
    },
    products () { //ganti suppliers dengan menu yang baru
      if (!moduleDataProduk.isRegistered) {
        this.$store.registerModule('dataProduk', moduleDataProduk) //dataSupplier ganti dengan dataNamamenu
        moduleDataProduk.isRegistered = true
      }
      const id = {
        idBusiness : this.$store.state.AppActiveUser.id_business
      }
      this.$store.dispatch('dataProduk/fetchDataProdukItems', id)
      
      return this.$store.state.dataProduk.products //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    suppliers () {
      if (!moduleDataSupplier.isRegistered) {
        this.$store.registerModule('dataSupplier', moduleDataSupplier) //dataSupplier ganti dengan dataNamamenu
        moduleDataSupplier.isRegistered = true
      }
      const id = {
        idBusiness : this.$store.state.AppActiveUser.id_business
      }
      this.$store.dispatch('dataSupplier/fetchDataSupplierItems', id) //ganti suppliers dengan menu yang baru
      return this.$store.state.dataSupplier.suppliers //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    }
  },
  methods: {
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            jumlah : this.jumlah,
            beli : this.beli,
            supplier : this.supplier,
            catatan : this.catatan,
            kirim : this.kirim,
            produk : this.produk,
            id_business : this.$store.state.AppActiveUser.id_business
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataAddStock/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.addstockss} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataAddStock/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.addstockss} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          }
          this.$validator.reset()
          this.popupActivo = false
          this.popupActivos = false
        }
      })
    },

    initValues (data) {
      // alert(data.id)
      if (!data.id) {
        // data v-model form popup
        this.id = null
        this.jumlah = ''
        this.beli = ''
        this.supplier = ''
        this.catatan = ''
        this.kirim = ''
        this.produk = ''
        // data v-model form popup
      } else {
        // alert(data.id)
        // data v-model form popup
        this.id = data.id
        this.jumlah = data.jumlah
        this.beli = data.beli
        this.supplier = data.supplier
        this.catatan = data.catatan
        this.kirim = data.kirim
        this.produk = data.produk
        // data v-model form popup
      }
    },
    addNewData () {
      this.popupData = {}
      this.initValues(this.popupData)
      this.popupActivo = true
      this.titlePopup = `Tambah ${this.title} Baru`
    },
    addNewDatas () {
      this.popupDatas = {}
      this.initValues(this.popupDatas)
      this.popupActivos = true
      this.titlePopups = `Tambah ${this.title} Baru`
    },
    deleteData (data) {
      this.popupData = data
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Hapus',
        cancelText: 'Batal',
        title: `Hapus Data ${this.title}`,
        text: `Apakah Anda serius ingin menghapus data ${this.title} atas nama "${data.addstocks}"`, //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
        accept: this.acceptAlert
      })
    },
    acceptAlert () {
      this.$store.dispatch('dataAddStock/removeItem', this.popupData.id).catch(err => { console.error(err) })
      this.$vs.notify({
        color: 'success',
        title: `Hapus Data ${this.title}`,
        text: 'Data berhasil di hapus'
      })
    },
    editData (data) {
      this.initValues(data)
      this.titlePopup = `Edit ${this.title}`
      this.popupActivo = true
    }
  },
  created () {
    if (!moduleDataAddStock.isRegistered) {
      this.$store.registerModule('dataAddStock', moduleDataAddStock) //dataSupplier ganti dengan dataNamamenu
      moduleDataAddStock.isRegistered = true
    }
    const id = {
      idBusiness : this.$store.state.AppActiveUser.id_business
    }
    this.$store.dispatch('dataAddStock/fetchDataAddStockItems', id)
  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style lang="scss">
#data-list-thumb-view {
  .vs-con-table {

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap-reverse;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;


      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 10px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
            &.img-container {
              // width: 1rem;
              // background: #fff;

              span {
                display: flex;
                justify-content: flex-start;
              }

              .product-img {
                height: 110px;
              }
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
