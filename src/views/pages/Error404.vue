<!-- =========================================================================================
    File Name: Error404.vue
    Description: 404 Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col flex items-center justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center">
            <img src="@/assets/images/pages/404.png" alt="graphic-404" class="mx-auto mb-10 max-w-full">
            <h1 class="sm:mx-0 mx-4 mb-5 text-5xl font-bold d-theme-heading-color">Maaf Gak ketemu :(</h1>
            <p class="sm:mx-3 mx-6 mb-6 sm:mb-10 text-lg d-theme-heading-color">Halaman yang Anda cari tidak ketemu, mungkin sudah berganti URL. Yuk balik ke Dashboard dan Anda bisa tanya kepada support kami</p>
            <vs-button size="large" color="black" onclick="window.history.back();">balik ke Dashboard</vs-button>
            <img src="@/assets/images/logo/full-logo.png" alt="pesanyuk.id" width="200px" class="mx-auto mt-20 max-w-full">
        </div>
    </div>
</template>
