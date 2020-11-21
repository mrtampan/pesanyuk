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

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="cashs">

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
              <span class="ml-2 text-base text-white">Tambah Kas</span>
          </div>
        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ cashs.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : cashs.length }} of {{ queriedItems }}</span>
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
        <!-- 
        <vs-th>Foto Pelanggan</vs-th>
        -->
        <vs-th sort-key="namapel">Tanggal</vs-th>
        <vs-th sort-key="namapel">Modal Awal</vs-th>
        <vs-th sort-key="hp">Pemasukan</vs-th>
        <vs-th sort-key="email">Pengeluaran</vs-th>
        <vs-th sort-key="email">Jumlah Akhir</vs-th>
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.tgl }}</p>
            </vs-td>

            <vs-td>
              <vue-numeric currency="Rp. " readOnly separator="." :value="tr.modal" class="vs-textarea w-full"></vue-numeric>
            </vs-td>

            <vs-td>
              <vue-numeric currency="Rp. " readOnly separator="." :value="tr.pemasukan" class="vs-textarea w-full"></vue-numeric>
            </vs-td>

            <vs-td>
              <vue-numeric currency="Rp. " readOnly separator="." :value="tr.pengeluaran" class="vs-textarea w-full"></vue-numeric>
            </vs-td>

            <vs-td>
              <vue-numeric currency="Rp. " readOnly separator="." :value="tr.jmla" class="vs-textarea w-full"></vue-numeric>
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr)" />
            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>

    <vs-popup class="crud uppercase" :title="titlePopup" :active.sync="popupActivo">
      <template>
        <h4 class="mb-5 font-bold">Informasi Kas</h4>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Tanggal</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <flat-pickr :config="configdateTimePicker" v-model="tgl" placeholder="Tanggal" name="tgl" />
            <span class="text-danger text-sm" v-show="errors.has('tgl')">{{ errors.first('tgl') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Modal</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vue-numeric currency="Rp. " separator="." v-model="modal" class="vs-inputx vs-input--input normal" v-validate="'required'" name="modal"></vue-numeric>
            <span class="text-danger text-sm" v-show="errors.has('modal')">{{ errors.first('modal') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Pemasukan</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vue-numeric currency="Rp. " separator="." v-model="pemasukan" class="vs-inputx vs-input--input normal" v-validate="'required'" name="pemasukan"></vue-numeric>
            <span class="text-danger text-sm" v-show="errors.has('pemasukan')">{{ errors.first('pemasukan') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Pengeluaran</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vue-numeric currency="Rp. " separator="." v-model="pengeluaran" class="vs-inputx vs-input--input normal" v-validate="'required'" name="pengeluaran"></vue-numeric>
            <span class="text-danger text-sm" v-show="errors.has('pengeluaran')">{{ errors.first('pengeluaran') }}</span>
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
import moduleDataCash from '@/store/cashier/kas/moduleKas.js' //penamaan moduleDataSupplier diganti sesual menui
import { Validator } from 'vee-validate'
import Datepicker from 'vuejs-datepicker'
import VueNumeric from 'vue-numeric'

const dict = {
  custom: {
    modal: {
      required: 'Wajib masukkan Modal'
    },
    pemasukan: {
      required: 'Wajib Masukkan Pemasukan'
    },
    pengeluaran: {
      required : 'Wajib masukkan Pengeluaran'
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
      //foto : '',
      modal : 'Rp. ',
      pemasukan : 'Rp. ',
      pengeluaran : 'Rp. ',
      jmla : 'Rp.',

      // data v-model form popup

      activeConfirm: false,
      selected: [],
      popupActivo:false,
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      popupData: {},
      titlePopup: 'Tambah',
      title: 'Kas' // Ganti Sesuai jenis data CRUD
    }
  },
  components: {
    Datepicker,
    'vue-numeric': VueNumeric
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    cashs () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataCash.cashs //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.cashs.length //ganti suppliers dengan menu yang baru
    }
  },
  methods: {
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            //foto : this.foto,
            
            id_business : this.$store.state.AppActiveUser.id_business
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataCash/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.cashs} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataCash/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.cashs} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          }
          this.$validator.reset()
          this.popupActivo = false
        }
      })
    },

    initValues (data) {
      // alert(data.id)
      if (!data.id) {
        // data v-model form popup
        this.id = null
        //this.foto = ''
        this.modal = ''
        this.pemasukan = ''
        this.pengeluaran = ''
        this.jmla = ''
        // data v-model form popup
      } else {
        // alert(data.id)
        // data v-model form popup
        this.id = data.id
        //this.foto = data.foto
        this.modal = data.modal
        this.pemasukan = data.pemasukan
        this.pengeluaran = data.pengeluaran
        this.jmla = data.jmla
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
        text: `Apakah Anda serius ingin menghapus data ${this.title} atas nama "${data.cashs}"`, //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
        accept: this.acceptAlert
      })
    },
    acceptAlert () {
      this.$store.dispatch('dataCash/removeItem', this.popupData.id).catch(err => { console.error(err) })
      this.$vs.notify({
        color: 'success',
        title: `Hapus Data response ${this.title}`,
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
    if (!moduleDataCash.isRegistered) {
      this.$store.registerModule('dataCash', moduleDataCash) //dataSupplier ganti dengan dataNamamenu
      moduleDataCash.isRegistered = true
    }
    const idbs = {
      idBusiness : this.$store.state.AppActiveUser.id_business
    }
    this.$store.dispatch('dataCash/fetchdataCashItems', idbs)
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
