<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-register">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card class="my-10">
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2 text-center">
              <img src="@/assets/images/pages/login-icon.png" alt="login" width="300px" class="mx-auto mb-5">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 py-10 login-tabs-container">

                <div class="vx-card__title mb-5">
                  <div class="text-center mb-5">
                    <img src="@/assets/images/logo/full-logo.png" alt="login" width="200px" class="mx-auto mb-1">
                    <h4 class="mb-4 text-black font-bold tracking-wide">Boost Your Business With Pesanyuk.id</h4>
                  </div>

                  <vs-list v-if="paketData">
                    <vs-list-header icon-pack="feather" icon="icon-award"
                     :title="`${this.pakets.data.nama} (Rp ${this.pakets.data.harga}) * ${this.pakets.data.waktu}`"></vs-list-header>
                  </vs-list>
                  <div class="vx-row no-gutter">
                    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/2">
                      <vs-list >
                        <vs-list-item icon-pack="feather" icon="icon-check" subtitle="100% Web Based Software" ></vs-list-item>
                        <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Unlimited Produk" ></vs-list-item>
                        <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Unlimited Order" ></vs-list-item>
                        <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Checkout System" ></vs-list-item>
                      </vs-list>
                    </div>
                    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/2">
                      <vs-list >
                        <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Ratapay Integration" ></vs-list-item>
                        <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Integrasi Facebook Pixel" ></vs-list-item>
                        <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Gratis Support" ></vs-list-item>
                        <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Gabung Komunitas Pesanyuk.id" ></vs-list-item>
                      </vs-list>
                    </div>
                  </div>
                  <p class="mb-5 mt-10 text-base">Lengkapi data di bawah ini !</p>
                </div>

                <div>
                  <div class="vx-col w-full">
                    <vs-input
                      v-validate="'required|alpha_dash|min:3'"
                      data-vv-validate-on="blur"
                      label-placeholder="Name"
                      name="name"
                      placeholder="Name"
                      v-model="name"
                      icon-pack="feather"
                      icon="icon-user"
                      class="w-full"
                    />
                    <span class="text-danger text-sm">{{
                      errors.first("name")
                    }}</span>
                  </div>
                  <div class="vx-col w-full">
                    <vs-input
                      v-validate="'required|email'"
                      data-vv-validate-on="blur"
                      name="email"
                      type="email"
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
                  <div class="vx-row">
                    <div class="vx-col w-1/2">
                      <vs-input
                        ref="password"
                        type="password"
                        data-vv-validate-on="blur"
                        v-validate="'required|min:6|max:10'"
                        name="password"
                        label-placeholder="Password"
                        placeholder="Password"
                        v-model="password"
                        icon-pack="feather"
                        icon="icon-lock"
                        class="mt-6 w-full"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("password")
                      }}</span>
                    </div>
                    <div class="vx-col w-1/2">
                      <vs-input
                        type="password"
                        v-validate="'min:6|max:10|confirmed:password'"
                        data-vv-validate-on="blur"
                        data-v-as="password"
                        name="confirm_password"
                        label-placeholder="Confirm Password"
                        placeholder="Confirm Password"
                        v-model="confirm_password"
                        icon-pack="feather"
                        icon="icon-lock"
                        class="mt-6 w-full"
                      />
                      <span class="text-danger text-sm">{{
                        errors.first("confirm_password")
                      }}</span>
                    </div>
                  </div>

                  <div class="vx-col mt-3">
                    <span class=""><b>Gunakan Kupon : </b></span>
                    <vs-row vs-w="12">
                    <vs-col vs-type="flex" vs-w="6">
                    <vs-input
                      name="coupon"
                      label-placeholder="Gunakan Kuponmu"
                      placeholder="Kupon"
                      v-model="coupon"
                      icon-pack="feather"
                      icon="icon-scissors"
                      class="mt-5 mb-5"
                    />
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="6">
                    <vs-button class="mt-5 mb-5" color="primary" @click="checkCoupon" type="filled" icon="search">Gunakan</vs-button>
                    </vs-col>
                    </vs-row>
                    <span class="text-danger text-sm">{{
                      errors.first("coupon")
                    }}</span>
                  </div>

                  <vs-checkbox
                    v-model="isTermsConditionAccepted"
                    class="mt-3 mb-10"
                    >
                    Saya setuju dengan <a href="#" class="hover:underline"> syarat & ketentuan </a> dan <a href="#" class="hover:underline"> kebijakan privasi</a>
                    </vs-checkbox>
                    <vx-card
                      class="mb-5 border-dotted border-danger  p-0"
                      noShadow>
                      
                      <vs-list v-if="paketData">
                        <vs-list-header title="Rincian Pesanan :"></vs-list-header>
                        <vs-list-item :subtitle="`${this.pakets.data.nama} (Rp ${this.pakets.data.harga}) * ${this.pakets.data.waktu}`">
                        {{ pakets.data.harga }}
                        </vs-list-item>
                        <vs-list-item subtitle="Diskon">- {{ pakets.data.diskon }}</vs-list-item>
                        <vs-list-item v-if="couponData" subtitle="Kupon">-  {{ coupons.data.diskon }}</vs-list-item>
                        <vs-list-item v-if="!couponData" title="Total"> {{ pakets.data.harga-pakets.data.diskon }} </vs-list-item>
                        <vs-list-item v-else title="Total"> {{ pakets.data.harga-pakets.data.diskon-coupons.data.diskon }} </vs-list-item>
                      </vs-list>
                      
                   </vx-card>
                  <!---
                  <vx-card
                      card-background="#fffbe2"
                      content-color="#fff"
                      class="mb-5 border-dotted border-danger p-0"
                      noShadow>
                      <vs-checkbox
                      class="text-black font-bold mb-1 text-lg"
                      icon-pack="feather" icon="icon-plus" >
                      Pesanyuk Business (12 Bulan)
                      </vs-checkbox>
                      <p class="text-danger font-bold underline">HANYA Dengan Menambahkan 200.000 Rupiah!</p>
                      <p class="text-black text-sm">Harga normal Pesanyuk Business 12 bulan adalah Rp 1.090.000. Namun HANYA melalui halaman ini Anda bisa mendapatkan tambahan 6 bulan (total jadi 12 bulan) TANPA biaya mahal, HANYA menambahkan 200.000 saja. Silahkan centang checkbox diatas!</p>
                  </vx-card>
                  
                  ----->
                  <div class="text-center item-center">
                  <!---
                  
                    <p class="text-lg mb-3 text-black float-right">Total yang harus dibayar <b>Rp 869.264</b></p>
                  ----->
                    <vs-button class="mx-auto mb-3 w-full" type="relief" @click="registerUserJWt" :disabled="!validateForm" size="large" color="primary" icon-pack="feather" icon="icon-arrow-right" icon-after >Lanjut ke pembayaran</vs-button>
                    <span>Apakah Sudah Memiliki Akun ? <a href="/pages/login" class="hover:underline">Login</a></span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>

import axios from '@/axios.js'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      coupon: '',
      couponId: '',
      isTermsConditionAccepted : true,
      pakets : {},
      coupons : {},
      paketData : false,
      couponData : false
    }
  },
  created () {
    axios.get(`/api/v1/admin/packet/show/${this.$route.params.id}`).then(response => {
      this.pakets = response.data
      this.paketData = true
    })
  },
  computed: {
    validateForm () {
      return (
        !this.errors.any() &&
        this.name !== '' &&
        this.email !== '' &&
        this.password !== '' &&
        this.confirm_password !== '' &&
        this.isTermsConditionAccepted === true
      )
    }
  },
  methods: {
    checkCoupon () {
      const obj = {
        coupon : this.coupon
      }
      axios.post('/api/v1/admin/coupon/show/id', obj).then(response => {
        this.coupons = response.data
        this.couponData = true
      })
    },
    checkLogin () {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },

    registerUserJWt () {
      // If form is not validated or user is already login return
      this.$vs.loading()
      // if (!this.validateForm || !this.checkLogin()) return
      if (!this.couponData) {  
        const obj = {
          name : this.name,
          email : this.email,
          password : this.password,
          couponId : false,
          id_paket : this.pakets.data.id
        }
        axios.post('/api/v1/register', obj).then(response => {
          if (response.data.dataUrl.url) {
            window.location.replace(response.data.dataUrl.url)
          }
        })  
      } else {
        const obj = {
          name : this.name,
          email : this.email,
          password : this.password,
          couponId : this.coupons.data.id,
          id_paket : this.pakets.data.id
        }
        axios.post('/api/v1/register', obj).then(response => {
          if (response.data.dataUrl.url) {
            window.location.replace(response.data.dataUrl.url)
          }
        })
      }
      
      // const payload = {
      //   userDetails: {
      //     name : this.name,
      //     email : this.email,
      //     password : this.password,
      //     couponId : this.coupons.data.id,
      //     id_paket : this.pakets.data.id
      //   },

      //   notify: this.$vs.notify

      // }
      // this.$store.dispatch('auth/register', payload)
      //   .then(() => { this.$vs.loading.close() })
      //   .catch(error => {
      //     this.$vs.loading.close()
      //     this.$vs.notify({
      //       title: 'Error',
      //       text: error.message,
      //       iconPack: 'feather',
      //       icon: 'icon-alert-circle',
      //       color: 'danger'
      //     })
      //   })
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
