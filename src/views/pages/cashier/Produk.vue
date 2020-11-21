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

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="products">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ADD NEW -->
         <vs-button @click="popupActive=true" class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-success">Impor Produk .xlsx</vs-button>
        
          <!-- ADD NEW -->
          <router-link :to="`/cashier/product/add`" class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base text-white bg-primary" >
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-white">Tambah Produk</span>
          </router-link>
        </div>


        <!-- ITEMS PER PAGE -->
          <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ products.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : products.length }} of {{ queriedItems }}</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
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
        <vs-th sort-key="name">Nama Produk</vs-th>
        <vs-th sort-key="category">Kategori</vs-th>
        <vs-th sort-key="jumlah">Jumlah</vs-th>
        <vs-th sort-key="price">Harga</vs-th>
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td class="img-container">
             <img :src="tr.img" class="product-img" />
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.name_product }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.category_name }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.jml }}</p>
            </vs-td>

            <vs-td>
              <vue-numeric currency="Rp. " readOnly separator="." :value="tr.product_price_normal" class="vs-textarea w-full"></vue-numeric>
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr)" />
            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>

    <vs-popup class="uppercase" title="Import Produk" :active.sync="popupActive">
      <template>
        <h3 class="my-3 text-center item-center font-bold">Impor Produk</h3>
            <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" >
                <tab-content title="Langkah 1" class="mb-3">
                    <!-- tab 1 content -->
                    <div class="vx-row">
                        <div class="vx-col md:w-full w-full mt-3">
                        <vx-card title="Langkah 1" class="mt-base">
                        <ul class="page-suggestions-list">
                        <li class="page-suggestion flex items-center mb-4">Gunakan file tersebut sebagai template untuk daftar produk yang akan di upload.</li>
                        <li class="page-suggestion flex items-center mb-4">Pastikan setelah diisi sesuai format, klik "save" untuk menyimpan perubahan.</li>
                        <vs-list>
                          <vs-list-header title="Perhatikan hal-hal berikut dalam mengisi template excel:"></vs-list-header>
                          <vs-list-item subtitle="Nama kolom dibaris pertama tidak boleh diganti."></vs-list-item>
                          <vs-list-item subtitle="Kolom berikut tidak boleh kosong: nama produk, kategori, merek, harga jual, harga beli."></vs-list-item>
                          <vs-list-item subtitle="Harga jual dan harga beli harus diisi dengan angka saja."></vs-list-item>
                          <vs-list-item subtitle="Harga jual harus lebih tinggi atau sama dengan harga beli."></vs-list-item>
                          </vs-list>
                    </ul>
                        </vx-card>
                        </div>
                    </div>
                </tab-content>

                <!-- tab 2 content -->
                <tab-content title="Langkah 2" class="mb-3">
                    <div class="vx-row">
                        <div class="vx-col md:w-full w-full">
                        <vx-card>
                        <div class="export-table">
                          <vs-table :data="product">
                            <template slot="header">
                              <vs-button class="w-full" @click="exportToExcel" @accept="exportToExcel">Download Template Excel</vs-button>
                            </template>
                          </vs-table>
                        </div>
                      </vx-card>
                        </div>
                    </div>
                </tab-content>

                <!-- tab 3 content -->
                <tab-content title="Langkah 3" class="mb-5">
                    <div class="vx-row">
                        <div class="vx-col md:w-full w-full">
                              <div class="excel-import">
                              <input type="file" ref="fileInput" class="hidden" accept=".xlsx, .xls" @change="handleClick">
                              <div @click="$refs.fileInput.click()" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover" class="px-8 py-16 cursor-pointer text-center border-2 border-dashed d-theme-border-grey-light d-theme-dark-bg text-xl">
                                <feather-icon icon="UploadCloudIcon" svgClasses="h-16 w-16 stroke-current text-grey" class="block" />
                                <span>Drop Excel File or </span>
                                <span class="font-medium text-primary" @click.stop="$refs.fileInput.click()">Browse</span>
                                <vs-button type="border" @click.stop="$refs.fileInput.click()">Browse</vs-button>
                              </div> 
                            </div>
                        </div> 
                    </div>
                </tab-content>
            </form-wizard>
      </template>
    </vs-popup>
  </div>
</template>

<script>
import moduleDataProduk from '@/store/produk/moduleProduk.js' //penamaan moduleDataSupplier diganti sesual menui
import { Validator } from 'vee-validate'
import vSelect from 'vue-select'
import XLSX from 'xlsx'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VueNumeric from 'vue-numeric'
const dict = {
  custom: {
    produk: {
      required: 'Wajib masukkan nama Produk'
    },
    kategori: {
      required: 'Wajib Pilih Kategori'
    },
    foto: {
      required: 'Wajib Masukkan Foto'
    },
    jumlah: {
      required : 'Wajib masukkan Jumlah'
    },
    deskripsi: {
      required : 'Wajib Masukkan Deskripsi'
    },
    harga: {
      required: 'Wajib Masukkan Harga'
    }
  }
}

// register custom messages
Validator.localize('id', dict)


export default {
  props: {
    onSuccess: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      excelData: {
        header: null,
        results: null,
        meta: null
      },
      id : null,
      produk: '',
      foto : '',
      kategori: {id: 1, label: 'Makanan'},
      jumlah : '',
      deskripsi : '',
      harga : '',
      diskon : '',
      // data v-model form popup
      popupActive: false,
      activeConfirm: false,      
      selected: [],
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      titlePopup: 'Tambah',
      title: 'PRODUK', // Ganti Sesuai jenis data CRUD
      fileName: '',
      formats:['xlsx', 'csv', 'txt'],
      cellAutoWidth: true,
      selectedFormat: 'xlsx',
      headerTitle: ['Nama Produk', 'Kategori', 'Unggulan', 'Jumlah', 'Harga'],
      headerVal: ['Nama Produk', 'Kategori', 'Unggulan', 'Jumlah', 'Harga'],
      product: [
        {
          'Nama Produk': 'Teh Tawar',
          'Kategori': 'Minuman',
          'Unggulan': '4',
          'Jumlah': '5',
          'Harga': '30000'
        },
        {
          'Nama Produk': 'Es Jeruk',
          'Kategori': 'Minuman',
          'Unggulan': '3',
          'Jumlah': '4',
          'Harga': '25000'
        },
        {
          'Nama Produk': 'Es Teler',
          'Kategori': 'Minuman',
          'Unggulan': '2',
          'Jumlah': '3',
          'Harga': '15000'
        },
        {
          'Nama Produk': 'Es Teh',
          'Kategori': 'Minuman',
          'Unggulan': '1',
          'Jumlah': '2',
          'Harga': '10000'
        }
      ],
      activePrompt: false
    }
  },
  components: {
    'v-select': vSelect,
    FormWizard,
    TabContent,
    'vue-numeric': VueNumeric
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    products () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataProduk.products //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.products.length //ganti suppliers dengan menu yang baru
    }
  },
  methods: {
    generateData ({ header, results, meta }) {
      this.excelData.header = header
      this.excelData.results = results
      this.excelData.meta = meta
      if (this.onSuccess) this.onSuccess(this.excelData)
    },
    getHeaderRow (sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C = undefined
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = `UNKNOWN ${  C}` // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    handleDragover (e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleDrop (e) {
      e.stopPropagation()
      e.preventDefault()
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'Only support uploading one file!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })
        return
      }
      const rawFile = files[0] // only use files[0]
      if (!this.isExcel(rawFile)) {
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'Only supports upload .xlsx, .xls, .csv suffix files',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })
        return false
      }
      this.uploadFile(rawFile)
    },
    readerData (rawFile) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          const meta = { sheetName: firstSheetName }
          this.generateData({ header, results, meta })
          resolve()
        }
        reader.readAsArrayBuffer(rawFile)
      })
    },
    handleClick (e) {
      const files = e.target.files
      const rawFile = files[0]
      if (!rawFile) return
      this.uploadFile(rawFile)
    },
    isExcel (file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    },
    uploadFile (file) {
      this.$refs['fileInput'].value = null // fix can't select the same excel
      this.readerData(file)
    },
    exportToExcel () {
      import('@/views/ui-elements/vendor/Export2Excel').then(excel => {
        const list = this.users
        const data = this.formatJson(this.headerVal, list)
        excel.export_json_to_excel({
          header: this.headerTitle,
          data,
          filename: this.fileName,
          autoWidth: this.cellAutoWidth,
          bookType: this.selectedFormat
        })
        this.clearFields()
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        // Add col name which needs to be translated
        // if (j === 'timestamp') {
        //   return parseTime(v[j])
        // } else {
        //   return v[j]
        // }

        return v[j]
      }))
    },
    clearFields () {
      this.filename = ''
      this.cellAutoWidth = true
      this.selectedFormat = 'xlsx'
    },
    successUpload () {
      this.$vs.notify({color:'success', title:'Upload Success', text:'Lorem ipsum dolor sit amet, consectetur'})
    },
    deleteData (data) {
      this.popupData = data
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Hapus',
        cancelText: 'Batal',
        title: `Hapus Data ${this.title}`,
        text: `Apakah Anda serius ingin menghapus data ${this.title} atas nama "${data.produk}"`, //data.supplier, supplier ini di ganti dengan salah satu variable di row table yang menunjukan nama
        accept: this.acceptAlert
      })
    },
    acceptAlert () {
      this.$store.dispatch('dataProduk/removeItem', this.popupData.id).catch(err => { console.error(err) })
      this.$vs.notify({
        color: 'success',
        title: `Hapus Data ${this.title}`,
        text: 'Data berhasil di hapus'
      })
    }
  },
  created () {
    if (!moduleDataProduk.isRegistered) {
      this.$store.registerModule('dataProduk', moduleDataProduk) //dataSupplier ganti dengan dataNamamenu
      moduleDataProduk.isRegistered = true
    }
    const id = {
      idBusiness : this.$store.state.AppActiveUser.id_business
    }
    this.$store.dispatch('dataProduk/fetchDataProdukItems', id)
    this.$store.dispatch('dataProduk/fetchProductCategory', id)
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
