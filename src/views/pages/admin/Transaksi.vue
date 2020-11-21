<template>
    <div id="email-app" class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden">

        <vs-sidebar class="items-no-padding" parent="#email-app" :click-not-close="clickNotClose" :hidden-background="clickNotClose" v-model="isTransaksiSidebarActive">
            <transaksi-sidebar @closeSidebar="toggleTransaksiSidebar" :transaction_filter="transaction_filter"/>
        </vs-sidebar>

        <div :class="{'sidebar-spacer': clickNotClose}" class="no-scroll-content border border-solid d-theme-border-grey-light border-r-2 border-t-2 border-b-2">


            <!-- SEARCH BAR -->
            <div class="flex border d-theme-dark-bg items-center">
                <feather-icon class="md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer" icon="MenuIcon" @click.stop="toggleTransaksiSidebar(true)"/>

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
                        <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ transactions.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : transactions.length }} of {{ queriedItems }}</span>
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
            <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="transactions" >
              <template slot="thead">
                <vs-th sort-key="invoice" class="product-name">Invoice</vs-th>
                <vs-th sort-key="name" class="product-category">Nama</vs-th>
                <vs-th sort-key="ordertime" class="product-order">Waktu Pesan</vs-th>
                <vs-th sort-key="total" class="product-price">Total</vs-th>
                <vs-th sort-key="payment" class="product-payment">Metode Pembayaran</vs-th>
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
                      <p class="pointer-events-none">{{ tr.nameRecipient }}</p>
                    </vs-td>

                    <vs-td>
                      <p class="pointer-events-none">{{ tr.ordertime }}</p>
                    </vs-td>

                    <vs-td>
                      <p class="pointer-events-none">{{ tr.total }}</p>
                    </vs-td>

                    <vs-td>
                      <vs-chip :color="getOrderMethodColor(tr.metode)" transparent class="pointer-events-none">{{ getOrderMethodName(tr.metode) }}</vs-chip>
                    </vs-td>

                    <vs-td>
                      <vs-chip :color="getOrderStatusColor(tr.status)" transparent class="pointer-events-none">{{ getOrderStatusName(tr.status) }}</vs-chip>
                      <!-- <p class="product-price">{{ tr.status }}</p> -->
                    </vs-td>

                    <vs-td class="whitespace-no-wrap">
                      <feather-icon icon="EyeIcon" svgClasses="w-5 h-5 hover:text-success stroke-current" @click.stop="invoiceData(tr)"  />
                      <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)" />
                    </vs-td>
                  </vs-tr>
                </tbody>
              </template>
            </vs-table>
          </div>
        </component>
        <vs-popup :title="titlePopup" :active.sync="popupActivo">
              <div id="invoice-page">

        <div class="flex flex-wrap items-center justify-between">
          <vx-input-group class="mb-base mr-3">
            <vs-input v-model="mailTo" placeholder="Email" />

            <template slot="append">
              <div class="append-text btn-addon">
                <vs-button type="border" @click="mailTo = ''" class="whitespace-no-wrap">Send Invoice</vs-button>
              </div>
            </template>
          </vx-input-group>
          <div class="flex items-center">
            <vs-button class="mb-base mr-3" type="border" icon-pack="feather" icon="icon icon-download">Download</vs-button>
            <vs-button class="mb-base mr-3" icon-pack="feather" icon="icon icon-file" @click="printInvoice">Print</vs-button>
          </div>
        </div>

        <vx-card id="invoice-container">

            <!-- INVOICE METADATA -->
            <div class="vx-row leading-loose p-base">
                <div class="vx-col w-1/2 mt-base">
                    <img src="@/assets/images/logo/logo.png" alt="vuexy-logo">
                </div>
                <div class="vx-col w-1/2 text-right">
                    <h1 class="mb-6">Faktur</h1>
                        <h6>Faktur No.</h6>
                        <p>{{ titlePopup }}</p>

                        <h6 class="mt-4">Tanggal Faktur</h6>
                        <p>{{ ordertime }}</p>

                        <h6 class="mt-4">Tanggal Pengiriman</h6>
                        <p>{{ shiptime }}</p>

                        <h6 class="mt-4">Pengiriman Dengan</h6>
                        <p>{{ shipVia }}</p>

                        <h6 class="mt-4">Metode Pembayaran</h6>
                        <p>{{ metode }}</p>
                </div>
                <div class="vx-col w-1/2 mt-12">
                    <h5>Penerima</h5>
                    <div class="invoice__recipient-info my-4">
                        <p>{{ nameRecipient }}</p>
                        <p>{{ addressRecipient }}</p>

                    </div>
                    <div class="invoice__recipient-contact ">
                        <p class="flex items-center">
                            <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ mailRecipient }}</span>
                        </p>
                        <p class="flex items-center">
                            <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ mobileRecipient }}</span>
                        </p>
                    </div>
                </div>
                <div class="vx-col w-1/2 mt-base text-right mt-12">
                    <h5>{{ namecom }}</h5>
                    <div class="invoice__company-info my-4">
                        <p>{{ addresscom }}</p>
                    </div>
                    <div class="invoice__company-contact">
                        <p class="flex items-center justify-end">
                            <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ mailcom }}</span>
                        </p>
                        <p class="flex items-center justify-end">
                            <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ mobilecom }}</span>
                        </p>
                    </div>

                </div>
            </div>

            <!-- INVOICE CONTENT -->
            <div class="p-base">
                <!-- INVOICE order TABLE -->
                <vs-table hoverFlat :data="order">
                    <!-- HEADER -->
                    <template slot="thead">
                        <vs-th class="pointer-events-none">BARANG</vs-th>
                        <vs-th class="pointer-events-none">BARANG DESKRIPSI</vs-th>
                        <vs-th class="pointer-events-none">JUMLAH</vs-th>
                        <vs-th class="pointer-events-none">HARGA SATUAN</vs-th>
                        <vs-th class="pointer-events-none">HARGA TOTAL</vs-th>
                    </template>

                    <!-- DATA -->
                    <template slot-scope="{data}">
                        <vs-tr v-for="(tr, index) in data" :key="index">
                            <vs-td :data="data[index].item">{{ data[index].item }}</vs-td>
                            <vs-td :data="data[index].itemDesc">{{ data[index].itemDesc }}</vs-td>
                            <vs-td :data="data[index].qty">{{ data[index].qty }}</vs-td>
                            <vs-td :data="data[index].unitPrice">Rp. {{ data[index].unitPrice }}</vs-td>
                            <vs-td :data="data[index].amount">Rp. {{ data[index].amount }}</vs-td>
                        </vs-tr>
                    </template>
                </vs-table>

                <!-- INVOICE SUMMARY TABLE -->
                <vs-table hoverFlat class="w-1/2 ml-auto mt-4">
                    <vs-tr>
                        <vs-th class="pointer-events-none">SUBTOTAL</vs-th>
                        <vs-td>Rp. {{ subtotal }}</vs-td>
                    </vs-tr>
                    <vs-tr>
                        <vs-th class="pointer-events-none">Diskon ({{ discountPercentage }}%)</vs-th>
                        <vs-td>Rp. {{ discountedAmount }}</vs-td>
                    </vs-tr>
                    <vs-tr>
                        <vs-th class="pointer-events-none">TOTAL</vs-th>
                        <vs-td>Rp. {{ total }}</vs-td>
                    </vs-tr>
                </vs-table>
            </div>

            <!-- INVOICE FOOTER -->
            <div class="invoice__footer text-right p-base">
                <p class="mb-4">Transfer jumlah tersebut ke jumlah bisnis di bawah. Harap sertakan nomor faktur pada cek Anda.</p>
                <p>
                    <span class="mr-8">BANK: <span class="font-semibold">{{ bank }}</span></span>
                    <span>No Rek: <span class="font-semibold"> G882-1111-2222-3333 </span></span>
                </p>
            </div>
        </vx-card>
    </div>
        </vs-popup>

      </div>
    </div>
</template>

<script>
import TransaksiSidebar  from './transaksi/TransaksiSidebar.vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import moduleDataTransaction from '@/store/admin/transaksi/moduleTransaksi.js'
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
      mailTo: '',
      popupActivo:false,
      isSidebarActive : false,
      clickNotClose   : true,
      isTransSidebarActive : true,
      selected: [],
      itemsPerPage: 10,
      isMounted: false,

      // data
      titlePopup : '',
      name : '',
      ordertime : '',
      total : '',
      status : '',
      namecom : '',
      addresscom : '',
      mailcom : '',
      mobilecom : '',
      nameRecipient : '',
      addressRecipient : '',
      mailRecipient : '',
      mobileRecipient : '',
      invoice : '',
      shiptime : '',
      shipVia : '',
      order : '',
      bank : '',
      subtotal : '',
      discountPercentage : '',
      discountedAmount : '',
      item : '',
      itemDesc : '',
      qty : '',
      unitPrice : '',
      amount : '',
      metode : ''
    }
  },
  watch: {
    isSidebarActive (value) {
      if (!value) this.showThread = false
    },
    windowWidth () {
      this.setSidebarWidth()
    },
    transaction_filter () {
      this.selected = []

      this.$store.commit('dataTransaksi/UPDATE_TRANS_FILTER', this.$route.params.filter)
      this.$store.dispatch('dataTransaksi/fetchDataTransactionItems', { filter: this.$route.params.filter })
    }
  },
  computed: {
    transaction_filter () {
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
    transactions () {
      return this.$store.state.dataTransaksi.transactions
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.transactions.length
    }
  },
  methods:{
    initValues (data) {
      // alert(data.id)
      if (!data.id) {
        // data v-model form popup
        this.id = null
        this.invoice = ''
        this.name = ''
        this.ordertime = ''
        this.total = ''
        this.status = ''
        this.namecom = ''
        this.addresscom = ''
        this.mailcom = ''
        this.mobilecom = ''
        this.nameRecipient = ''
        this.addressRecipient = ''
        this.mailRecipient = ''
        this.mobileRecipient = ''
        this.invoice = ''
        this.ordertime = ''
        this.shiptime = ''
        this.shipVia = ''
        this.order = ''
        this.bank = ''
        this.subtotal = ''
        this.discountPercentage = ''
        this.discountedAmount = ''
        this.total = ''
        this.item = ''
        this.itemDesc = ''
        this.qty = ''
        this.unitPrice = ''
        this.amount = ''
        this.metode = ''

        // data v-model form popup
      } else {
        // alert(data.id)
        // data v-model form popup
        this.id = data.id
        this.invoice = data.invoice
        this.name = data.name
        this.ordertime = data.ordertime
        this.total = data.total
        this.status = data.status
        this.namecom = data.namecom
        this.addresscom = data.addresscom
        this.mailcom = data.mailcom
        this.mobilecom = data.mobilecom
        this.nameRecipient = data.nameRecipient
        this.addressRecipient = data.addressRecipient
        this.mailRecipient = data.mailRecipient
        this.mobileRecipient = data.mobileRecipient
        this.invoice = data.invoice
        this.ordertime = data.ordertime
        this.shiptime = data.shiptime
        this.shipVia = data.shipVia
        this.order = data.order
        this.bank = data.bank
        this.subtotal = data.subtotal
        this.discountPercentage = data.discountPercentage
        this.discountedAmount = data.discountedAmount
        this.total = data.total
        this.item = data.order.item
        this.itemDesc = data.order.itemDesc
        this.qty = data.order.qty
        this.unitPrice = data.order.unitPrice
        this.amount = data.order.amount
        this.metode = data.metode
        // data v-model form popup
      }
    },
    invoiceData (data) {
      this.initValues(data)
      this.titlePopup = `${data.invoice}`
      this.name = `${data.name}`
      this.ordertime = `${data.ordertime}`
      this.total = `${data.total}`
      this.status = `${data.status}`
      this.discountPercentage = `${data.discountPercentage}`
      this.discountedAmount = `${data.discountedAmount}`
      this.total = `${data.total}`
      this.metode = `${data.metode}`
      this.namecom = `${data.namecom}`
      this.addresscom = `${data.addresscom}`
      this.mailcom = `${data.mailcom}`
      this.mobilecom = `${data.mobilecom}`
      this.nameRecipient = `${data.nameRecipient}`
      this.addressRecipient = `${data.addressRecipient}`
      this.mailRecipient = `${data.mailRecipient}`
      this.mobileRecipient = `${data.mobileRecipient}`
      this.invoice = `${data.invoice}`
      this.ordertime = `${data.ordertime}`
      this.shiptime = `${data.shiptime}`
      this.shipVia = `${data.shipVia}`
      this.bank = `${data.bank}`
      this.item = `${data.order.item}`
      this.itemDesc = `${data.order.itemDesc}`
      this.qty = `${data.order.qty}`
      this.unitPrice = `${data.order.unitPrice}`
      this.amount = `${data.order.amount}`
      this.subtotal = `${data.subtotal}`
      this.popupActivo = true
    },

    getOrderStatusColor (status) {
      if (status === 'pending')   return 'primary'
      if (status === 'confirm') return '#EE5A24'
      if (status === 'process')  return '#0652DD'
      if (status === 'shipping')  return '#12CBC4'
      if (status === 'done')  return '#009432'
      if (status === 'cancel')  return '#EA2027'
      return 'primary'
    },
    getOrderStatusName (status) {
      if (status === 'pending')   return 'Belum Dibayar'
      if (status === 'confirm') return 'Konfirmasi Transfer'
      if (status === 'process')  return 'Pesanan Diproses'
      if (status === 'shipping')  return 'Proses Pengiriman'
      if (status === 'done')  return 'Selesai'
      if (status === 'cancel')  return 'Batal'
      return 'primary'
    },

    getOrderMethodColor (status) {
      if (status === 'Go Food')   return '#ff0000'
      if (status === 'Grab Food') return '#006400'
      if (status === 'Pesan Antar')  return '#FFFF00  '
      if (status === 'Bawa Pulang')  return '#0000CD'
      if (status === 'Makan Ditempat')  return '#000000'
      return 'primary'
    },
    getOrderMethodName (status) {
      if (status === 'Go Food')   return 'Go Food'
      if (status === 'Grab Food') return 'Grab Food'
      if (status === 'Pesan Antar')  return 'Pesan Antar'
      if (status === 'Bawa Pulang')  return 'Bawa Pulang'
      if (status === 'Makan Ditempat')  return 'Makan Ditempat'
      return 'primary'
    },
    printInvoice () {
      window.print()
    },
    setSidebarWidth () {
      if (this.windowWidth < 992) {
        this.isTransaksiSidebarActive = this.clickNotClose = false
      } else {
        this.isTransaksiSidebarActive = this.clickNotClose = true
      }
    },
    toggleTransaksiSidebar (value = false) {
      if (!value) {
        this.closeTransaksiViewSidebar()
        if (this.clickNotClose) {
          return
        }
      }
      this.isTransaksiSidebarActive = value
    }
  },
  components: {
    VuePerfectScrollbar,
    TransaksiSidebar,
    Datepicker
    // MailItem,
    // EmailView
  },
  created () {
    this.setSidebarWidth()
    if (!moduleDataTransaction.isRegistered) {
      this.$store.registerModule('dataTransaksi', moduleDataTransaction)
      this.setSidebarWidth()
      moduleDataTransaction.isRegistered = true
    }
    this.$store.dispatch('dataTransaksi/fetchDataTransactionItems')
  },
  beforeDestroy () {
    this.$store.unregisterModule('transaksi')
  },
  mounted () {
    this.isMounted = true
    // this.$store.dispatch('email/setTransaksiSearchQuery', '')
    this.$emit('setAppClasses', 'invoice-page')
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
