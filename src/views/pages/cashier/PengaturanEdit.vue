<template>
  <vx-card no-shadow>
    <vs-row vs-w="12">
    
  <!-- namaBisnis & salam  -->
  <vs-col vs-type="flex-left" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="mt-8">
        <div class="vx-row">
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="mt-12 w-full"><b>Nama Kasir</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Nama Kasir" v-model="nama" class="mt-8 w-full" />
              </template>
            </div>
            <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="mt-12 w-full"><b>Email</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Salam Pembuka" v-model="email" class="mt-8 w-full" />
              </template>
            </div>
        </div>
  </vs-col>

  <!-- Intro  Pencarian -->
  <vs-col vs-type="flex-left" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="mt-8">
        <div class="vx-row">
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="mt-12 w-full"><b>Password</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" type="password" placeholder="Password" v-model="password" class="mt-8 w-full" />
              </template>
            </div>
            <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="mt-12 w-full"><b>No Hp</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="+62" v-model="hp" class="mt-8 w-full" />
              </template>
            </div>
        </div>
  </vs-col>
  
    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-12">Save Changes</vs-button>
      <vs-button class="ml-4 mt-12" type="border" color="warning" to="/cashier/setting">Cancel</vs-button>
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
      nama: '',
      email: '',
      password: '',
      hp: '+62'
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
