<!-- =========================================================================================
    File Name: EmailSidebar.vue
    Description: Email Application Sidebar(Filter) (Inbox)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div class="email__email-sidebar h-full">
        <div class="m-6 clearfix">
            <vs-button class="w-full" color="primary" type="filled" icon-pack="feather" icon="icon-external-link" >Buka Kasir</vs-button>
        </div>

        <component :is="scrollbarTag" class="email-filter-scroll-area" :key="$vs.rtl">
            <div class="px-6 pb-2 flex flex-col">

                <h5 class="mb-5 mt-6 font-bold">STATUS TRANSAKSI</h5>

               <!-- all -->
                <router-link :to="`${baseUrl}/all`" tag="span" class="flex items-center cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': transaction_filter == 'all'}">
                    <feather-icon icon="ApertureIcon" class="h-6 w-6"></feather-icon>
                    <span class="text-md ml-3">Semua Pembayaran</span>
                </router-link>

               <!-- inbox -->
                <router-link :to="`${baseUrl}/pending`" tag="span" class="flex justify-between cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': transaction_filter == 'pending'}">
                    <div class="flex items-center">
                        <feather-icon icon="ClockIcon" class="h-6 w-6"></feather-icon>
                        <span class="text-md ml-3">Belum Dibayar</span>
                    </div>
                    <template >
                      <vs-chip class="number " color="dark" transparent>10</vs-chip>
                    </template>
                </router-link>

                <!-- sent -->
                <router-link :to="`${baseUrl}/confirm`" tag="span" class="flex items-center cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': transaction_filter == 'confirm'}">
                    <feather-icon icon="CheckSquareIcon" class="h-6 w-6"></feather-icon>
                    <span class="text-md ml-3">Konfirmasi Transfer</span>
                </router-link>

                <!-- draft -->
                <router-link :to="`${baseUrl}/process`" tag="span" class="flex justify-between items-center cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': transaction_filter == 'process'}">
                    <div class="flex items-center">
                        <feather-icon icon="RepeatIcon" class="h-6 w-6"></feather-icon>
                        <span class="text-md ml-3">Pesanan Diproses</span>
                    </div>
                    <template>
                      <vs-chip class="number " color="dark" transparent>15</vs-chip>
                    </template>
                </router-link>

                <!-- starred -->
                <router-link :to="`${baseUrl}/shipping`" tag="span" class="flex items-center cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': transaction_filter == 'shipping'}">
                    <feather-icon icon="TruckIcon" class="h-6 w-6"></feather-icon>
                    <span class="text-md ml-3">Proses Pengiriman</span>
                </router-link>

                <!-- spam -->
                <router-link :to="`${baseUrl}/done`" tag="span" class="flex items-center justify-between items-center cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': transaction_filter == 'done'}">
                    <div class="flex items-center">
                        <feather-icon icon="ThumbsUpIcon" class="h-6 w-6"></feather-icon>
                        <span class="text-md ml-3">Selesai</span>
                    </div>
                    <template >
                      <vs-chip class="number " color="dark" transparent>1322</vs-chip>
                    </template>
                </router-link>

                <!-- trash -->
                <router-link :to="`${baseUrl}/cancel`" tag="span" class="flex items-center cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': transaction_filter == 'cancel'}" >
                    <feather-icon icon="TrashIcon" class="h-6 w-6"></feather-icon>
                    <span class="text-md ml-3">Batal</span>
                </router-link>
            </div>
            <vs-divider></vs-divider>
            <div class="email__labels px-6 py-4">
                <h5 class="mb-8">Metode Pembayaran</h5>
                <div class="email__lables-list">
                    <router-link :to="`${baseUrl}/gofood`" tag="span" class="email__label flex items-center mb-4 cursor-pointer" >
                        <div class="ml-1 h-3 w-3 rounded-full mr-4 border-2 border-solid border-danger" :class="{'h-5 w-5': transaction_filter == 'gofood'}"></div>
                        <span class="text-lg" :class="{'font-bold text-danger': transaction_filter == 'gofood'}" >Gofood</span>
                    </router-link>
                    <router-link :to="`${baseUrl}/grabfood`" tag="span" class="email__label flex items-center mb-4 cursor-pointer">
                        <div class="ml-1 h-3 w-3 rounded-full mr-4 border-2 border-solid border-success" :class="{'h-5 w-5': transaction_filter == 'grabfood'}"></div>
                        <span class="text-lg" :class="{'font-bold text-success': transaction_filter == 'grabfood'}" >Grabfood</span>
                    </router-link>
                    <router-link :to="`${baseUrl}/delivery`" tag="span" class="email__label flex items-center mb-4 cursor-pointer">
                        <div class="ml-1 h-3 w-3 rounded-full mr-4 border-2 border-solid border-warning" :class="{'h-5 w-5': transaction_filter == 'delivery'}"></div>
                        <span class="text-lg" :class="{'font-bold text-warning': transaction_filter == 'delivery'}">Pesan Antar</span>
                    </router-link>
                    <router-link :to="`${baseUrl}/takeaway`" tag="span" class="email__label flex items-center mb-4 cursor-pointer">
                        <div class="ml-1 h-3 w-3 rounded-full mr-4 border-2 border-solid border-primary" :class="{'h-5 w-5': transaction_filter == 'takeaway'}"></div>
                        <span class="text-lg" :class="{'font-bold text-primary': transaction_filter == 'takeaway'}">Bawa Pulang</span>
                    </router-link>
                    <router-link :to="`${baseUrl}/dinein`" tag="span" class="email__label flex items-center mb-4 cursor-pointer">
                        <div class="ml-1 h-3 w-3 rounded-full mr-4 border-2 border-solid border-dark" :class="{'h-5 w-5': transaction_filter == 'dinein'}"></div>
                        <span class="text-lg" :class="{'font-bold text-dark': transaction_filter == 'dinein'}" v-on:click="'metode == dinein'">Makan Ditempat</span>
                    </router-link>
                </div>
            </div>
        </component>
    </div>
</template>

<script>

import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    transaction_filter: {
      type: String,
      required: true
    }
  },
  computed: {
    scrollbarTag () { return this.$store.getters.scrollbarTag },
    baseUrl () {
      const path = this.$route.path
      return path.slice(0, path.lastIndexOf('/'))
    }
  },
  components: {
    VuePerfectScrollbar
  }
}

</script>

