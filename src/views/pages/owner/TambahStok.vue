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
        <vs-th sort-key="invoice_stock">No Order</vs-th>
        <vs-th sort-key="supplier_name">Supplier</vs-th>
        <vs-th sort-key="total">Jumlah</vs-th>
        <vs-th sort-key="status_stock">Status</vs-th>
        
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td>
              <p>{{ tr.tanggal_order }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.invoice_stock }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.supplier_name }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.jumlah }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.status_stock }}</p>
            </vs-td>

              <vs-td class="whitespace-no-wrap">
              <vx-tooltip delay=".3s" text="Ubah Produk">
              <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" class="ml-12" @click.stop="editData(tr)" />
              </vx-tooltip>
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <vx-tooltip delay=".3s" text="Batalkan Produk">
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-1" @click.stop="cancelData(tr)" />
                </vx-tooltip>
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <vx-tooltip delay=".3s" text="Konfirmasi Produk">
              <feather-icon icon="CheckSquareIcon" svgClasses="w-5 h-5 hover:text-success stroke-current" class="ml-1" @click.stop="checkData(tr)" />
              </vx-tooltip>
              </vs-td>
              <vs-td class="whitespace-no-wrap">
                <vx-tooltip delay=".3s" text="Detail Data">
              <feather-icon icon="EyeIcon" svgClasses="w-5 h-5 hover:text-dark stroke-current" class="ml-1" @click.stop="detailData(tr)" />
                </vx-tooltip>
              </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>

    <!-------- POP UP Konfirmasi Orderan ------->

    <vs-popup class="uppercase" title="Konfirmasi Perubahan" :active.sync="popupKonfimasi">
      <template>
            <vs-th>Nama Supplier</vs-th>
            <vs-th>Nama Produk</vs-th>
            <vs-th>Jumlah yang Diterima</vs-th>
            <vs-th>Harga Beli (Satuan)</vs-th>
            <vs-tr>
              <vs-td>
                <p class="ml-5">
                {{ supplier_name }}
                </p>
              </vs-td>
              <vs-td>
                <p class="ml-5">
                {{ name_product }}
                </p>
              </vs-td>
              <vs-td>
                <p class="ml-5"><vs-input icon-pack="feather" icon="icon-box"  v-model="jumlah" class="mt-3 w-full" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="item-jumlah"/>
                <span class="text-danger text-sm" v-show="errors.has('item-jumlah')">{{ errors.first('item-jumlah') }}</span></p>
              </vs-td>
              <vs-td>
                <p class="ml-5"><vs-input icon-pack="feather" icon="icon-box"  v-model="beli" class="mt-3 w-full" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="beli" />
                <span class="text-danger text-sm" v-show="errors.has('beli')">{{ errors.first('beli') }}</span></p>
              </vs-td>
            </vs-tr>
              <vs-button class="mt-4" @click="submitSelesai" color="success" type="filled">Konfirmasi</vs-button>
      </template>
    </vs-popup>

    <!-------- End POP UP Konfirmasi Orderan ------->

      <!-------- POP UP Konfirmasi Orderan ------->

    <vs-popup class="uppercase" title="Edit Stock Pembelian " :active.sync="popupEdit">
      <template>
        <!---- <h4 class="mb-5 font-bold">Informasi Tambah Stok</h4> --->
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full font-bold">
            <span>Nama Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
          <p class="font-bold">
          {{ supplier_name }}
          </p>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full font-bold">
            <span>Email Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
          <p class="font-bold">
          {{ supplier_email }}
          </p>
           
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full font-bold">
            <span>Phone Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
          <p class="font-bold mb-2">
          {{ supplier_phone }}
          </p>
          </div>
        </div>
        
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full font-bold">
            <span>Catatan</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-textarea v-model="catatan" label="catatan" v-validate="'required'" width="auto" />
            <span class="text-danger text-sm" v-show="errors.has('catatan')">{{ errors.first('catatan') }}</span> <br>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full font-bold">
            <span>Nama Produk</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
          <p class="font-bold mb-2">{{ name_product }}</p>
          
            <vs-th>Jumlah Pembelian</vs-th>            
            <vs-th></vs-th>
            <vs-th>Harga Beli (Satuan)</vs-th>
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
            <vs-button class="mr-3 mb-2" @click.stop="submitItemData" >Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="popupActivo = false">Reset</vs-button>
          </div>
        </div>
      </template>
    </vs-popup>
    <!-------- POP UP Detail Orderan ------->

    <vs-popup class="uppercase" title="Detail Pebelian Stock" :active.sync="popupDetail">
      <template>
        
        <vs-tr>
        <vs-td>Tanggal Orderan</vs-td>
        <vs-td>:</vs-td>
        <vs-td>{{ tanggal_order }}</vs-td>
        </vs-tr>
        <vs-tr>
        <vs-td>Nama Supplier</vs-td>
        <vs-td>:</vs-td>
        <vs-td>{{ supplier_name }}</vs-td>
        </vs-tr>
        <vs-tr>
        <vs-td>Supplier Phone</vs-td>
        <vs-td>:</vs-td>
        <vs-td>{{ supplier_phone }}</vs-td>
        </vs-tr>
        <vs-tr>
        <vs-td>Email Supplier</vs-td>
        <vs-td>:</vs-td>
        <vs-td>{{ supplier_email }}</vs-td>
        </vs-tr>
        <vs-tr>
        <vs-td>Nama Produck</vs-td>
        <vs-td>:</vs-td>
        <vs-td>{{ name_product }}</vs-td>
        </vs-tr>
        <vs-tr>
        <vs-td>Catatan</vs-td>
        <vs-td>:</vs-td>
        <vs-td>{{ catatan }}</vs-td>
        </vs-tr>
        <vs-tr>
        <vs-td>invoice Pembelian</vs-td>
        <vs-td>:</vs-td>
        <vs-td>{{ invoice_stock }}</vs-td>
        </vs-tr>
        <vs-tr>
        <vs-td>Status Pembelian</vs-td>
        <vs-td>:</vs-td>
        <vs-td>{{ status_stock }}</vs-td>
        </vs-tr>
        <vs-tr>
        <vs-td>Jumlah Barang</vs-td>
        <vs-td>:</vs-td>
        <vs-td>{{ jumlah }}</vs-td>
        </vs-tr>
        <vs-tr>
        <vs-td>Total Harga</vs-td>
        <vs-td>:</vs-td>
        <vs-td><vue-numeric currency="Rp. " readOnly separator="." :value="total_price" class="vs-textarea w-full"></vue-numeric></vs-td>
        </vs-tr>
      </template>
    </vs-popup>

    <!-------- End POP UP Konfirmasi Orderan ------->

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
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Pilih Produk</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-select v-model="produk" class="w-full select-large" >
              <vs-select-item :key="indexitem" :value="item.id_product" :text="item.name_product" v-for="(item,indexitem) in products" />
            </vs-select>
            <span class="text-danger text-sm" v-show="errors.has('produk')">{{ errors.first('produk') }}</span>
            <vs-th sort-key="Jumlah">Jumlah Pembelian</vs-th>            
            <vs-th></vs-th>
            <vs-th sort-key="Beli">Harga Beli (Satuan)</vs-th>
            <vs-tr>
              <vs-td>
                <vue-numeric currency="Rp. " separator="." v-model="jumlah" class="vs-inputx vs-input--input w-full normal" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="jumlah"></vue-numeric>
                
              </vs-td>
              <vs-td></vs-td>
              <vs-td>
              
                <vue-numeric currency="Rp. " separator="." v-model="beli" class="vs-inputx vs-input--input w-full normal" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="beli"></vue-numeric>
                
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
import VueNumeric from 'vue-numeric'
import vSelect from 'vue-select'
const dict = {
  custom: {
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
      produk : '',
      
      invoice_stock: '',
      status_stock: '',
      tanggal_order: '',
      price: '',
      total_price: '',
      supplier_name: '',
      supplier_phone: '',
      supplier_email: '',
      name_product: '',

      edit_supplier: '',
      edit_produk:'',
            
      // data v-model form popup

      activeConfirm: false,
      selected: [],
      popupActivo:false,
      popupKonfimasi:false,
      popupDetail:false,
      popupEdit:false,
      popupEditSupplier:false,
      popupEditProduck:false,
      itemsPerPage: 4,
      isMounted: false,
      popupData: {},
      titlePopup: 'Tambah',
      title: 'Tambah Stok' // Ganti Sesuai jenis data CRUD
    }
  },
  components: {
    'v-select': vSelect,
    'vue-numeric': VueNumeric
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
      
      return this.$store.state.dataProduk.products //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    suppliers () {
      return this.$store.state.dataSupplier.suppliers //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    }
  },
  methods: {
    submitSelesai () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            jumlah : this.jumlah,
            beli : this.beli
            // data v-model form popup
          }
          this.$store.dispatch('dataAddStock/updateItemSelesai', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
          this.$vs.notify({
            color: 'success',
            title: `Edit ${this.title} Berhasil`,
            text: `Data ${this.title}  berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
          })
          
          this.popupKonfimasi = false
        }
      })
    },
    submitItemData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            jumlah : this.jumlah,
            beli : this.beli,
            catatan : this.catatan
            // data v-model form popup
          }
          this.$store.dispatch('dataAddStock/updateItemData', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
          this.$vs.notify({
            color: 'success',
            title: `Edit ${this.title} Berhasil`,
            text: `Data ${this.title}  berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
          })
          
          this.popupEdit = false
        }
      })
    },
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
            produk : this.produk,
            id_business : this.$store.state.AppActiveUser.id_business
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataAddStock/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title}  berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataAddStock/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title}  berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
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
        this.produk = ''
        this.tanggal_order = ''
        this.invoice_stock = ''
        this.status_stock = ''
        this.total_price = ''
        this.supplier_name = ''
        this.supplier_phone = ''
        this.supplier_email = ''
        this.name_product = ''
      
        // data v-model form popup
      } else {
        // alert(data.id)
        // data v-model form popup
        this.id = data.id
        this.jumlah = data.jumlah
        this.beli = data.beli
        this.supplier = data.supplier
        this.catatan = data.catatan
        this.produk = data.produk
        this.tanggal_order = data.tanggal_order
        this.invoice_stock = data.invoice_stock
        this.status_stock = data.status_stock
        this.total_price = data.total_price
        this.supplier_name = data.supplier_name
        this.supplier_phone = data.supplier_phone
        this.supplier_email = data.supplier_email
        this.name_product = data.name_product
      
        // data v-model form popup
      }
    },
    addNewData () {
      this.popupData = {}
      this.initValues(this.popupData)
      this.popupActivo = true
      this.titlePopup = `Tambah ${this.title} Baru`
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
      this.popupEdit = true
    },
    checkData (data) {
      this.initValues(data)
      this.popupKonfimasi = true
    },
    detailData (data) {
      this.initValues(data)
      this.popupDetail = true
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
    this.$store.registerModule('dataProduk', moduleDataProduk) //dataSupplier ganti dengan dataNamamenu
    this.$store.dispatch('dataProduk/fetchDataProdukItems', id)
    this.$store.registerModule('dataSupplier', moduleDataSupplier) //dataSupplier ganti dengan dataNamamenu
    this.$store.dispatch('dataSupplier/fetchDataSupplierItems', id) //ganti suppliers dengan menu yang baru
        
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
