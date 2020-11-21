<!-- =========================================================================================
    File Name: Pembayaran Success.vue
    Description: Pembayaran Success Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div class="h-screen flex w-full bg-payment relative">
        <div class="vx-col absolute inset-x-0 bottom-0 mx-auto text-center">
          <div class="fill-row-loading">
            <div
              :class="{'activeLoading':activeLoading}"
              v-for="type in types"
              type="filled"
              :color="colorLoading"
              :key="type"
              :id="[`loading-${type}`]"
              class="vs-con-loading__container loading-example">
            </div>
          </div>
          <p class="text-sm">Toko Anda sedang kami siapkan</p>
            <img src="@/assets/images/logo/full-logo.png" alt="pesanyuk.id" width="200px" class="mx-auto mt-5 max-w-full">
            <h1 class="sm:mx-0 mx-4 mb-3 text-5xl font-bold d-theme-heading-color">Yay ! Pembayaran Berhasil</h1>
            <p class="sm:mx-0 my-4 text-lg d-theme-heading-color">Silahkan tunggu <b class="text-danger">5 detik</b> Anda akan di teruskan ke <a href="#" class="font-bold underline text-black">Halaman Pengaturan Bisnis</a></p>
            <p class="sm:mx-0 my-4 mb-10 text-lg d-theme-heading-color">apabila halaman tidak berubah silahkan <a href="#" class="font-bold text-danger underline">KLIK DISINI</a></p>
        </div>
    </div>
</template>

<script>
export default {
  data:() => ({
    types:['default'],
    activeLoading:false,
    colorLoading: '#333333'
  }),
  mounted () {
    this.types.forEach((type) => {
      this.$vs.loading({
        container: `#loading-${type}`,
        type,
        text:type
      })
    })
  }
}
</script>

<style lang="scss">
.fill-row-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .loading-example {
    background: none;
    width: 120px;
    float: left;
    height: 120px;
    margin: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    h4 {
      display: none;
    }
    &.activeLoading {
      opacity: 0 !important;
      transform: scale(0.5);
    }
  }
}
</style>
