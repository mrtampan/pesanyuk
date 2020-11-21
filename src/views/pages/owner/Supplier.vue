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

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="suppliers">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="cursor-pointer mr-4 mb-4" v-show="selected.length > 0 ">

            <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32">
              <span class="mr-2">Actions</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>

            <vs-dropdown-menu>

              <vs-dropdown-item>
                <span class="flex items-center" @click="deleteMultiple()">
                  <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Delete</span>
                </span>
              </vs-dropdown-item>

            </vs-dropdown-menu>
          </vs-dropdown>

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-primary" @click.stop="addNewData()">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-white">Tambah Supplier</span>
          </div>
        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ suppliers.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : suppliers.length }} of {{ queriedItems }}</span>
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
        <vs-th sort-key="supplier">Supplier</vs-th>
        <vs-th sort-key="hp">No HP</vs-th>
        <vs-th sort-key="email">Email</vs-th>
        <vs-th sort-key="alamat">Alamat</vs-th>
        <!-- <vs-th sort-key="kota">Kota</vs-th>
        <vs-th sort-key="kodepos">Kode Pos</vs-th> -->
        <vs-th sort-key="wakilsupplier">Nama</vs-th>
        <vs-th sort-key="hpsupplier">No. HP</vs-th>
        <!-- <vs-th sort-key="emailsupplier">Email Perwakilan Supplier</vs-th> -->
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.supplier }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.hp }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.email }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.alamat }},Kota/Kab {{ tr.kota }}, Kodepos {{ tr.kodepos }}</p>
            </vs-td>

            <!-- <vs-td>
              <p>{{ tr.kota }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.kodepos }}</p>
            </vs-td> -->

            <vs-td>
              <p>{{ tr.wakillsupplier }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.hpwakil }}</p>
            </vs-td>

            <!-- <vs-td>
              <p>{{ tr.emailsupplier }}</p>
            </vs-td> -->

            <vs-td class="whitespace-no-wrap">
              <feather-icon icon="EyeIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="showData(tr)" />
              <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" class="ml-2" @click.stop="editData(tr)" />
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr)" />
            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>

    <vs-popup class="crud uppercase" :title="titlePopup" :active.sync="popupActivo">
      <template>
        <h4 class="mb-5 font-bold">Informasi Supplier</h4>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Nama Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="text" class="w-full" icon-pack="feather" icon="icon-user" name="supplier" icon-no-border v-model="supplier" v-validate="'required'"/>
            <span class="text-danger text-sm" v-show="errors.has('supplier')">{{ errors.first('supplier') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>No. Telp Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="number" class="w-full" icon-pack="feather" icon="icon-smartphone" name="itemhp" icon-no-border v-model="hp" v-validate="'min:10'"/>
            <span class="text-danger text-sm" v-show="errors.has('itemhp')">{{ errors.first('itemhp') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Email Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" name="itememail" icon-no-border v-model="email" v-validate="'required|email'"/>
            <span class="text-danger text-sm" v-show="errors.has('itememail')">{{ errors.first('itememail') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Alamat Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="text" class="w-full" icon-pack="feather" icon="icon-map-pin" name="item-alamat" icon-no-border v-model="alamat"/>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Kota Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="text" class="w-full" icon-pack="feather" icon="icon-map" name="itemkota" icon-no-border v-model="kota" v-validate="'required'"/>
            <span class="text-danger text-sm" v-show="errors.has('itemkota')">{{ errors.first('itemkota') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Kode Pos Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="text" class="w-full" icon-pack="feather" icon="icon-hash" name="itemkodepos" icon-no-border v-model="kodepos" v-validate="'length:5'"/>
            <span class="text-danger text-sm" v-show="errors.has('itemkodepos')">{{ errors.first('itemkodepos') }}</span>
          </div>
        </div>
        <hr class="border-dashed border-grey">
        <p class="my-5 text-grey text-sm">Informasi perwakilan dari supplier yang bisa dihubungi.</p>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Wakil Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="text" class="w-full" icon-pack="feather" icon="icon-user" name="itemwakilsupplier" icon-no-border v-model="wakillsupplier" v-validate="'required'"/>
            <span class="text-danger text-sm" v-show="errors.has('itemwakilsupplier')">{{ errors.first('itemwakilsupplier') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Kontak Wakil Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="number" class="w-full" icon-pack="feather" icon="icon-smartphone" name="itemhpsupplier" icon-no-border v-model="hpwakil" v-validate="'min:10'"/>
            <span class="text-danger text-sm" v-show="errors.has('itemhpsupplier')">{{ errors.first('itemhpsupplier') }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Email Wakil Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" name="itememailsupplier" v-validate="'email'" icon-no-border v-model="emailwakilsupplier"/>
            <span class="text-danger text-sm" v-show="errors.has('itememailsupplier')">{{ errors.first('itememailsupplier') }}</span>
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

    <vs-popup class="crud uppercase" :title="titlePopup" :active.sync="popupView">
      <template>
        <h4 class="mb-5 font-bold">Informasi Supplier</h4>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-bold">Nama Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <span>: {{ supplier }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-bold">No. Telp Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <span>: {{ hp }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-bold">Email Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <span>: {{ email }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-bold">Alamat Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <span>: {{ alamat }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-bold">Kota Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <span>: {{ kota }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-bold">Kode Pos Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <span>: {{ kodepos }}</span>
          </div>
        </div>
        <hr class="border-dashed border-grey">
        <p class="my-5 text-grey text-sm">Informasi perwakilan dari supplier yang bisa dihubungi.</p>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-bold">Wakil Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <span>: {{ wakillsupplier }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-bold">Kontak Wakil Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <span>: {{ hpwakil }}</span>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-bold">Email Wakil Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <span>: {{ emailwakilsupplier }}</span>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button color="warning" type="border" class="mb-2" @click="popupView = false">Tutup</vs-button>
          </div>
        </div>
      </template>
    </vs-popup>
  </div>
</template>

<script>
// import DataViewSidebarSupplier from './supplier/SupplierPopup.vue'
import moduleDataSupplier from '@/store/supplier/moduleSupplier.js' //penamaan moduleDataSupplier diganti sesual menui
import { Validator } from 'vee-validate'

const dict = {
  custom: {
    supplier: {
      required: 'Wajib masukkan nama Supplier'
    },
    itemhp: {
      min: 'Pastikan Anda masukkan No HP yang benar'
    },
    itememail: {
      required : 'Wajib masukkan email Supplier',
      email : 'Pastikan Anda masukkan Email yang benar'
    },
    itemkota: {
      required : 'Wajib masukkan kota Supplier'
    },
    itemkodepos: {
      length : 'Pastikan Anda masukkan Kode Pos yang benar'
    },
    itemwakilsupplier: {
      required : 'Wajib masukkan Wakil Supplier Supplier'
    },
    itemhpsupplier: {
      min: 'Pastikan Anda masukkan No HP yang benar'
    },
    itememailsupplier: {
      email : 'Pastikan Anda masukkan Email yang benar'
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
      supplier : '',
      hp : '',
      email : '',
      alamat : '',
      kota : '',
      kodepos : '',
      wakillsupplier : '',
      hpwakil : '',
      emailwakilsupplier : '',
      // data v-model form popup

      activeConfirm: false,
      selected: [],
      popupActivo:false,
      popupView:false,
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      popupData: {},
      titlePopup: 'Tambah',
      title: 'SUPPLIER' // Ganti Sesuai jenis data CRUD
    }
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    suppliers () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataSupplier.suppliers //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.suppliers.length //ganti suppliers dengan menu yang baru
    }
  },
  methods: {
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            // data v-model form popup | tinggal di samakan dengan input form
            id : this.id,
            supplier : this.supplier,
            hp : this.hp,
            email : this.email,
            alamat : this.alamat,
            kota : this.kota,
            kodepos : this.kodepos,
            wakillsupplier : this.wakillsupplier,
            hpwakil : this.hpwakil,
            emailwakilsupplier : this.emailwakilsupplier,
            id_business : this.$store.state.AppActiveUser.id_business
            // data v-model form popup
          }

          if (this.id !== null && this.id >= 0) {
            this.$store.dispatch('dataSupplier/updateItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.supplier} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataSupplier/addItem', obj).catch(err => { console.error(err) }) //dataSupplier harus sama dengan registrasi module
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Berhasil`,
              text: `Data ${this.title} ${obj.supplier} berhasil ditambahkan` // obj.supplier ini bisa di ganti dengan variable di array obj di atas, wajarnya yang menginisialkan nama. contoh obj.nama
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
        this.supplier = ''
        this.hp = ''
        this.email = ''
        this.alamat = ''
        this.kota = ''
        this.kodepos = ''
        this.wakillsupplier = ''
        this.hpwakil = ''
        this.emailwakilsupplier = ''
        // data v-model form popup
      } else {
        // alert(data.id)
        // data v-model form popup
        this.id = data.id
        this.supplier = data.supplier
        this.hp = data.hp
        this.email = data.email
        this.alamat = data.alamat
        this.kota = data.kota
        this.kodepos = data.kodepos
        this.wakillsupplier = data.wakillsupplier
        this.hpwakil = data.hpwakil
        this.emailwakilsupplier = data.emailwakilsupplier
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
        text: `Apakah Anda serius ingin menghapus data ${this.title} atas nama "${data.supplier}"`, //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
        accept: this.acceptAlert
      })
    },
    acceptAlert () {
      this.$store.dispatch('dataSupplier/removeItem', this.popupData.id).catch(err => { console.error(err) })
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
    showData (data) {
      this.initValues(data)
      this.titlePopup = `DATA ${this.title}`
      this.popupView = true
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
        this.$store.dispatch('dataSupplier/removeItem', this.selected[index].id).catch(err => { console.error(err) })
      }
      this.$vs.notify({
        color: 'success',
        title: 'Hapus Data Supplier',
        text: 'Data berhasil di hapus'
      })
    }
  },
  created () {
    if (!moduleDataSupplier.isRegistered) {
      this.$store.registerModule('dataSupplier', moduleDataSupplier) //dataSupplier ganti dengan dataNamamenu
      moduleDataSupplier.isRegistered = true
    }
    const id = {
      idBusiness : this.$store.state.AppActiveUser.id_business
    }
    this.$store.dispatch('dataSupplier/fetchDataSupplierItems', id)
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
