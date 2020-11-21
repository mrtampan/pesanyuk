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
        <component :is="scrollbarTag" class="email-filter-scroll-area" :key="$vs.rtl">
            <div class="px-6 pb-2 flex flex-col">

                <h5 class="mb-5 mt-6 font-bold">STATUS PENGIRIMAN</h5>

               <!-- all -->
                <router-link :to="`${baseUrl}/all`" tag="span" class="flex items-center cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': couriers_filter == 'all'}">
                    <feather-icon icon="ApertureIcon" class="h-6 w-6"></feather-icon>
                    <span class="text-md ml-3">Semua Pengiriman</span>
                </router-link>

               <!-- inbox -->
                <router-link :to="`${baseUrl}/pending`" tag="span" class="flex justify-between cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': couriers_filter == 'pending'}">
                    <div class="flex items-center">
                        <feather-icon icon="ClockIcon" class="h-6 w-6"></feather-icon>
                        <span class="text-md ml-3">Belum Terkirim</span>
                    </div>
                    <template >
                      <vs-chip class="number " color="dark" transparent>10</vs-chip>
                    </template>
                </router-link>

                <!-- sent -->
                <router-link :to="`${baseUrl}/shipped`" tag="span" class="flex items-center cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': couriers_filter == 'shipped'}">
                    <feather-icon icon="CheckSquareIcon" class="h-6 w-6"></feather-icon>
                    <span class="text-md ml-3">Telah Terkirim</span>
                </router-link>

                <!-- draft -->
                <router-link :to="`${baseUrl}/shipping`" tag="span" class="flex justify-between items-center cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': couriers_filter == 'shipping'}">
                    <div class="flex items-center">
                        <feather-icon icon="RepeatIcon" class="h-6 w-6"></feather-icon>
                        <span class="text-md ml-3">Pesanan Dikirim</span>
                    </div>
                    <template>
                      <vs-chip class="number " color="dark" transparent>15</vs-chip>
                    </template>
                </router-link>

                <!-- trash -->
                <router-link :to="`${baseUrl}/cancel`" tag="span" class="flex items-center cursor-pointer mb-1 p-3" :class="{'bg-primary-gradient rounded-lg shadow-md text-white': couriers_filter == 'cancel'}" >
                    <feather-icon icon="TrashIcon" class="h-6 w-6"></feather-icon>
                    <span class="text-md ml-3">Batal</span>
                </router-link>
                
            </div>            
        </component>
    </div>
</template>

<script>

import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    couriers_filter: {
      type: String,
      required: false,
      default: () => undefined
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

