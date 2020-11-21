<template>
  <div class="vx-row">

      <div class="vx-col w-full md:w-full lg:w-2/3 xl:w-2/3">
      
      <!-- Header  -->
       <div class="vx-row">
        <div class="vx-col w-full md:w-full lg:w-2/3 xl:w-2/3">
       <p class="text-2xl text-primary font-bold">Kasir Toko Team</p>
       <sup class="text-black font-semibold">Location ID # KasirToko123</sup>
        </div>
        <div class="vx-col w-full md:w-full lg:w-2/3 xl:w-1/3">
        <div class="vx-row">
        <div class="vx-col w-full md:w-full lg:w-1/2 xl:w-1/2">
        <sup class="text-black font-semibold">Terakhir Sinkron</sup>
        <!-- <span class="flex items-center px-2 py-1 rounded"><div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + data[indextr].statusColor"></div> -->
        <span class="flex items-center px-1 py-1 rounded"><div class="h-3 w-3 rounded-full mr-2" :class="'bg-danger'"></div><p class="text-sm text-primary font-bold">5 Menit lalu</p></span> 
        </div>
        <div class="vx-col w-full lg:w-1/2 xl:w-1/2">
        
        <vs-button color="primary" type="border" icon="info" size="small">Informasi</vs-button>
        </div>
        </div>

        </div>
      <!-- menu button -->
      <router-link :to="`${baseUrl}/all`" tag="span" class="email__label flex items-center mb-4 cursor-pointer">
                      <div class="h-3 w-3 rounded-full" :class="{'h-5 w-5': menu_filter == 'all'}"></div>
                      <vs-button class="rounded-full" color="primary"  type="border"><span class="text-md text-black font-bold" :class="{'font-bold text-black': menu_filter == 'all'}" v-on:click="'menu == all'">Semua</span></vs-button>
      </router-link>

      <router-link :to="`${baseUrl}/drinks`" tag="span" class="email__label flex items-center mb-4 cursor-pointer">
                      <div class="ml-1 h-3 w-3 rounded-full" :class="{'h-5 w-5': menu_filter == 'drinks'}"></div>
                      <vs-button class="rounded-full" color="primary"  type="border"><span class="text-md text-black font-bold" :class="{'font-bold text-black': menu_filter == 'drinks'}" v-on:click="'menu == drinks'">Minuman</span></vs-button>
      </router-link>

      <router-link :to="`${baseUrl}/food`" tag="span" class="email__label flex items-center mb-4 cursor-pointer">
                      <div class="ml-1 h-3 w-3 rounded-full" :class="{'h-5 w-5': menu_filter == 'food'}"></div>
                      <vs-button class="rounded-full" color="primary" type="border"><span class="text-md text-black font-bold" :class="{'font-bold text-black': menu_filter == 'food'}" v-on:click="'menu == food'">Makanan</span></vs-button>
      </router-link>
      
      <!-- Menu  -->      
    </div>
    <!-- Menu Makanannya -->
      <div class="vx-row">
        <div class="vx-col md:w-full lg:w-1/3 xl:w-1/3">
        <vx-card content-color="#fff" card-background="#fff" class="mb-8 w-full">
                    <div class="text-center">
                        <p class="text-black font-bold text-left">Burger Jumbo</p>
                        <p class="text-grey font-semibold text-left text-sm">200g</p>
                    </div>
                    
                    <div class="flex justify-between text-center">
                        
                        <span>
                        
                        </span>
                        <span>
                        
                        </span>
                        <span>
                            <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded h-16 w-16 block" />
                        </span>
                    </div>
                    <p class="text-2xl font-bold text-primary">Rp. 23.000</p>
                </vx-card>
        <vx-card content-color="#fff" card-background="#fff" class="mb-8 w-full">
                    <div class="text-center">
                        <p class="text-black font-bold text-left">Burger Jumbo</p>
                        <p class="text-grey font-semibold text-left text-sm">200g</p>
                    </div>
                    
                    <div class="flex justify-between text-center">
                        
                        <span>
                        
                        </span>
                        <span>
                        
                        </span>
                        <span>
                            <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded h-16 w-16 mx-auto block" />
                        </span>
                    </div>
                    <p class="text-2xl font-bold text-primary">Rp. 23.000</p>
                </vx-card>
        <vx-card content-color="#fff" card-background="#fff" class="mb-8 w-full">
                    <div class="text-center">
                        <p class="text-black font-bold text-left">Burger Jumbo</p>
                        <p class="text-grey font-semibold text-left text-sm">200g</p>
                    </div>
                    
                    <div class="flex justify-between text-center">
                        
                        <span>
                        
                        </span>
                        <span>
                        
                        </span>
                        <span>
                            <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded h-16 w-16 mx-auto block" />
                        </span>
                    </div>
                    <p class="text-2xl font-bold text-primary">Rp. 23.000</p>
                </vx-card>
        </div>

        <div class="vx-col w-full md:w-full lg:w-1/3 xl:w-1/3">
         <vx-card content-color="#fff" card-background="#fff" class="mb-8 w-full">
                    <div class="text-center">
                        <p class="text-black font-bold text-left">Burger Jumbo</p>
                        <p class="text-grey font-semibold text-left text-sm">200g</p>
                    </div>
                    
                    <div class="flex justify-between text-center">
                        
                        <span>
                        
                        </span>
                        <span>
                        
                        </span>
                        <span>
                            <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded h-16 w-16 mx-auto block" />
                        </span>
                    </div>
                    <p class="text-2xl font-bold text-primary">Rp. 23.000</p>
                </vx-card>
        <vx-card content-color="#fff" card-background="#fff" class="mb-8 w-full">
                    <div class="text-center">
                        <p class="text-black font-bold text-left">Burger Jumbo</p>
                        <p class="text-grey font-semibold text-left text-sm">200g</p>
                    </div>
                    
                    <div class="flex justify-between text-center">
                        
                        <span>
                        
                        </span>
                        <span>
                        
                        </span>
                        <span>
                            <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded h-16 w-16 mx-auto block" />
                        </span>
                    </div>
                    <p class="text-2xl font-bold text-primary">Rp. 23.000</p>
                </vx-card>
        <vx-card content-color="#fff" card-background="#fff" class="mb-8 w-full">
                    <div class="text-center">
                        <p class="text-black font-bold text-left">Burger Jumbo</p>
                        <p class="text-grey font-semibold text-left text-sm">200g</p>
                    </div>
                    
                    <div class="flex justify-between text-center">
                        
                        <span>
                        
                        </span>
                        <span>
                        
                        </span>
                        <span>
                            <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded h-16 w-16 mx-auto block" />
                        </span>
                    </div>
                    <p class="text-2xl font-bold text-primary">Rp. 23.000</p>
                </vx-card>
        </div>

        <div class="vx-col w-full md:w-full lg:w-1/3 xl:w-1/3">
         <vx-card content-color="#fff" card-background="#fff" class="mb-8 w-full">
                    <div class="text-center">
                        <p class="text-black font-bold text-left">Burger Jumbo</p>
                        <p class="text-grey font-semibold text-left text-sm">200g</p>
                    </div>
                    
                    <div class="flex justify-between text-center">
                        
                        <span>
                        
                        </span>
                        <span>
                        
                        </span>
                        <span>
                            <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded h-16 w-16 mx-auto block" />
                        </span>
                    </div>
                    <p class="text-2xl font-bold text-primary">Rp. 23.000</p>
                </vx-card>
        <vx-card content-color="#fff" card-background="#fff" class="mb-8 w-full">
                    <div class="text-center">
                        <p class="text-black font-bold text-left">Burger Jumbo</p>
                        <p class="text-grey font-semibold text-left text-sm">200g</p>
                    </div>
                    
                    <div class="flex justify-between text-center">
                        
                        <span>
                        
                        </span>
                        <span>
                        
                        </span>
                        <span>
                            <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded h-16 w-16 mx-auto block" />
                        </span>
                    </div>
                    <p class="text-2xl font-bold text-primary">Rp. 23.000</p>
                </vx-card>
        <vx-card content-color="#fff" card-background="#fff" class="mb-8 w-full">
                    <div class="text-center">
                        <p class="text-black font-bold text-left">Burger Jumbo</p>
                        <p class="text-grey font-semibold text-left text-sm">200g</p>
                    </div>
                    
                    <div class="flex justify-between text-center">
                        
                        <span>
                        
                        </span>
                        <span>
                        
                        </span>
                        <span>
                            <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded h-16 w-16 mx-auto block" />
                        </span>
                    </div>
                    <p class="text-2xl font-bold text-primary">Rp. 23.000</p>
                </vx-card>
        </div>
      </div>
      <!-- bawahnya -->
      <div class="vx-row">
        <!-- informasi pemilik -->
        <div class="vx-col w-full md:w-full lg:w-1/3 xl:w-1/3">
        <p class="text-black font-semibold text-md">Informasi Pemilik</p>
        <div class="vx-row">
        <div class="vx-col md:w-full lg:w-1/2 xl:w-1/3">
        <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded h-16 w-16 block" />
        </div>
        <div class="vx-col md:w-full lg:w-1/2 xl:w-2/3">
        <p class="text-black font-bold text-lg">Marfino Hamzah</p>
        <vs-button size="small" class="shadow-md w-full" color="primary" type="gradient">Chat</vs-button>
        </div>
        </div>
        </div>
        <!-- promo tersedia -->
        <div class="vx-col w-full md:w-full lg:w-1/3 xl:w-2/3">
        <!-- judul -->
        <div class="vx-row">
        <p class="text-black font-semibold text-md mr-5">Pilih Promo Untuk Digunakan</p>
        <p class="text-grey font-semibold text-sm">1 Promo Untuk 1 Order</p>          
        </div>
        <!-- menu promo -->
        <div class="vx-row">          
      <router-link :to="`${baseUrl}/all`" tag="span" class="mr-5">
                      <div class="rounded-full" :class="{'': menu_filter == 'allitem'}"></div>
                      <vs-button class="rounded-full" color="primary"  type="border"><span class="text-sm text-black font-bold" :class="{'font-bold text-black': menu_filter == 'allitem'}" v-on:click="'menu == allitem'">Diskon 50%</span></vs-button>
      </router-link>

      <router-link :to="`${baseUrl}/drinks`" tag="span" class="mr-5">
                      <div class="rounded-full" :class="{'': menu_filter == 'drinksfree'}"></div>
                      <vs-button class="rounded-full" color="primary"  type="border"><span class="text-sm text-black font-bold" :class="{'font-bold text-black': menu_filter == 'drinksfree'}" v-on:click="'menu == drinksfree'">Diskon 10%</span></vs-button>
      </router-link>

      <router-link :to="`${baseUrl}/food`" tag="span" class="mr-5">
                      <div class="rounded-full" :class="{'': menu_filter == 'disc'}"></div>
                      <vs-button class="rounded-full" color="primary" type="border"><span class="text-sm text-black font-bold" :class="{'font-bold text-black': menu_filter == 'disc'}" v-on:click="'menu == disc'">Diskon20%</span></vs-button>
      </router-link>
          
      </div>

        </div>
      </div>
    </div>
    <!-- Order -->
  <div class="vx-col md:w-1/3 lg:w-1/3 xl:w-1/3" >
    <vx-card content-color="#fff" card-background="#fff" class="mb-8">
        <vs-row>
          <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-lg="2" vs-sm="4" vs-xs="12">
            <h1 class="text-4xl font-bold ">Order</h1>
          </vs-col>
          <vs-col  vs-type="flex"  vs-justify="right" vs-align="right" vs-lg="10" vs-sm="4" vs-xs="12">
              <vs-button size="small"  color="primary" type="gradient">Tampilkan Semua</vs-button>
          </vs-col>
          </vs-row>        
          <v-select v-model="selected" :options="options" :dir="$vs.rtl ? 'rtl' : 'ltr'" class="mt-12 mb-12 font-bold" />
          <div class="vx-row">
          <div class="vx-col  md:w-1/6 lg:w-1/6 xl:w-1/12 mb-4">
          <feather-icon icon="XIcon" svgClasses="h-6" class="align-left" />
          </div>
          <div class="vx-col md:w-1/6 lg:w-1/6 xl:w-1/6 mb-4">
          <vs-avatar src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>        
          </div>
          <div class="vx-col  md:w-1/2 lg:w-1/2 xl:w-1/2">          
          <h3 class="text-lg font-bold">Burger Jumbo</h3>
          <h5 class="text-sm">Rp. 23.000</h5>
          </div>
          <div class="vx-col  md:w-1/4 lg:w-1/4 xl:w-1/4">
             <vs-input-number min="1" max="100" size="medium" color="dark"  v-model="dataJumlah"/>
          </div>
          <div class="vx-col  md:w-1/12 lg:w-1/12 xl:w-1/12 mb-4">
          <feather-icon icon="XIcon" svgClasses="h-6" class="align-left" />
          </div>
          <div class="vx-col md:w-1/6 lg:w-1/12 xl:w-1/6 mb-4">
          <vs-avatar src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>        
          </div>
          <div class="vx-col md:w-1/2 lg:w-1/2 xl:w-1/2">          
          <h3 class="text-lg font-bold">Burger Jumbo</h3>
          <h5 class="text-sm">Rp. 23.000</h5>
          </div>
          <div class="vx-col  md:w-1/4 lg:w-1/4 xl:w-1/4">
             <vs-input-number min="1" max="100" size="medium" color="dark"  v-model="dataJumlah"/>
          </div>
        </div>
    </vx-card>
        <vx-card content-color="#fff" card-background="#fff"  class="mb-4">
        <div class="vx-row">
          <div class="vx-col md:w-2/3 lg:w-2/3 xl:w-2/3">          
          <h3 class="text-lg font-bold">Subtotal</h3>
          </div>
          <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
             <h5 class="text-md">Rp. 120.000</h5>
          </div>
          <div class="vx-col md:w-2/3 lg:w-1/3 xl:w-2/3">          
          <h3 class="text-lg font-bold">Diskon</h3>
          </div>
          <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
             <h5 class="text-md">Rp. -20.000</h5>
          </div>
          <div class="vx-col w-9 md:w-2/3 lg:w-1/3 xl:w-2/3">          
          <h3 class="text-lg font-bold">Pajak Penjualan</h3>
          </div>
          <div class="vx-col w-9 md:w-1/3 lg:w-1/3 xl:w-1/3">
             <h5 class="text-md">Rp. 5.000</h5>
          </div>
          <vs-divider border-style="dashed" color="dark"></vs-divider>
          <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <h1 class="text-2xl text-primary font-bold">Total</h1>
          </div>
          <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <h1 class="text-2xl text-primary font-bold">Rp. 200.000</h1>
          </div>
        </div>
        
        </vx-card>
        <vx-card content-color="#fff" card-background="#fff">
          <div class="vx-row">
          <div class="vx-col w-full md:w-2/3 lg:w-2/3 xl:w-2/3">
          <h1 class="text-lg font-bold">Saldo Ratapay</h1>
          <h1 class="text-2xl font-bold text-primary">Rp. 2.000.000</h1>
          <sup>Tersedia</sup>
          </div>
          <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
          <vs-button color="dark" type="border">Cancel</vs-button>
          </div>
          </div>
        </vx-card>
          <vs-button icon-pack="feather" icon="icon-chevron-right" icon-after class="shadow-md w-full mt-5 mb-2" color="primary"   type="gradient" @click="OrderPopup=true">Pesan Sekarang</vs-button>
          <div class="vx-row">
            <div class="vx-col md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h1 class="text-sm font-bold">Hemat</h1>
            </div>
            <div class="vx-col md:w-1/3 lg:w-1/2 xl:w-1/2">
            <h1 class="text-sm ml-24 font-bold">Rp. 20.000</h1>
            </div>
          </div>
  </div>
  
<vs-popup title="Selesaikan Pembayaran" class="text-center item-center" button-close-hidden :active.sync="OrderPopup">
       <p class="text-center text-black font-bold text-lg">Total</p>
       <p class="text-center text-black font-bold text-2xl">Rp. 200.000</p>
       <vx-card noShadow cardBorder remove-card-action class="mb-7 w-30" :title="`Terapkan Diskon`">
         <vs-switch color="success" v-model="terapkan">
                    <span slot="on">Ya</span>
                    <span slot="off">Tidak</span>
                  </vs-switch>
                  <div class="vx-row">
                    <div class="vx-col md:w-1/3 lg:w-1/3 xl:w-1/3 mb-7 mt-7">
                    <vue-numeric currency="Rp. " separator="." v-show="terapkan" v-model="diskon" class="vs-inputx vs-input--input w-full normal mt-5" name="item-diskon" placeholder="diskon" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" ></vue-numeric>
                  <span span class="text-danger text-sm" v-show="errors.has('item-diskon')">{{ errors.first('item-diskon') }}</span>
                    </div>
                    <div class="vx-col md:w-1/3 lg:w-1/3 xl:w-2/3 mb-7 mt-7">
                  <vs-input icon-pack="feather" icon="icon-box" placeholder="Nama Diskon" v-show="terapkan" v-model="nama" class="w-full mt-5" v-validate="'required'" name="item-nama" />
                  <span span class="text-danger text-sm" v-show="errors.has('item-nama')">{{ errors.first('item-nama') }}</span>
                    </div>
                  </div>
          <vx-card title="Pilih Pembayaran">        
            <vx-card title="Tunai" collapse-action class="mb-7 mt-7">
                <p class="mb-3">Tunai</p>
            </vx-card>
            <vx-card title="Pembayaran Digital" class="mb-7 mt-7" collapse-action>
                <p class="mb-3">OVO</p>
                <p class="mb-3">GOPAY</p>
                <p class="mb-3">DANA</p>
            </vx-card>
            <vx-card title="Pembayaran Lainnya" collapse-action class="mb-7 mt-7">
                <p class="mb-3">ATM</p>
                <p class="mb-3">Mobile Banking</p>
            </vx-card>
          </vx-card>
       </vx-card>
      </vs-popup>
</div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import vSelect from 'vue-select'
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import VueNumeric from 'vue-numeric'
import { Validator } from 'vee-validate'
const dict = {
  custom: {
    nama: {
      required: 'Wajib masukkan Nama Diskon'
    },
    diskon: {
      required: 'Wajib Masukkan Jumlah Diskon'
    }
  }
}

// register custom messages
Validator.localize('id', dict)


export default {
  props: {
    menu_filter: {
      type: String,
      required: true
    }
  },
  components: {
    VuePerfectScrollbar,
    'v-select': vSelect,
    'vue-numeric': VueNumeric
  },
  data () {
    return {
      terapkan : false,
      diskon: 'Rp. ',
      nama: '',
      OrderPopup: false,
      isNavOpen: false,
      swiperOption: {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      components: {
        swiper,
        swiperSlide
      },
      ProdukPopup: false,
      options: ['Grab', 'Gojek', 'Pesan Antar', 'Makan Ditempat', 'Bawa Pulang'],
      selected: ['Jenis Order'],
      dataJumlah:100,
      searchProduk: {
        get () {
          return this.$store.state.isi.isisearchProduk
        },
        set (val) {
          this.$store.dispatch('isi/setIsiSearchProduk', val)
        },
        mounted () {
          this.$store.dispatch('isi/setIsiSearchProduk', '')
        }
      }
    }
  },
  methods: {
    loadContent () {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: '#button-load-more-posts',
        scale: 0.45
      })
      setTimeout(() => {
        this.$vs.loading.close('#button-load-more-posts > .con-vs-loading')
      }, 3000)
    }
  },
  mounted () {
    this.wasSidebarOpen = this.$store.state.reduceButton
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
  },
  beforeDestroy () {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
  }
}

</script>
<style scoped>
.swiper-inner {
    position: relative;
    overflow: hidden;
    height: 330px;
    padding: 15px;
}

.swiper-container {
    width: 300px !important;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
}
</style>
