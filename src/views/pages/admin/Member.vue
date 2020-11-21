<!-- =========================================================================================
  File Name: dataMemberThumbView.vue
  Description: Data List - Thumb View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="members">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ members.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : members.length }} of {{ queriedItems }}</span>
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
        <vs-th >Name</vs-th>
        <vs-th >Email</vs-th>
        <vs-th >ID Business</vs-th>
        <vs-th >Status</vs-th>
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td>
              <p>{{ tr.name }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.email }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.id_business }}</p>
            </vs-td>

            <vs-td>
              <p>{{ tr.nama_role }}</p>
            </vs-td>
            <vs-td class="whitespace-no-wrap">
              <feather-icon icon="EyeIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current"  />
            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>
</div>
</template>

<script>
// import DataViewSidebarSupplier from './supplier/SupplierPopup.vue'
import moduleDataMember from '@/store/admin/member/moduleMember.js' //penamaan moduleDataMember diganti sesual menui
import { Validator } from 'vee-validate'

// register custom messages
Validator.localize('id')


export default {
  data () {
    return {
      // data v-model form popup
      id : null,
      name : '',
      email : '',
      alamat : '',
      id_business : '',
      name_role:'',
      // data v-model form popup

      selected: [],
      popupActivo:false,
      itemsPerPage: 4,
      isMounted: false,
      popupData: {}
      
    }
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    members () { //ganti members dengan menu yang baru
      return this.$store.state.dataMember.members //ganti members dengan menu yang baru | dataMember wajib sama dengan bagian created > register module | ganti nama memberswajib sama dengan state.js nya
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.members.length //ganti members dengan menu yang baru
    }
  },
  methods: {
    initValues (data) {
      // alert(data.id)
      if (!data.id) {
        // data v-model form popup
        this.id = null
        this.name = ''
        this.email = ''
        this.id_business = ''
        this.nama_role = ''
        // data v-model form popup
      } else {
        // alert(data.id)
        // data v-model form popup
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.id_business = data.id_business
        this.nama_role = data.nama_role
        // data v-model form popup
      }
    }
  },
  created () {
    if (!moduleDataMember.isRegistered) {
      this.$store.registerModule('dataMember', moduleDataMember) //dataMember ganti dengan dataNamamenu
      moduleDataMember.isRegistered = true
    }
    this.$store.dispatch('dataMember/fetchDataMemberItems')
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
