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

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="commissions">

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
              <span class="ml-2 text-base text-white">Tambah Komisi</span>
          </div>
        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ commissions.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : commissions.length }} of {{ queriedItems }}</span>
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
        <vs-th>Gambar</vs-th>
        <vs-th>Nama Afiliator</vs-th>
        <vs-th>Kategori</vs-th>
        <vs-th>Jenis Komisi</vs-th>
        <vs-th>Kode Referral</vs-th>
        <vs-th>URL</vs-th>
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td class="img-container">
             <img :src="tr.gbr" class="product-img" />
            </vs-td>
            <vs-td>
              <p class="product-category">{{ tr.nama }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.category }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.kode }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.jenis }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.url }}</p>
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
        <h4 class="mb-5 font-bold">Informasi Komisi</h4>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Gambar<sup class="text-danger">*</sup></span>
            <img :src="dataImg" alt="img" class="responsive">
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
          <vs-upload @click="$refs.uploadImgInput.click()" @on-success="successUpload" />
          <vs-button @click="$refs.uploadImgInput.click()">Upload Image</vs-button>
          <vs-button type="flat" color="#999" @click="dataImg = null">Remove Image</vs-button>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Nama Affiliator<sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input icon-pack="feather" icon="icon-briefcase"  class="w-full" v-model="nama" name="nama" v-validate="'required'" />
            <span class="text-danger text-sm" v-show="errors.has('nama')">{{ errors.first('nama') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Kategori<sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <v-select v-model="category" :options="options" :dir="$vs.rtl ? 'rtl' : 'ltr'" name="category" v-validate="'required'" /><br>
            <span class="text-danger text-sm" v-show="errors.has('category')">{{ errors.first('category') }}</span>
          </div>
        </div>
        <div class="vx-row mb-1">
          <div class="vx-col sm:w-1/3 w-full mt-2">
            <span>Jenis Komisi</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full mt-2">
            <v-select v-model="jenis" :options="optionss" :dir="$vs.rtl ? 'rtl' : 'ltr'"  name="jenis" v-validate="'required'" /><br>
            <span class="text-danger text-sm" v-show="errors.has('jenis')">{{ errors.first('jenis') }}</span>
          </div>
        </div>
        
        <div class="vx-row mb-1">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Kode Referral</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full"  name="kode" icon-no-border v-model="kode" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"/>
            <span class="text-danger text-sm" v-show="errors.has('kode')">{{ errors.first('kode') }}</span>
          </div>
        </div>
        <div class="vx-row mb-1">
          <div class="vx-col sm:w-1/3 w-full">
            <span>URL</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full"  name="url" icon-no-border v-model="url" v-validate="'required'"/>
            <span class="text-danger text-sm" v-show="errors.has('url')">{{ errors.first('url') }}</span>
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
import moduleDataCommissions from '@/store/admin/affiliate/komisi/moduleKomisi.js' //penamaan moduleDataSupplier diganti sesual menui
import { Validator } from 'vee-validate'
import vSelect from 'vue-select'
const dict = {
  custom: {
    nama: {
      required: 'Wajib masukkan Nama Affiliator'
    },
    kode: {
      required: 'Wajib masukkan Kode'
    },
    url: {
      required: 'Wajib masukkan URL'
    }
  }
}

// register custom messages
Validator.localize('id', dict)


export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      // data v-model form popup
      id : null,
      nama: '',
      kode: '',
      url: '',
      dataImg: '',
      options: ['Minuman', 'Makanan', 'Fashion'],
      optionss: ['Per Penjualan', 'Per Lead', 'Per Klik'],
      category: '',
      jenis: '',
      // data v-model form popup
      selected: [],
      activeConfirm: false,
      popupActivo:false,
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      popupData: {},
      titlePopup: 'Tambah',
      title: 'Komisi'
    }
  },
  watch: {
    isSidebarActive (val) {
      if (!val) return
      if (Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      } else {
        const { id, img} = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.dataImg = img
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
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
    commissions () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataKomisi.commissions //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.commissions.length //ganti suppliers dengan menu yang baru
    }
  },
  methods: {
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            nama : this.nama,
            kode : this.kode,
            url : this.url,
            category : this.category,
            jenis : this.jenis,
            img: this.dataImg
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataKomisi/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.commissions} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataKomisi/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.commissions} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          }
          this.$validator.reset()
          this.popupActivo = false
        }
      })
    },
    updateCurrImg (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.dataImg = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    },
    initValues (data) {
      if (!data.id) {
        // data v-model form popup
        this.id = null
        this.nama = ''
        this.kode = ''
        this.url = ''
        this.category = ''
        this.jenis = ''
        this.dataImg = ''
        // data v-model form popup
      } else {
        // data v-model form popup
        this.id = data.id
        this.nama = data.nama
        this.kode = data.kode
        this.url = data.url
        this.category = data.category
        this.jenis = data.jenis
        this.dataImg = data.dataImg
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
        text: `Apakah Anda serius ingin menghapus data ${this.title} atas nama "${data.commissions}"`, //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
        accept: this.acceptAlert
      })
    },
    acceptAlert () {
      this.$store.dispatch('dataKomisi/removeItem', this.popupData.id).catch(err => { console.error(err) })
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
    }
  },
  created () {
    if (!moduleDataCommissions.isRegistered) {
      this.$store.registerModule('dataKomisi', moduleDataCommissions) //dataSupplier ganti dengan dataNamamenu
      moduleDataCommissions.isRegistered = true
    }
    this.$store.dispatch('dataKomisi/fetchDataCommissionItems')
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
