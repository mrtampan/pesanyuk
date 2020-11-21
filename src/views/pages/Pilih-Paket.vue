<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
      <vs-row vs-justify="center">
        <vs-col :packets="data" :key="indexitem" v-for="(data,indexitem) in packets" class="ml-1 mr-1" type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-card class="cardx">
            <div slot="header">
              <h3>
                {{ data.nama }}
              </h3>
              <h3>
                {{ data.harga }}
              </h3>
              
              <h3>
                {{ data.diskon }}
              </h3>
            </div>
            <div>
            <vs-list >
              <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Ratapay Integration" ></vs-list-item>
              <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Integrasi Facebook Pixel" ></vs-list-item>
              <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Gratis Support" ></vs-list-item>
              <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Gabung Komunitas Pesanyuk.id" ></vs-list-item>
            </vs-list>  
            </div>
            <div slot="footer">
              <vs-button color="primary" type="filled" @click.stop="Register(data)" >Pesan Sekarang</vs-button>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
</template>


<script>

import moduleDataPacket from '@/store/admin/paket/modulePaket.js' //penamaan moduleDataSupplier diganti sesual menui

import router from '@/router'

export default {
  data () {
    return {
    }
  },
  computed: {
    
    packets () { //ganti suppliers dengan menu yang baru
      return this.$store.state.dataPaket.packets
    }
    
  },
  methods:  {
    Register (data) {
      // alert(data.nama)
      
      this.$router.push(router.currentRoute.query.to || { path: `register/${data.id}` })

    }
  },
  created () {
    if (!moduleDataPacket.isRegistered) {
      this.$store.registerModule('dataPaket', moduleDataPacket) //dataSupplier ganti dengan dataNamamenu
      moduleDataPacket.isRegistered = true
    }
    this.$store.dispatch('dataPaket/fetchDataPacketItems')
  }
  
}
</script>
<style lang="scss">
.cardx {

  margin: 15px
}
</style>
