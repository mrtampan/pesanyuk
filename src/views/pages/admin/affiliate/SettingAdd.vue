<template>
  <vx-card no-shadow>
    <vs-row vs-w="12">
    
  <!-- fitur & alamat  -->
  <vs-col vs-type="flex-left" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="mt-8">
        <div class="vx-row">
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="mt-8 w-full"><b>Fitur</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Fitur" v-model="fitur" class="w-full mt-6 mb-6" />
              </template>
            </div>
            <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Providers</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Providers" v-model="providers" class="w-full mt-6 mb-6" />
              </template>
            </div>
            <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Email</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Email" v-model="email" class="w-full mt-6 mb-6" />
              </template>
            </div>
            <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Meta Tags</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-user" placeholder="Meta Tags" v-model="tags" class="w-full mt-6 mb-6" />
              </template>
            </div>
          <div class="vx-col w-1/2">
              <span vs-type="flex-left" vs-justify="center" vs-align="center" class="w-full"><b>Persen</b></span>
              <template>
                  <vs-input icon-pack="feather" icon="icon-percent" placeholder="Persen" v-model="persen" class="w-full mt-6 mb-6" />
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
      tags: '',
      providers: '',
      persen: '',
      email: '',
      fitur: ''
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
