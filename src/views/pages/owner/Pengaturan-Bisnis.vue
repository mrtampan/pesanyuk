<template>
    <vs-popup title="Selamat Datang di Pesanyuk.id" class="text-center item-center" button-close-hidden :active.sync="isPopupActiveLocal">
        <img src="@/assets/images/logo/full-logo.png" width="200px" class="mx-auto mb-10 flex max-w-full">
        <img src="@/assets/images/pages/selamat-datang.png" class="mx-auto mb-10 flex max-w-full">
        <p class="my-2 text-lg font-bold">Hai Nama Owner,</p>
        <p class="my-2 mb-10">Selamat datang di Pesanyuk. Anda belum memiliki data Bisnis di Akun baru Anda.<br> Yuk lengkapi sebelum akses dashboard toko Anda.</p>
        <vs-button @click="configPopup=true" icon-pack="feather" icon="icon-arrow-right" class="mx-auto" icon-after color="primary" type="filled">Pengaturan Bisnis</vs-button>
        <p class="mt-3 text-sm text-grey">klik tombol diatas untuk memulai mengatur Bisnis Anda</p>

          <vs-popup class="" title="Pengaturan bisnis" button-close-hidden :active.sync="configPopup">
            <h3 class="my-3 text-center item-center font-bold">Yuk atur Bisnis Anda lebih dahulu</h3>
            <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" >
                <tab-content title="Pengaturan Bisnis" class="mb-3">

                    <!-- tab 1 content -->
                    <div class="vx-row">
                        <div class="vx-col md:w-1/3 w-full mt-3">
                            <vs-upload
                              action="https://jsonplaceholder.typicode.com/posts/"
                              @on-success="successUpload"
                              single-upload
                              limit="1"
                              text="Upload Logo Bisnis Anda"
                              />
                            <p class="text-sm ml-2 mt-4">Halaman Toko Bisnis Anda</p>
                            <vx-input-group>
                              <template slot="prepend">
                                <div class="prepend-text bg-primary">
                                  <span>pesan.app/</span>
                                </div>
                              </template>

                              <vs-input placeholder="tokoanda" class="w-full" />
                            </vx-input-group>
                        </div>
                        <div class="vx-col md:w-2/3 w-full mt-3">
                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Nama Bisnis Anda" class="w-full" />
                            <vs-textarea icon-pack="feather" rows="2" icon="icon-map-pin" label="Alamat Lengkap" class="w-full mt-8" />
                              <vs-button color="primary" @click="maps=true" class="bg-white shadow mt-6" type="border">Google Maps</vs-button>
                            <vs-input icon-pack="feather" icon="icon-navigation" label-placeholder="Kota" class="w-full mt-8" />
                            <vs-input icon-pack="feather" icon="icon-navigation-2" label-placeholder="Provinsi" class="w-full mt-8" />

                            <vs-popup class="holamundo" title="Google Maps" :active.sync="maps">
                              <vs-input icon-pack="feather" v-model="lat" icon="icon-map" label-placeholder="Latitude" class="w-full mt-8" />
                            <vs-input icon-pack="feather" v-model="lng" icon="icon-map" label-placeholder="Longitude" class="w-full mt-8" />
                            <template>
                              <div id="app">
                                
                              </div>
                            </template>
                          </vs-popup>
                        </div>
                    </div>
                </tab-content>

                <!-- tab 2 content -->
                <tab-content title="Pengaturan Toko" class="mb-3">
                    <div class="vx-row">
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Judul Toko" class="w-full mt-8" />

                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Tagline" class="w-full mt-8" />

                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Nomor Whatsapp" class="w-full mt-8" />

                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Whatsapp Greeting" class="w-full mt-8" />

                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Maksimal Jarak Kirim" class="w-full mt-8" />

                            <label class="text-sm mt-8 mb-3 flex">Whatsapp Checkout</label>
                            <vs-radio v-model="shiping" color="success" class="mr-5" vs-value="free">Free</vs-radio>
                            <vs-radio v-model="shiping" color="success" class="mr-5" vs-value="flat">Flat</vs-radio>
                            <vs-radio v-model="shiping" color="success" class="mr-5" vs-value="radius">Radius</vs-radio>
                            <vs-radio v-model="shiping" color="success" class="mr-5" vs-value="rajaongkir">Rajaongkir</vs-radio>

                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Biaya Kirim Sama Rata" class="w-full mt-8" />

                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Biaya Kirim Berdasarkan Radius" class="w-full mt-8" />

                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Link Facebook Page" class="w-full mt-8" />

                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Instagram Username" class="w-full mt-8" />


                        </div>
                        <div class="vx-col md:w-1/2 w-full mt-5">
                            <img src="@/assets/images/pages/shop.png" width="300px" class="mx-auto flex max-w-full">
                        </div>
                    </div>
                </tab-content>

                <!-- tab 3 content -->
                <tab-content title="Pengaturan Tambahan" class="mb-5">
                    <div class="vx-row">
                        <div class="vx-col md:w-1/2 w-full">
                            <span class="text-sm mb-2 flex">Beli Via Whatsapp</span>
                            <vs-switch color="success" v-model="whatsappCheckout" icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash">
                              <span slot="on">Aktif</span>
                              <span slot="off">Non Aktif</span>
                            </vs-switch>

                            <label class="text-sm mt-8 flex">Pilihan Pembayaran</label>
                            <vs-checkbox v-model="payment" class="mt-2" color="success" vs-value="bank">Bank</vs-checkbox>
                            <vs-checkbox v-model="payment" class="mt-2" color="success" vs-value="ratapay">Ratapay</vs-checkbox>
                        </div>
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Facebook Pixel" class="w-full mt-8" />
                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Google Tag Manager" class="w-full mt-8" />
                            <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Google Analytic" class="w-full mt-8" />
                        </div>
                    </div>
                </tab-content>
            </form-wizard>
          </vs-popup>
      </vs-popup>
</template>

<script>

export default {
  props: {
    isPopupActive: {
      required: true
    }
  },
  data () {
    return {
      viewEditPaket: false
    }
  },
  watch: {
    isPopupActive () {
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    isPopupActiveLocal: {
      get () {
        return this.isPopupActive
      },
      set (val) {
        if (!val) {
          this.$emit('closePopup')
          this.isPopupActive = false
        }
      }
    }
  },
  methods: {
    EditPaket () {
      this.togglePopup(true)
      this.$emit('closePopup')
      this.isPopupActive = false
    },
    
    togglePopup (val = false) {
      this.viewEditPaket = val
    }
  }
}
</script>
