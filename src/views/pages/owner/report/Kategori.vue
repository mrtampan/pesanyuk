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

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="categorys">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ADD NEW -->
          <vs-button class="p-3 mb-4 mr-4 rounded-lg cursor-pointer shadow-md flex items-center justify-between text-lg font-medium text-base" icon-pack="feather" :to="`/owner/report`" icon="icon-arrow-left" icon-after>Kembali</vs-button>

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
        </div>


        <!-- ITEMS PER PAGE -->
       <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ categorys.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : categorys.length }} of {{ queriedItems }}</span>
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
        <vs-th sort-key="nama">Kategori</vs-th>
        <vs-th sort-key="nama">Slug</vs-th>
        <vs-th sort-key="jumlah">Jumlah</vs-th>
        <vs-th >Action</vs-th>
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

            <vs-td>
              <p class="product-category">{{ tr.jumlah }}</p>
            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>
  </div>
</template>

<script>
// import DataViewSidebarSupplier from './supplier/SupplierPopup.vue'
import moduledataLaporanKategori from '@/store/laporan/details/kategori/moduleLaporanKategori.js' //penamaan moduleDataSupplier diganti sesual menui
import vSelect from 'vue-select'

export default {
  data () {
    return {
      activeConfirm: false,
      selected: [],
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      slug : '',
      kategori : '',
      jumlah : ''
    }
  },
  methods: {
    initValues (data) {
      if (!data.id) {
        // data v-model form popup
        this.id = null
        this.slug = ''
        this.kategori = ''
        this.jumlah = ''
        // data v-model form popup
      } else {
        // data v-model form popup
        this.id = data.id
        this.slug = data.slug
        this.kategori = data.kategori
        this.jumlah = data.jumlah
        // data v-model form popup
      }
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
    categorys () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataKategori.categorys //ganti suppliers dengan menu yang baru | dataSupplier wajib sama dengan bagian created > register module | ganti nama supplierswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.categorys.length //ganti suppliers dengan menu yang baru
    }
  },
  created () {
    if (!moduledataLaporanKategori.isRegistered) {
      this.$store.registerModule('dataKategori', moduledataLaporanKategori) //dataSupplier ganti dengan dataNamamenu
      moduledataLaporanKategori.isRegistered = true
    }
    const id = {
      idBusiness : this.$store.state.AppActiveUser.id_business
    }
    this.$store.dispatch('dataKategori/fetchDataCategoryItems', id)
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
