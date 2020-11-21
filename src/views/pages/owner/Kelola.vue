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

    <vs-table ref="table" pagination :max-items="itemsPerPage" search :data="manages">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <vs-button @click="deleteMultiple()" v-if="selected.length > 0 || selected.length < 0" class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-danger">Hapus Kelola Kas</vs-button>
          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-primary" @click.stop="addNewData()">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-white">Tambah Kelola Kas</span>
          </div>
        </div>


        <!-- ITEMS PER PAGE -->
       <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ manages.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : manages.length }} of {{ queriedItems }}</span>
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
        <vs-th sort-key="catatan">Catatan</vs-th>
        <vs-th sort-key="tipe">Tipe Kas</vs-th>
        <vs-th sort-key="tanggal">Tanggal</vs-th>
        <vs-th sort-key="jumlah">Jumlah</vs-th>
        <vs-th sort-key="pegawai">Pegawai</vs-th>
        <vs-th sort-key="pegawai">Status</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.catatan }}</p>
            </vs-td>

            <vs-td>
              <vs-button
                v-if="tr.tipe == 'Masuk'"
                color="success"
                size="small"
                type="border"
              >
                {{ tr.tipe }}
              </vs-button>
              <vs-button
                v-if="tr.tipe == 'Keluar'"
                color="danger"
                size="small"
                type="border"
              >
                {{ tr.tipe }}
              </vs-button>
            </vs-td>

            <vs-td><p>{{ tr.tanggal }}</p></vs-td>

            <vs-td>
              <vue-numeric currency="Rp. " readOnly separator="." :value="tr.jumlah" class="vs-textarea w-full"></vue-numeric>
            </vs-td>
            <vs-td><p class="font-bold">{{ tr.karyawan }}</p></vs-td>
            <vs-td class="whitespace-no-wrap">
              <div v-if="tr.status=='Buka'">
                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr)" />
              </div>
              <vs-chip v-if="tr.status == 'Tutup'" color="success">Data Sudah Direkap</vs-chip>
            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>

    <vs-popup class="crud uppercase" :title="titlePopup" :active.sync="popupActivo">
      <template>
        <h4 class="mb-5 font-bold">Informasi Kelola Kas</h4>

        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Catatan <sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-textarea  class="w-full" icon-pack="feather" name="catatan" icon-no-border v-model="catatan" v-validate="'required'"/>
            <span class="text-danger text-sm" v-show="errors.has('catatan')">{{ errors.first('catatan') }}</span>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Tanggal</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <datepicker placeholder="Tanggal Lahir" v-model="tl"></datepicker>
            <span class="text-danger text-sm" v-show="errors.has('tl')">{{ errors.first('tl') }}</span>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Pegawai</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-select v-model="karyawans" class="w-full select-large" >
              <vs-select-item :key="indexKaryawans" :value="itemKaryawans.id" :text="itemKaryawans.karyawan" v-for="(itemKaryawans,indexKaryawans) in karyawans" class="w-full" v-validate="'required'" />
            </vs-select>
            <span class="text-danger text-sm" v-show="errors.has('karyawans')">{{ errors.first('karyawans') }}</span>
          </div>
        </div>

        <div class="vx-row my-3">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Tipe Kas <sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
          <ul class="centerx flex">
            <li class="mr-4">
              <vs-radio v-model="tipe" color="success" vs-value="Masuk">Masuk</vs-radio>
            </li>
            <li>
              <vs-radio v-model="tipe" color="success" vs-value="Keluar">Keluar</vs-radio>
            </li>
          </ul>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="mb-6 mt-12">Jumlah <sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
         <vue-numeric currency="Rp. " separator="." v-model="jumlah" class="vs-inputx vs-input--input normal"></vue-numeric>
        <span class="text-danger text-sm" v-show="errors.has('item-jumlah')">{{ errors.first('item-jumlah') }}</span>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="mb-6 mt-12">Status <sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
         <v-select v-model="status" :options="optionss" :dir="$vs.rtl ? 'rtl' : 'ltr'" />        
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
import moduledataManage from '@/store/kelola/moduleKelola.js' //penamaan moduleDataSupplier diganti sesual menui
import VueNumeric from 'vue-numeric'
import { Validator } from 'vee-validate'
import Datepicker from 'vuejs-datepicker' //(https://github.com/dwqs/v2-datepicker)
import vSelect from 'vue-select'
const dict = {
  custom: {
    tl: {
      required: 'Wajib masukkan Tanggal Lahir'
    },
    catatan: {
      required: 'Wajib masukkan Catatan'
    },
    tipe: {
      required : 'Wajib masukkan Tipe Kas'
    },
    jumlah: {
      required : 'Wajib masukkan Jumlah'
    }

  }
}

// register custom messages
Validator.localize('id', dict)


export default {
  data () {
    return {
      // data v-model form popup
      options: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: 'Hari Ini',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime())
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Kemarin',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - (3600 * 1000 * 24 * 1))
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Minggu Lalu',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - (3600 * 1000 * 24 * 7))
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Bulan Lalu',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - (3600 * 1000 * 24 * 30))
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '3 Bulan Lalu',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - (3600 * 1000 * 24 * 90))
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      id : null,
      catatan : '',
      tipe: null,
      jumlah : 'Rp. ',
      karyawan : '',
      optionss: ['buka', 'tutup'],
      selected: ['tutup'],
      // data v-model form popup

      activeConfirm: false,
      // selected: [],
      popupActivo:false,
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      popupData: {},
      titlePopup: 'Tambah',
      title: 'Kelola' // Ganti Sesuai jenis data CRUD
    }
  },
  components: {
    'v-select': vSelect,
    'vue-numeric': VueNumeric,
    Datepicker
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    manages () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataManage.manages //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.manages.length //ganti suppliers dengan menu yang baru
    }
  },
  props: {
    // readOnly: {
    //   type: Boolean,
    //   default: true,
    //   required: true
    // }
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
        this.$store.dispatch('dataManage/removeItem', this.selected[index].id).catch(err => { console.error(err) })
      }
      this.$vs.notify({
        color: 'success',
        title: 'Hapus Data Supplier',
        text: 'Data berhasil di hapus'
      })
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            catatan:this.catatan,
            tipe:this.tipe,
            jumlah: this.jumlah,
            karyawan: this.$store.state.AppActiveUser.name,
            id_business : this.$store.state.AppActiveUser.id_business,
            id_user : this.$store.state.AppActiveUser.id_user
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataManage/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.catatan} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataManage/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.catatan} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
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
        this.catatan = ''
        this.tipe = 'Masuk'
        this.jumlah = ''
        // data v-model form popup
      } else {
        // alert(JSON.stringify(data))
        // data v-model form popup
        this.id = data.id
        this.catatan = data.catatan
        this.tipe = data.tipe
        this.jumlah = data.jumlah
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
        text: `Apakah Anda serius ingin menghapus data ${this.title} atas nama "${data.catatan}"`, //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
        accept: this.acceptAlert
      })
    },
    acceptAlert () {
      this.$store.dispatch('dataManage/removeItem', this.popupData.id).catch(err => { console.error(err) })
      this.$vs.notify({
        color: 'success',
        title: `Hapus Data ${this.title}`,
        text: 'Data berhasil di hapus'
      })
    },
    editData (data) {
      this.titlePopup = `Edit ${this.title}`
      this.popupActivo = true
      this.initValues(data)
    }
  },
  created () {
    if (!moduledataManage.isRegistered) {
      this.$store.registerModule('dataManage', moduledataManage) //dataSupplier ganti dengan dataNamamenu
      moduledataManage.isRegistered = true
    }
    const id = {
      idBusiness : this.$store.state.AppActiveUser.id_business
    }
    this.$store.dispatch('dataManage/fetchDataManageItems', id)
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
    .vue-numeric {
    font-size: 1rem;
    color: inherit;
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    line-height: 1.6;
    resize: none;
    border-radius: 6px;
    border: 0 solid transparent;
    display: block;
    padding: 9px;
    color: rgba(0,0,0,.8);
    font-size: .8rem;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    background: transparent;
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
