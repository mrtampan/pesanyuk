<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="customers">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ACTION - DROPDOWN -->
          <vs-button @click="deleteMultiple()" v-if="selected.length > 0 || selected.length < 0"  class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-danger">Hapus Pelanggan</vs-button>

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-primary" @click.stop="addNewData()">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-white">Tambah Pelanggan</span>
          </div>
        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ customers.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : customers.length }} of {{ queriedItems }}</span>
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
        <vs-th sort-key="namapel">Nama Pelanggan</vs-th>
        <vs-th sort-key="hp">No HP</vs-th>
        <vs-th sort-key="email">Email</vs-th>
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <!--
            <vs-td class="img-container">
              <img :src="tr.foto" class="product-img" />
            </vs-td>
            -->
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.namapel }}</p>
            </vs-td>

            <vs-td>
              <p class="product-hp">{{ tr.hp }}</p>
            </vs-td>

            <vs-td>
              <p class="product-email">{{ tr.email }}</p>
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <feather-icon icon="EyeIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current mr-3" @click.stop="PopupDataDiri(tr)" />
              <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr)" />
            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>

    <vs-popup class="crud uppercase" title="Data Diri Pelanggan" :active.sync="popupActivos">
      <div class="vx-row">
        <div class="vx-col lg:w-full xl:w-full w-full">
          <vx-card :title="titlePopups" class="mb-base">
            <table>
              <tr>
                <td class="text-lg text-black font-semibold">No. Hp</td>
                <td  class="ml-12">{{ hp }}</td>
              </tr>
              <tr>
                <td class="text-lg text-black font-semibold">Email</td>
                <td class="ml-12">{{ email }}</td>
              </tr>
              <tr>
                <td class="text-lg text-black font-semibold">No. KTP</td>
                <td  class="ml-12">{{ ktp }}</td>
              </tr>
              <tr>
                <td class="text-lg text-black font-semibold">Alamat Pelanggan</td>
                <td  class="ml-12">{{ alamat }}</td>
              </tr>
              <tr>
                <td class="text-lg text-black font-semibold">Longitude</td>
                <td  class="ml-12">{{ longitude }}</td>
              </tr>
              <tr>
                <td class="text-lg text-black font-semibold">Latitude</td>
                <td  class="ml-12">{{ latitude }}</td>
              </tr>
              <tr>
                <td class="text-lg text-black font-semibold">Tanggal Lahir</td>
                <td  class="ml-12">{{ tl }}</td>
              </tr>
              <tr>
                <td class="text-lg text-black font-semibold">Catatan</td>
                <td  class="ml-12">{{ catatan }}</td>
              </tr>
            </table>
          </vx-card>
        </div>
      </div>
    </vs-popup>
    <vs-popup class="crud uppercase" :title="titlePopup" :active.sync="popupActivo">
      <template>
        <h4 class="mb-5 font-bold">Informasi Pelanggan</h4>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Nama Pelanggan</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="text" class="w-full" icon-pack="feather" icon="icon-user" name="namapel" icon-no-border v-model="namapel" v-validate="'required'"/>
            <span class="text-danger text-sm" v-show="errors.has('namapel')">{{ errors.first('namapel') }}</span>
          </div>
        </div>
        <!--
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Foto Pelanggan</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-upload action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" v-model="foto" name="foto" v-validate="'required'" />
            <span class="text-danger text-sm" v-show="errors.has('foto')">{{ errors.first('foto') }}</span>
          </div>
        </div>
        -->
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>No HP</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="number" class="w-full" icon-pack="feather" icon="icon-hp" name="hp" icon-no-border v-model="hp" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"/>
            <span class="text-danger text-sm" v-show="errors.has('hp')">{{ errors.first('hp') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>No KTP <sup>Tidak Wajib</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input icon-pack="feather"  v-model="ktp" name="ktp" icon="icon-briefcase" class="w-full" />
            <span class="text-danger text-sm" v-show="errors.has('ktp')">{{ errors.first('ktp') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Email Pelanggan</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input icon-pack="feather"  v-model="email" name="email" type="email" icon="icon-briefcase" class="w-full"  v-validate="'required|email'"/>
            <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Tanggal Lahir</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <datepicker placeholder="Tanggal Lahir" v-model="tl"></datepicker>
            <span class="text-danger text-sm" v-show="errors.has('tl')">{{ errors.first('tl') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Alamat Pelanggan</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-textarea icon-pack="feather"  v-model="alamat" name="alamat" icon="icon-briefcase"  class="w-full" v-validate="'required'" />
            <span class="text-danger text-sm" v-show="errors.has('alamat')">{{ errors.first('alamat') }}</span>
          </div>
        </div>
        <hr class="border-dashed border-grey">
        <div class="vx-row mb-6 mt-8">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Longitude</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full ">
            <vs-input icon-pack="feather" v-model="longitude" name="longitude" icon="icon-briefcase" class="w-full" />
            <span class="text-danger text-sm" v-show="errors.has('longitude')">{{ errors.first('longitude') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Latitude</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full ">
            <vs-input  class="w-full" icon-pack="feather" icon="icon-smartphone" name="Latitude" icon-no-border v-model="latitude"/>
            <span class="text-danger text-sm" v-show="errors.has('Latitude')">{{ errors.first('Latitude') }}</span>
          </div>
        </div>    

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Catatan</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-textarea icon-pack="feather" v-model="catatan" name="catatan" icon="icon-briefcase" class="w-full" />
            <span class="text-danger text-sm" v-show="errors.has('catatan')">{{ errors.first('catatan') }}</span>
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
import moduleDataCustomer from '@/store/pelanggan/modulePelanggan.js' //penamaan moduleDataSupplier diganti sesual menui
import { Validator } from 'vee-validate'
import Datepicker from 'vuejs-datepicker'


const dict = {
  custom: {
    tl: {
      required: 'Wajib masukkan Tanggal Lahir'
    },
    hp: {
      min: 'Pastikan Anda masukkan No HP yang benar'
    },
    email: {
      required : 'Wajib masukkan email Supplier',
      email : 'Pastikan Anda masukkan Email yang benar'
    },
    alamat: {
      required : 'Wajib masukkan Alamat'
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
      namapel : '',
      hp : '',
      ktp : '',
      email : '',
      alamat : '',
      longitude : '',
      latitude : '',
      tl : '',
      catatan : '',
      // data v-model form popup

      activeConfirm: false,
      selected: [],
      popupActivo:false,
      popupActivos:false,
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      popupData: {},
      titlePopup: 'Tambah',
      titlePopups: '',
      title: 'Pelanggan'// Ganti Sesuai jenis data CRUD
    }
  },
  components: {
    Datepicker
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    customers () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataCustomer.customers //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.customers.length //ganti suppliers dengan menu yang baru
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
        this.$store.dispatch('dataCustomer/removeItem', this.selected[index].id).catch(err => { console.error(err) })
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
            //foto : this.foto,
            namapel : this.namapel,
            hp : this.hp,
            ktp : this.ktp,
            email : this.email,
            alamat : this.alamat,
            longitude : this.longitude,
            latitude : this.latitude,
            tl : this.tl,
            catatan : this.catatan,
            id_business : this.$store.state.AppActiveUser.id_business
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataCustomer/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.customers} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataCustomer/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.customers} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
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
        this.namapel = ''
        this.hp = ''
        this.ktp = ''
        this.email = ''
        this.alamat = ''
        this.longitude = ''
        this.latitude = ''
        this.tl = ''
        this.catatan = ''
        // data v-model form popup
      } else {
        // alert(data.id)
        // data v-model form popup
        this.id = data.id
        //this.foto = data.foto
        this.namapel = data.namapel
        this.hp = data.hp
        this.ktp = data.ktp
        this.email = data.email
        this.alamat = data.alamat
        this.longitude = data.longitude
        this.latitude = data.latitude
        this.tl = data.tl
        this.catatan = data.catatan
        // data v-model form popup
      }
    },
    PopupDataDiri (data) {
      this.initValues(data)
      this.titlePopups = `${data.namapel}`
      this.hp = `${data.hp}`
      this.ktp = `${data.ktp}`
      this.email = `${data.email}`
      this.alamat = `${data.alamat}`
      this.longitude = `${data.longitude}`
      this.latitude = `${data.latitude}`
      this.tl = `${data.tl}`
      this.catatan = `${data.catatan}`
      this.popupActivos = true
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
        text: `Apakah Anda serius ingin menghapus data ${this.title} atas nama "${data.customers}"`, //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
        accept: this.acceptAlert
      })
    },
    acceptAlert () {
      this.$store.dispatch('dataCustomer/removeItem', this.popupData.id).catch(err => { console.error(err) })
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
    if (!moduleDataCustomer.isRegistered) {
      this.$store.registerModule('dataCustomer', moduleDataCustomer) //dataSupplier ganti dengan dataNamamenu
      moduleDataCustomer.isRegistered = true
    }
    const idbs = {
      idBusiness : this.$store.state.AppActiveUser.id_business
    }
    this.$store.dispatch('dataCustomer/fetchDataCustomerItems', idbs)
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
