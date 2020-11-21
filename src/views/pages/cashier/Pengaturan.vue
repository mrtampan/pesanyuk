<template>
  <vx-card no-shadow>
    <vs-row vs-w="12">
    
  <!-- namaBisnis & salam  -->
  <vs-col vs-type="flex-left" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12" class="mt-8">
        <div class="vx-row">
         <div class="vx-col flex-1" id="account-info-col-1">
            <table>
                <tr>
                <td class="font-semibold text-md">Nama Kasir</td>
                <td> {{ namaKasir }}</td>
              </tr>

              <tr>
                <td class="font-semibold text-md">Email</td>
                <td>{{ email }}</td>
              </tr>

              <tr>
                <td class="font-semibold text-md">No Hp</td>
                <td>{{ noHp }}</td>
              </tr>
            </table>
        </div>
        </div>
  </vs-col>
  
    <!-- Save & Reset Button -->    
      <vs-button icon-pack="feather" icon="icon-edit" class="mt-6 w-full" :to="'/cashier/setting/edit'">Edit</vs-button>      

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
