<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
  >
    <div
      class="vx-col sm:w-2/3 md:w-2/3 lg:w-4/5 xl:w-4/5 sm:m-0 m-4 code toggler"
    >
      <vx-card>
        <div slot="no-body" class="full-page-bg-color d-theme-dark-bg">
          <vs-row vs-w="12">
            <div v-if="!isMobile()">
              <desktop>
                <vs-col vs-type="flex" vs-order="2" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="12" >
                  <div class="px-12 pt-12 register-tabs-container w-full mt-12">
                    <vx-card>
                            <p class="text-grey mb-3">Kupon</p>
                            <div class="flex justify-between">
                                <span class="font-semibold">Py-001</span>
                                <span class="font-medium text-primary cursor-pointer">Menerapkan</span>
                            </div>

                            <vs-divider />

                            <h5 class="font-semibold mb-3">Yang Didapatkan</h5>
                            <div class="flex justify-between mb-2">
                                
                <vs-list class="product-sales-meta-list px-0 ">
                  <vs-list-item class="p-0 border-none" title="Pembayaran cod dan transfer" icon-pack="feather" icon="icon-circle" />
                  <vs-list-item class="p-0 border-none" title="checkout via wa" icon-pack="feather" icon="icon-circle" />
                  <vs-list-item class="p-0 border-none" title="checkout via wa" icon-pack="feather" icon="icon-circle"/>                  
                  <vs-list-item class="p-0 border-none" title="Pembayaran cod dan transfer" icon-pack="feather" icon="icon-circle" />
                  <vs-list-item class="p-0 border-none" title="checkout via wa" icon-pack="feather" icon="icon-circle" />
                  <vs-list-item class="p-0 border-none" title="checkout via wa" icon-pack="feather" icon="icon-circle"/>                  
                </vs-list>
                            </div>

                            <vs-divider />

                            <div class="flex justify-between font-bold mb-3" >
                                <h5><span>Total</span></h5>
                                <h4>
                                <span color="warning" class="amount"> Rp. 5.000.000 </span></h4>
                            </div>
                        </vx-card>
                  </div>
                </vs-col>

                <vs-col vs-type="flex" vs-justify="center" order="2" vs-align="center" vs-lg="8" vs-sm="8" vs-xs="12" >
                  <div class="px-12 pt-12 register-tabs-container">
                      <vs-col vs-w="2" class="relative">
              <p class="text-dark-light mb-4"><b>Invoice ID : PY-00001</b></p>    
            </vs-col>
            
                    <div class="vx-card__title mb-4">
                      <img
                        src="@/assets/images/pages/login.png"
                        alt="login"
                        class="mx-auto w-1/3"
                      />
                        <h2 vs-justify="center" vs-align="center" class="mb-1 text-black">Paket : <b>Untung Selamanya</b></h2>
                      
                      <h5 vs-justify="center" vs-align="center">
                        Bayar Sekarang Dapatkan Untung Selamanya
                      </h5>
                    </div>
                    <div class="clearfix">
                      <div class="vx-col w-full mt-12">
                        <vs-input
                          v-validate="'required|email'"
                          data-vv-validate-on="blur"
                          name="email"
                          type="email"
                          color="dark"
                          label-placeholder="Email"
                          placeholder="Email"
                          v-model="email"
                          icon-pack="feather"
                          icon="icon-mail"
                          class="w-full mt-6"
                        />
                        <span class="text-danger text-sm">{{
                          errors.first("email")
                        }}</span>
                      </div>
                      <div class="vx-col w-full mt-12">
                          <h4><span class="text-dark"> Note </span></h4>
                          <vs-textarea counter="20" label="Counter: 20" :counter-danger.sync="counterDanger" v-model="textarea" />
                      </div>
                      <vs-button
                        icon-pack="feather"
                        to=""
                        icon="icon-credit-card"
                        color="dark"
                        class="float-right mt-6 w-full"
                        >Proses Pembayaran</vs-button
                      >
                      <span
                        >Apakah Sudah Memiliki Akun Ratapay ?
                        <a href="#" class="hover:underline">Login</a></span
                      >
                    </div>
                  </div>
                </vs-col>
              </desktop>
            </div>
            <div v-else>
              <mobile>

              </mobile>
            </div>
          </vs-row>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    isMobile () {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    validateForm () {
      return (
        !this.errors.any() &&
        this.displayName !== '' &&
        this.email !== '' &&
        this.password !== '' &&
        this.confirm_password !== '' &&
        this.isTermsConditionAccepted === true &&
        this.nameBisnis !== '' &&
        this.Subdomain !== ''
      )
    }
  }
}
</script>
<style lang="scss">
.register-tabs-container {
  min-height: 517px;

  .con-tab {
    padding-bottom: 23px;
  }
}
</style>
