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

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="logs">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ACTION - DROPDOWN -->
          <vs-button @click="deleteMultiple()" v-if="selected.length > 0 || selected.length < 0" class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-danger">Hapus Log Update</vs-button>

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-primary" @click.stop="addNewData()">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-white">Tambah Log Update</span>
          </div>
        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ logs.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : logs.length }} of {{ queriedItems }}</span>
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
        <vs-th sort-key="fitur">Nama Fitur</vs-th>
        <vs-th sort-key="desk">Deskripsi</vs-th>
        <vs-th sort-key="url">URL</vs-th>
        <vs-th sort-key="url">Tanggal</vs-th>
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.nama }}</p>
            </vs-td>

            <vs-td>
              <p class="product-hp">{{ tr.deskripsi }}</p>
            </vs-td>

            <vs-td>
              <p class="product-email">{{ tr.url }}</p>
            </vs-td>

            <vs-td>
              <p class="product-email">{{ tr.tgl }}</p>
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
        <h4 class="mb-5 font-bold">Informasi Log Update</h4>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Nama Fitur</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="text" class="w-full" icon-pack="feather" icon="icon-user" name="nama" icon-no-border v-model="nama" v-validate="'required'"/>
            <span class="text-danger text-sm" v-show="errors.has('nama')">{{ errors.first('nama') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Deskripsi</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-hp" name="deskripsi" icon-no-border v-model="deskripsi"/>
            <span class="text-danger text-sm" v-show="errors.has('deskripsi')">{{ errors.first('deskripsi') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>URL</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-hp" name="url" icon-no-border v-model="url"/>
            <span class="text-danger text-sm" v-show="errors.has('url')">{{ errors.first('url') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Tanggal Update</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <flat-pickr :config="configdateTimePicker" v-model="tgl" placeholder="Tanggal Update" />
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
import moduleDataLogUpdate from '@/store/admin/logUpdate/moduleLog.js' //penamaan moduleDataSupplier diganti sesual menui
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import { Validator } from 'vee-validate'
const dict = {
  custom: {
    nama: {
      required: 'Wajib masukkan Nama'
    },
    deskripsi: {
      min: 'Wajib Masukkan Deskripsi'
    },
    url: {
      required : 'Wajib masukkan email url'
    },
    tgl: {
      required : 'Wajib masukkan Tanggal'
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
      nama : '',
      deskripsi : '',
      url : null,
      tgl: '',
      configdateTimePicker: {
        enableTime: true,
        dateFormat: 'd-m-Y H:i'
      },
      // data v-model form popup

      activeConfirm: false,
      selected: [],
      popupActivo:false,
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      popupData: {},
      titlePopup: 'Tambah',
      title: 'Log Update' // Ganti Sesuai jenis data CRUD
    }
  },
  components: {
    flatPickr
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    logs () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataLog.logs //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.logs.length //ganti suppliers dengan menu yang baru
    }
  },
  methods: {
    deleteMultiple () {
      if (this.selected.length < 1) {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          cancelText: 'Batal',
          title: 'Data Belum Dipilih',
          text: 'Anda belum memilih data untuk di hapus, Klik kotak checklist data yang ingin Anda hapus'
        })
      } else {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          acceptText: 'Hapus',
          cancelText: 'Batal',
          title: 'Hapus Beberapa Data',
          text: 'Apakah Anda serius ingin menghapus beberapa data berikut', //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
          accept: this.acceptMultipleDelete
        })
      }
    },
    acceptMultipleDelete () {
      for (let index = 0; index < this.selected.length; index++) {
        this.$store.dispatch('dataLog/removeItem', this.selected[index].id).catch(err => { console.error(err) })
      }
      this.$vs.notify({
        color: 'success',
        title: 'Hapus Data Log Update',
        text: 'Data berhasil di hapus'
      })
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            //foto : this.foto,
            nama : this.nama,
            deskripsi : this.deskripsi,
            url : this.url,
            tgl: this.tgl
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataLog/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataLog/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
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
        this.nama = ''
        this.deskripsi = ''
        this.url = ''
        this.tgl = ''
        // data v-model form popup
      } else {
        // alert(data.id)
        // data v-model form popup
        this.id = data.id
        //this.foto = data.foto
        this.nama = data.nama 
        this.deskripsi = data.deskripsi
        this.url = data.url
        this.tgl = data.tgl
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
        text: `Apakah Anda serius ingin menghapus data ${this.title} atas nama ""`, //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
        accept: this.acceptAlert
      })
    },
    acceptAlert () {
      this.$store.dispatch('dataLog/removeItem', this.popupData.id).catch(err => { console.error(err) })
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
    if (!moduleDataLogUpdate.isRegistered) {
      this.$store.registerModule('dataLog', moduleDataLogUpdate) //dataSupplier ganti dengan dataNamamenu
      moduleDataLogUpdate.isRegistered = true
    }
    this.$store.dispatch('dataLog/fetchDataLogItems')
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
