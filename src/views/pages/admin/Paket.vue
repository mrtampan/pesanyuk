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

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="packets">

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
              <span class="ml-2 text-base text-white">Tambah Paket</span>
          </div>

          <!-- Lihat Tampilan Setting -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-primary" @click.stop="LihatTampilanPaket">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-white">Lihat Tampilan Setting</span>
          </div>
        

        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ packets.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : packets.length }} of {{ queriedItems }}</span>
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
        <vs-th>Nama Paket</vs-th>
        <vs-th>Harga Paket</vs-th>
        <vs-th>Diskon</vs-th>
        <vs-th>Waktu Paket</vs-th>
        <vs-th>Status</vs-th>
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <p class="product-category">{{ tr.nama }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.harga }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.diskon }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.waktu }} {{ tr.type_waktu }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.status }}</p>
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
        <h4 class="mb-5 font-bold">Informasi Paket</h4>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Nama Paket<sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input icon-pack="feather" icon="icon-briefcase"  class="w-full" v-model="nama" name="nama" v-validate="'required'" />
            <span class="text-danger text-sm" v-show="errors.has('nama')">{{ errors.first('nama') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Harga Paket<sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input icon-pack="feather" v-model="harga" name="harga" icon="icon-hash" class="w-full mb-8" v-validate="'required'" />
            <span class="text-danger text-sm" v-show="errors.has('harga')">{{ errors.first('harga') }}</span>
          </div>
          <div class="vx-col sm:w-1/3 w-full">
            <span>Diskon<sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input icon-pack="feather" icon="icon-briefcase"  class="w-full" v-model="diskon" name="diskon" v-validate="'required'" />
            <span class="text-danger text-sm" v-show="errors.has('diskon')">{{ errors.first('diskon') }}</span>
          </div>
        </div>
        <div class="vx-row mb-1">
          <div class="vx-col sm:w-1/3 w-full mt-2">
            <span>Waktu</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full mt-2">
          <vs-row>
            <vs-col vs-justify="center" vs-align="center" vs-w="4">
            <vs-input icon-pack="feather" icon="icon-hash" v-model="waktu" class="w-full"/>   
            </vs-col>
            <vs-col vs-justify="center" vs-align="center" vs-w="8">
              <v-select placeholder="Type Waktu" class="ml-1" v-model="type_waktu" :options="options" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>
            </vs-col>
          </vs-row>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full mt-2">
            <span>Status</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full mt-2">
            <ul class="centerx flex">
            <li class="mr-4">
              <vs-radio v-model="status" color="success" vs-value="on">On</vs-radio>
            </li>
            <li>
              <vs-radio v-model="status" color="danger" vs-value="off">Off</vs-radio>
            </li>
          </ul>
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
    
    <view-paket :isPopupActive="viewDataPaket" @closePopup="togglePopup"/>

  </div>
</template>

<script>
import moduleDataPacket from '@/store/admin/paket/modulePaket.js' //penamaan moduleDataSupplier diganti sesual menui
import { Validator } from 'vee-validate'
import vSelect from 'vue-select'
import ViewPaket from '@/views/pages/admin/detail/detail-paket-setting.vue'

const dict = {
  custom: {
    nama: {
      required: 'Wajib masukkan Nama Paket'
    },
    harga: {
      required: 'Wajib masukkan Harga Paket'
    },
    diskon: {
      required: 'Wajib masukkan Jumlah Diskon'
    },
    waktu: {
      required: 'Wajib masukkan Berapa Persen'
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
      nama: '',
      diskon: '',
      harga: '',
      options: ['Bulan', 'Minggu', 'Hari'],
      waktu: '',
      type_waktu: '',
      status: '',

      // data v-model form popup
      selected: [],
      activeConfirm: false,
      popupActivo:false,
      itemsPerPage: 4,
      isMounted: false,
      
      viewDataPaket: false,
      popupData: {},
      titlePopup: 'Tambah',
      title: 'Paket'
    }
  },
  components: {
    'v-select': vSelect,
    
    ViewPaket
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    packets () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataPaket.packets //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.packets.length //ganti suppliers dengan menu yang baru
    }
  },
  methods: {
    LihatTampilanPaket () {
      this.togglePopup(true)
    },
    
    togglePopup (val = false) {
      this.viewDataPaket = val
    },
    
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            nama : this.nama,
            diskon: this.diskon,
            harga: this.harga,
            waktu: this.waktu,
            type_waktu : this.type_waktu,
            status : this.status
            
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataPaket/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.packets} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataPaket/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.packets} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
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
        this.nama = ''
        this.diskon = ''
        this.harga = ''
        this.waktu = ''
        this.type_waktu = ''
        this.status = ''
        // data v-model form popup
      } else {
        // data v-model form popup
        this.id = data.id
        this.nama = data.nama
        this.diskon = data.diskon
        this.harga = data.harga
        this.waktu = data.waktu
        this.type_waktu = data.type_waktu
        this.status = data.status
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
        text: `Apakah Anda serius ingin menghapus data ${this.title} atas nama "${data.packets}"`, //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
        accept: this.acceptAlert
      })
    },
    acceptAlert () {
      this.$store.dispatch('dataPaket/removeItem', this.popupData.id).catch(err => { console.error(err) })
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
    if (!moduleDataPacket.isRegistered) {
      this.$store.registerModule('dataPaket', moduleDataPacket) //dataSupplier ganti dengan dataNamamenu
      moduleDataPacket.isRegistered = true
    }
    this.$store.dispatch('dataPaket/fetchDataPacketItems')
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
