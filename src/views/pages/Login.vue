<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2 text-center">
              <img src="@/assets/images/pages/login-icon.png" alt="login" width="300px" class="mx-auto mb-5">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 py-10 login-tabs-container">

                <div class="vx-card__title mb-5">
                  <div class="text-center mb-10">
                    <img src="@/assets/images/logo/full-logo.png" alt="login" width="200px" class="mx-auto">
                  </div>
                  <h3 class="mb-4 text-black font-bold tracking-wide">Get Your Profit Business Starting From Now !</h3>
                  <p class="mb-5 text-base">Selamat datang, silahkan login dengan akun Anda</p>
                </div>

                <div>
                  <vs-input
                    v-validate="'required|email|min:3'"
                    v-on:keyup.enter="loginJWT"
                    data-vv-validate-on="blur"
                    name="email"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder="Email"
                    v-model="email"
                    class="w-full"/>
                <span class="text-danger text-sm">{{ errors.first('email') }}</span>

                <vs-input
                    data-vv-validate-on="blur"
                    v-validate="'required|min:6|max:10'"
                    v-on:keyup.enter="loginJWT"
                    type="password"
                    name="password"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    label-placeholder="Password"
                    v-model="password"
                    class="w-full mt-6" />
                <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                  <div class="flex flex-wrap justify-between my-5 mb-10">
                      <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Ingat Saya</vs-checkbox>
                      <router-link to="">Lupa Password?</router-link>
                  </div>
                  <vs-button  type="border" to="/pages/packets">Daftar</vs-button>
                  <vs-button @click="loginJWT" class="float-right">Masuk</vs-button>

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
export default {
  data () {
    return {
      email: 'owner1@gmail.com',
      password: '12345678',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.email !== '' && this.password !== ''
    }
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        this.$vs.loading()

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
    loginJWT () {

      if (!this.checkLogin()) return

      // Loading
      this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password
        }
      }

      this.$store.dispatch('auth/loginJWT', payload)
        .then(() => { this.$vs.loading.close() })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    }
  }
}


</script>


<style lang="scss">

</style>
