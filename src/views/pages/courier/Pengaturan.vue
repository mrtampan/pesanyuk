<!-- =========================================================================================
  File Name: UserView.vue
  Description: User View page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-view">

      <vx-card title="Pengaturan Toko" class="mb-base">

        <!-- Avatar -->
        <div class="vx-row">

          <!-- Avatar Col -->
          <div class="vx-col" id="avatar-col">
            <div class="img-container mb-4">
              <img :src="'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4'" class="rounded w-full" />
            </div>
          </div>

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1">
            <table>
              <tr>
              <td class="w-full md:w-1/2">
                <tr>
                <td class="font-semibold text-md">Nama Kurir</td>
                <td> {{ namaCourier }}</td>
              </tr>

              <tr>
                <td class="font-semibold text-md">Alamat</td>
                <td>{{ alamat }}</td>
              </tr>

              <tr>
                <td class="font-semibold text-md">Nomor Whatsapp</td>
                <td>{{ noWa }}</td>
              </tr>
              <h2 class="mb-6"> Kategori </h2>
              <tr>
                <td class="font-bold">
                  <vs-checkbox v-model="category" vs-value="doc">Dokumen</vs-checkbox>
                </td>
                <td class="font-bold">
                  <vs-checkbox v-model="category" vs-value="food">Makanan</vs-checkbox>
                  </td>
                <td class="font-bold">
                  <vs-checkbox v-model="category" vs-value="medicine">Obat Obatan</vs-checkbox>
                  </td>
                <td class="font-bold">
                  <vs-checkbox v-model="category" vs-value="style">Baju Dan Accessories</vs-checkbox>
                  </td>
                <td class="font-bold">
                  <vs-checkbox v-model="category" vs-value="electronics">Elektronik</vs-checkbox>
                  </td>
                <td class="font-bold">
                  <vs-checkbox v-model="category" vs-value="jewelry">Perhiasan</vs-checkbox>
                </td>
              </tr>
              </td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->
        </div>
 <div class="vx-col w-full flex" id="account-manage-buttons">
            <vs-button icon-pack="feather" icon="icon-edit" class="mr-6 w-1/4" :to="'/courier/setting/edit'">Edit</vs-button>
            <vs-button type="border" color="danger" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRecord">Delete</vs-button>
          </div>
</vx-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      
      namaCourier: '',
      alamat: '',
      noWa: '',
      category: ['user', 'wa']
    }
  }
}
</script>

<style lang="scss">
#avatar-col {
  width: 10rem;
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: .8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width:370px) {
          display: block;
        }
      }
    }
  }
}

// #account-info-col-1 {
//   // flex-grow: 1;
//   width: 30rem !important;
//   @media screen and (min-width:1200px) {
//     & {
//       flex-grow: unset !important;
//     }
//   }
// }


@media screen and (min-width:1201px) and (max-width:1211px),
only screen and (min-width:636px) and (max-width:991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }

  // #account-manage-buttons {
  //   width: 12rem !important;
  //   flex-direction: column;

  //   > button {
  //     margin-right: 0 !important;
  //     margin-bottom: 1rem;
  //   }
  // }

}

</style>
