<template>
    <div id="email-app" class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden">

        <vs-sidebar class="items-no-padding" parent="#email-app" :click-not-close="clickNotClose" :hidden-background="clickNotClose" v-model="iscourierSidebarActive">
            <courier-sidebar @closeSidebar="togglecourierSidebar" :couriers_filter="couriers_filter"/>
        </vs-sidebar>

        <div :class="{'sidebar-spacer': clickNotClose}" class="no-scroll-content border border-solid d-theme-border-grey-light border-r-2 border-t-2 border-b-2">


            <!-- SEARCH BAR -->
            <div class="flex border d-theme-dark-bg items-center">
                <feather-icon class="md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer" icon="MenuIcon" @click.stop="togglecourierSidebar(true)"/>

            </div>

            <!-- EMAIL ACTION BAR -->
            <div class="email__actions flex items-center flex-wrap justify-between p-4 border border-r-0 border-l-0 border-solid d-theme-border-grey-light">
                <div class="flex items-center">

                    <!-- ACTION - DROPDOWN -->
                <v2-datepicker-range v-model='selected' lang="en" placeholder="Pilih Tanggal" :picker-options="options"></v2-datepicker-range>
                </div>
                <div class="flex">

                    <vs-dropdown vs-trigger-click class="cursor-pointer items-per-page-handler">
                      <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                        <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ couriers.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : couriers.length }} of {{ queriedItems }}</span>
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
            </div>
        <component :is="scrollbarTag" class="email-filter-scroll-area">
          <div id="data-list-thumb-view" class="data-list-container p-5 bg-scroll">
            <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="couriers" >
              <template slot="thead">
                <vs-th sort-key="invoice" class="product-name">Invoice</vs-th>
                <vs-th sort-key="name" class="product-category">Nama</vs-th>
                <vs-th sort-key="name" class="product-category">No Hp</vs-th>
                <vs-th sort-key="ordertime" class="product-order">Alamat</vs-th>
                <vs-th sort-key="status">Status</vs-th>
                <vs-th >Action</vs-th>
              </template>

              <template slot-scope="{data}" >
                <tbody>
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                    <vs-td>
                      <p class="pointer-events-none font-medium font-bold truncate">#{{ tr.invoice }}</p>
                    </vs-td>

                    <vs-td>
                      <p class="pointer-events-none">{{ tr.nama }}</p>
                    </vs-td>
                    <vs-td>
                      <p class="pointer-events-none">{{ tr.noHp }}</p>
                    </vs-td>

                    <vs-td>
                      <p class="pointer-events-none">{{ tr.alamat }}</p>
                    </vs-td>

                    <vs-td>
                      <vs-chip :color="getOrderStatusColor(tr.status)" transparent class="pointer-events-none">{{ getOrderStatusName(tr.status) }}</vs-chip>
                      <!-- <p class="product-price">{{ tr.status }}</p> -->
                    </vs-td>

                    <vs-td class="whitespace-no-wrap">
                      <div class="vx-row">
                      <vx-tooltip color="success" text="Konfirmasi Terkirim">
                      <feather-icon icon="CheckSquareIcon" svgClasses="w-5 h-5 hover:text-success stroke-current" @click.stop="shippedData(tr)"  />
                      </vx-tooltip>
                      <vx-tooltip color="primary" text="Konfirmasi Dalam Perjalanan">
                      <feather-icon icon="LoaderIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current ml-3" @click.stop="shippingData(tr)"  />
                      </vx-tooltip>
                      <vx-tooltip color="danger" text="Batal Pengiriman">
                      <feather-icon icon="XIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current ml-3" @click.stop="cancelData(tr)"  />
                      </vx-tooltip>
                      <vx-tooltip color="dark" text="Cek Map">
                      <feather-icon icon="EyeIcon" svgClasses="w-5 h-5 hover:text-dark stroke-current ml-3 mr-3" @click.stop="invoiceData(tr)"  />
                      </vx-tooltip>
                      </div>
                      <!-- <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)" /> -->
                    </vs-td>
                  </vs-tr>
                </tbody>
              </template>
            </vs-table>
          </div>
        </component>
        <vs-popup title="Data Penerima" :active.sync="popupActivo">
              <div id="invoice-page">

        <vx-card id="invoice-container">

            <!-- INVOICE METADATA -->
            <div class="vx-row leading-loose p-base">
                <div class="vx-col w-1/2 mt-base">
                    <img src="@/assets/images/logo/logo.png" alt="vuexy-logo">
                </div>
                <div class="vx-col w-1/2 text-right">
                    <h1 class="mb-6">Data Penerima</h1>
                        <h6>Faktur No.</h6>
                        <p>{{ invoice }}</p>

                        <h6 class="mt-4">Nama Penerima</h6>
                        <p>{{ nama }}</p>

                        <h6 class="mt-4">Alamat</h6>
                        <p>{{ alamat }}</p>

                        <h6 class="mt-4">No. Hp</h6>
                        <p>{{ noHp }}</p>
                        
                        <h6 class="mt-4">Nama Produk</h6>
                        <p>{{ namaProduct }}</p>

                        <h6 class="mt-4">Status</h6>
                        <vs-chip :color="getOrderStatusColor(status)" transparent class="pointer-events-none">{{ getOrderStatusName(status) }}</vs-chip>
                </div>
                <!-- Google Maps -->
                <div class="vx-col w-1/2 mt-12">                    
                    <div class="invoice__recipient-info my-4">
                        <div id="map">
                         <gmap-map :center="center" :zoom="15" style="width: 100%; height: 500px">
                          <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
                            Marker 1
                          </gmap-info-window>
                          <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>
                        </gmap-map>
                        <div class="con-info">
                        <input placeholder="Silahkan Datang Sesuai Map" class="address" autocomplete="off" type="text">
                        <button>
                            Tekan Jika Sudah Terkirim
                          </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- INVOICE CONTENT -->
            <div class="p-base">
              
            </div>
        </vx-card>
    </div>
        </vs-popup>

      </div>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import CourierSidebar  from './courier/CourierSidebar'
import moduleDataCourier from '@/store/courier/courier/moduleCourier.js'
import Datepicker from 'vuejs-datepicker' //(https://github.com/dwqs/v2-datepicker)
export default {
  data () {
    return {
      
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
      popupActivo:false,
      isSidebarActive : false,
      clickNotClose   : true,
      isTransSidebarActive : true,
      selected: [],
      itemsPerPage: 10,
      isMounted: false,
      // data
      invoice : '',
      nama : '',
      noHp : '',
      alamat : '',
      status : '',
      namaProduct : '',
      markers:'',
      infoOptions: {
        pixelOffset: { width: 0, height: -35 }
      },
      center: { lat: 10.0, lng: 10.0 },
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null
    }
  },
  watch: {
    isSidebarActive (value) {
      if (!value) this.showThread = false
    },
    windowWidth () {
      this.setSidebarWidth()
    },
    couriers_filter () {
      this.selected = []

      this.$store.commit('datacourier/UPDATE_COUR_FILTER', this.$route.params.filter)
      this.$store.dispatch('datacourier/fetchDataCourierItems', { filter: this.$route.params.filter })
    }
  },
  computed: {
    couriers_filter () {
      return this.$route.params.filter
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag },
    windowWidth () {
      return this.$store.state.windowWidth
    },
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    couriers () {
      return this.$store.state.datacourier.couriers
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.couriers.length
    }
  },
  methods:{

    initValues (data) {
      // alert(data.id)
      if (!data.id) {
        // data v-model form popup
        this.id = null
        this.invoice = ''
        this.nama = ''
        this.noHp = ''
        this.alamat = ''
        this.namaProduct = ''
        this.status = ''
        this.lat = ''
        this.lng = ''
        this.position = ''
        this.markers = ''
        this.center = ''
        this.infoText = ''
        // data v-model form popup
      } else {

        // data v-model form popup
        this.id = data.id
        this.invoice = data.invoice
        this.nama = data.nama
        this.noHp = data.noHp
        this.alamat = data.alamat
        this.namaProduct = data.namaProduct
        this.status = data.status
        this.lat = data.markers[0].position.lat
        this.lng = data.markers[0].position.lng
        this.infoText = data.infoText
      }
    },
    shippingData (data) {
      this.nama = `${data.nama}`
    },
    shippedData (data) {
      this.nama = `${data.nama}`
    },
    cancelData (data) {
      this.nama = `${data.nama}`
    },
    invoiceData (data) {
      this.initValues(data)
      this.nama = `${data.nama}`
      this.noHp = `${data.noHp}`
      this.namaProduct = `${data.namaProduct}`
      this.lat = `${data.markers.position.lat}`
      this.lng = `${data.markers.position.lng}`
      this.alamat = `${data.alamat}`
      this.status = `${data.status}`
      this.infoText = `${data.infoText}`
      this.popupActivo = true
    },

    getOrderStatusColor (status) {
      if (status === 'pending')   return 'primary'
      if (status === 'shipped') return '#EE5A24'
      if (status === 'shipping')  return '#12CBC4'
      if (status === 'cancel')  return '#EA2027'
      return 'primary'
    },
    getOrderStatusName (status) {
      if (status === 'pending')   return 'Belum Terkirim'
      if (status === 'shipped') return 'Sudah Diterima'
      if (status === 'shipping')  return 'Proses Pengiriman'
      if (status === 'cancel')  return 'Batal'
      return 'primary'
    },
    printInvoice () {
      window.print()
    },
    setSidebarWidth () {
      if (this.windowWidth < 992) {
        this.iscourierSidebarActive = this.clickNotClose = false
      } else {
        this.iscourierSidebarActive = this.clickNotClose = true
      }
    },
    togglecourierSidebar (value = false) {
      if (!value) {
        this.closecourierViewSidebar()
        if (this.clickNotClose) {
          return
        }
      }
      this.iscourierSidebarActive = value
    }
  },
  components: {
    VuePerfectScrollbar,
    CourierSidebar,
    Datepicker
    // MailItem,
    // EmailView
  },
  created () {
    this.setSidebarWidth()
    if (!moduleDataCourier.isRegistered) {
      this.$store.registerModule('datacourier', moduleDataCourier)
      this.setSidebarWidth()
      moduleDataCourier.isRegistered = true
    }
    this.$store.dispatch('datacourier/fetchDataCourierItems')
  },
  beforeDestroy () {
    this.$store.unregisterModule('courier')
  },
  mounted () {
    
    this.isMounted = true
    // this.$store.dispatch('email/setcourierSearchQuery', '')
    this.$emit('setAppClasses', 'invoice-page')
    console.log(this.couriers)
  }
}

</script>


<style lang="scss">
@import "@/assets/scss/vuexy/apps/email.scss";
</style>
<style lang="scss">
  #data-list-thumb-view {

    .vs-con-table {

      .product-name {
        max-width: 15rem;
      }
      .product-category {
        max-width: 20rem;
      }
      .product-order {
        max-width: 23rem;
      }
      .product-price {
        max-width: 17rem;
      }
      .product-payment {
        max-width: 10rem;
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
          padding: 0;

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
          padding: 0 20px !important;
        }
        tr{
          background: none;
          box-shadow: 3px;
        }
      }

      .vs-table--pagination {
        justify-content: center;
      }
    }
  }

</style>
<style>
  .map {
        height: 100%;
        width: 100%;
      }

      /* Optional: Makes the sample page fill the window. */
      .con-info {
        position: fixed;
        bottom: 0px;
        width: calc(100% - 30px);
        left: 0px;
        margin: 15px;
        margin-bottom: 30px;
        padding: 10px;
        background: #fff;
        border-radius: 20px;
      }
      .con-info button {
        padding: 15px;
        width: 100%;
        margin-top: 15px;
        border-radius: 14px;
        border: 0px;
        background: #0068fc;
        color: #fff;
        font-size: 1rem;
      }
      .con-info button:disabled {
        opacity: .5;
      }
      .address {
          padding: 15px 15px;
          width: 100%;
          border: 0px;
          background: #eaedf7;
          border-radius: 15px;
          font-weight: bold;
          font-size: 1rem;
      }
      .gmnoprint::placeholder {
          color: #94a4d3;
      }
      .gmnoprint {
        display: none !important
      }
</style>
