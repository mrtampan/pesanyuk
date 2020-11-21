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
            <vs-button type="border" class="mr-4">Ganti Foto</vs-button>

            <vs-button type="border" color="danger">Hapus Foto</vs-button>
            </div>
  </vs-col>

  <!-- namaBisnis & alamat  -->
  <vs-col vs-type="flex-left" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="mt-8">
        <div class="vx-row">
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="mt-8 w-full"><b>Nama Kurir</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Nama Kurir" v-model="namaCourier" class="w-full mt-6 mb-6" />
              </template>
            </div>
            <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Alamat</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Salam Pembuka" v-model="alamat" class="w-full mt-6 mb-6" />
              </template>
            </div>
        </div>
  </vs-col>

  <!-- Intro  Pencarian -->
  <vs-col vs-type="flex-left" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="mt-5">
        <div class="vx-row">
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>No Whatsapp</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="No Whatsapp" v-model="noWa" class="w-full mt-6 mb-6" />
              </template>
            </div> 
        </div>
  </vs-col>
  

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-12" :to="'/courier/setting'">Save Changes</vs-button>
      <vs-button class="ml-4 mt-12" type="border" :to="'/courier/setting'" color="warning">Cancel</vs-button>
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
      alamat: '',
      namaCourier: '',
      noWa: ''
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
