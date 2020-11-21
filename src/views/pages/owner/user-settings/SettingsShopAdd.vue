<template>
  <vx-card no-shadow>
    <vs-row vs-w="12">
    
  <!-- Logo -->
  <vs-col vs-type="flex-left" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12">
          
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="mt-12 w-full"><b>Logo</b></span>
          <div>
              <vs-upload automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
            <!-- <input type="file" class="hidden" ref="update_avatar_input" @change="update_avatar" accept="image/*"> -->

            <!-- Toggle comment of below buttons as one for actual flow & currently shown is only for demo -->
            
            <!-- <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Ganti Logo</vs-button> -->
            <vs-button type="border" class="mr-4">Ganti Logo</vs-button>

            <vs-button type="border" color="danger">Hapus Logo</vs-button>
            </div>
  </vs-col>

<!-- Popup -->
<vs-popup class="holamundo" title="Google Maps" :active.sync="maps">
                              <vs-input icon-pack="feather" v-model="lat" icon="icon-map" label-placeholder="Latitude" class="w-full mt-8" />
                            <vs-input icon-pack="feather" v-model="lng" icon="icon-map" label-placeholder="Longitude" class="w-full mt-8" />
                            <template>
                              <div id="app">
                                
                              </div>
                            </template>
                          </vs-popup>

<vs-popup class="" title="Akun Ratapay" :active.sync="ratapay">
                              
                            <template>
                              <div id="app">
                                
                              </div>
                            </template>
                          </vs-popup>

  <!-- namaBisnis & alamat  -->
  <vs-col vs-type="flex-left" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="mt-8">
        <div class="vx-row">
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="mt-8 w-full"><b>Nama Bisnis</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Nama Bisnis" v-model="namaBisnis" class="w-full mt-6 mb-6" />
              </template>
            </div>
            <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Judul Toko</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Salam Pembuka" v-model="judulToko" class="w-full mt-6 mb-6" />
              </template>
            </div>
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Alamat</b></span>
              <vs-button color="primary" @click="maps=true" class="shadow ml-12" type="filled" size="small" >Google Maps</vs-button>
              <template>
                  <vs-textarea icon-pack="feather" icon="icon-user" placeholder="Alamat Lengkap" v-model="alamat" class="w-full mt-6 mb-6" />
              </template>
            </div>
            
            <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Kota</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Kota" v-model="kota" class="w-full mt-6 mb-6" />
              </template>
            </div>
            <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Provinsi</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Provinsi" v-model="provinsi" class="w-full mt-6 mb-6" />
              </template>
            </div>
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Nomor Whatsapp</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Nomor Whatsapp" v-model="noWa" class="w-full mt-6 mb-6" />
              </template>
            </div>
            
        </div>
  </vs-col>

  <!-- Intro  Pencarian -->
  <vs-col vs-type="flex-left" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="mt-5">
        <div class="vx-row">
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Tag Line</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Tag Line" v-model="tagLine" class="w-full mt-6 mb-6" />
              </template>
            </div>
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Whatsapp Greeting</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Whatsapp Greeting" v-model="waGreet" class="w-full mt-6 mb-6" />
              </template>
            </div>
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Link Facebook Page</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Link Facebook Page" v-model="fbPage" class="w-full mt-6 mb-6" />
              </template>
            </div>
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Instagram Username</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Instagram Username" v-model="igUsername" class="w-full mt-6 mb-6" />
              </template>
            </div>
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Facebook Pixel</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Facebook Pixel" v-model="fbPixel" class="w-full mt-6 mb-6" />
              </template>
            </div>
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Google Tag Manager</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Google Tag Manager" v-model="gtm" class="w-full mt-6 mb-6" />
              </template>
            </div>
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Google Analytics</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Google Analytics" v-model="ga" class="w-full mt-6 mb-6" />
              </template>
            </div>
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Sinkronisasi Akun Ratapay</b></span>
              <template>
                  <vs-button color="primary" @click="ratapay=true" class="bg-white shadow mt-6 mb-6 w-full" type="border" >Sinkron Ratapay</vs-button>
              </template>
            </div>
            
        </div>
  </vs-col>
  

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-12" :to="'/owner/user-settings'">Save Changes</vs-button>
      <vs-button class="ml-4 mt-12" type="border" :to="'/owner/user-settings'" color="warning">Cancel</vs-button>
    </div>
    </vs-row>  
  </vx-card>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  data () { 
    return {
      ratapay: false,
      alamat: '',
      lat: '',
      lng: '',
      kota: '',
      provinsi: '',
      noWa: '',
      judulToko: '',
      tagLine: '',
      waGreet: '',
      fbPage: '',
      igUsername: '',
      fbPixel: '',
      gtm: '',
      maps: false,
      ga: '',
      namaBisnis: '',
      salam: '',
      pencarian: ''
    }
  },
  methods:{
    successUpload () {
      this.$vs.notify({color:'success', title:'Upload Success', text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  },
  components: {
    FormWizard,
    TabContent
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/vuexy/pages/switch.scss";
</style>
