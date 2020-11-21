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
                <td class="font-semibold text-md">Fitur</td>
                <td> {{ fitur }}</td>
              </tr>
              <tr>
                <td class="font-semibold text-md">Email</td>
                <td>{{ email }}</td>
              </tr>
              <tr>
                <td class="font-semibold text-md">Persen</td>
                <td>{{ persen }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Providers</td>
                <td>{{ providers }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Meta Tags</td>
                <td>{{ tags }}</td>
              </tr>
              </td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->
        </div>
 <div class="vx-col w-full flex" id="account-manage-buttons">
            <vs-button icon-pack="feather" icon="icon-edit" class="mr-6 w-1/4" :to="'/owner/shop-settings/shop-add'">Edit</vs-button>
            <vs-button type="border" color="danger" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRecord">Delete</vs-button>
          </div>
</vx-card>

</div>
</template>

<script>
export default {
  data () {
    return {
      tags: '',
      providers: '',
      persen: '',
      email: '',
      fitur: ''
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
