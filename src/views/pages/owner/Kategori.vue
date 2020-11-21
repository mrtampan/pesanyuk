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

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="category">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ACTION - DROPDOWN -->
          <vs-button @click="deleteMultiple()" v-if="selected.length > 0 || selected.length < 0" class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-danger">Hapus Kategori</vs-button>

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-primary" @click.stop="addNewData()">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-white">Tambah Kategori Produk</span>
          </div>
        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ category.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : category.length }} of {{ queriedItems }}</span>
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
        <vs-th>Nama Kategori</vs-th>
        <vs-th>Slug</vs-th>
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.kategori }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.slug }}</p>
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
        <h4 class="mb-5 font-bold">Informasi Kategori</h4>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Nama Kategori<sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input icon-pack="feather" icon="icon-briefcase"  class="w-full" v-model="kategori" name="itemkategori" v-validate="'required'" />
            <span class="text-danger text-sm" v-show="errors.has('itemkategori')">{{ errors.first('itemkategori') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Nama Slug</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input icon-pack="feather" v-model="slug" name="itemslug" icon="icon-hash" class="w-full" v-validate="'required'" />
            <span class="text-danger text-sm" v-show="errors.has('itemslug')">{{ errors.first('itemslug') }}</span>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" @click="submitData" >Simpan</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="popupActivo = false">Batal</vs-button>
          </div>
        </div>
      </template>
    </vs-popup>
  </div>
</template>

<script>
// import DataViewSidebarSupplier from './supplier/SupplierPopup.vue'
import moduleDataKategori from '@/store/kategori/moduleKategori.js' //penamaan moduleDataSupplier diganti sesual menui
import { Validator } from 'vee-validate'

const dict = {
  custom: {
    itemslug: {
      required: 'Wajib masukkan nama Slug'
    },
    itemkategori: {
      required: 'Wajib masukkan nama Kategori'
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
      slug : '',
      kategori : '',
      // data v-model form popup

      activeConfirm: false,
      selected: [],
      popupActivo:false,
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      popupData: {},
      titlePopup: 'Tambah',
      title: 'Kategori' // Ganti Sesuai jenis data CRUD
    }
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    category () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataKategori.category //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.category.length //ganti suppliers dengan menu yang baru
    }
  },
  methods: {
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            slug : this.slug,
            kategori : this.kategori,

            id_business : this.$store.state.AppActiveUser.id_business
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataKategori/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.kategori} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataKategori/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.kategori} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
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
        this.slug = ''
        this.kategori = ''
        // data v-model form popup
      } else {
        // data v-model form popup
        this.id = data.id
        this.slug = data.slug
        this.kategori = data.kategori
        // data v-model form popup
      }
    },
    addNewData () {
      this.popupData = {}
      this.initValues(this.popupData)
      this.popupActivo = true
      this.titlePopup = `TAMBAH ${this.title} BARU`
    },
    deleteData (data) {
      this.popupData = data
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Hapus',
        cancelText: 'Batal',
        title: `Hapus Data ${this.title}`,
        text: `Apakah Anda serius ingin menghapus data ${this.title} atas nama "${data.kategori}"`, //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
        accept: this.acceptAlert
      })
    },
    acceptAlert () {
      this.$store.dispatch('dataKategori/removeItem', this.popupData.id).catch(err => { console.error(err) })
      this.$vs.notify({
        color: 'success',
        title: `Hapus Data ${this.title}`,
        text: 'Data berhasil di hapus'
      })
    },
    editData (data) {
      this.initValues(data)
      this.titlePopup = `EDIT ${this.title}`
      this.popupActivo = true
    },
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
        this.$store.dispatch('dataKategori/removeItem', this.selected[index].id).catch(err => { console.error(err) })
      }
      this.$vs.notify({
        color: 'success',
        title: 'Hapus Data Supplier',
        text: 'Data berhasil di hapus'
      })
    }
  },
  created () {
    if (!moduleDataKategori.isRegistered) {
      this.$store.registerModule('dataKategori', moduleDataKategori) //dataSupplier ganti dengan dataNamamenu
      moduleDataKategori.isRegistered = true
    }
    const id = {
      idBusiness : this.$store.state.AppActiveUser.id_business
    }
    this.$store.dispatch('dataKategori/fetchProductCategory', id)
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
