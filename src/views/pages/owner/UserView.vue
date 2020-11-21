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

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <div id="user-data" v-if="user_data">

      <vx-card title="Account" class="mb-base">

        <!-- Avatar -->
        <div class="vx-row">

          <!-- Avatar Col -->
          <div class="vx-col" id="avatar-col">
            <div class="img-container mb-4">
              <img :src="user_data.avatar" class="rounded w-full" />
            </div>
          </div>

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1">
            <table>
              <tr>
                <td class="font-semibold">Username</td>
                <td>{{ user_data.username }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Nama</td>
                <td>{{ user_data.name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Email</td>
                <td>{{ user_data.email }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Instagram</td>
                <td>{{ user_data.social_links.instagram }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Jenis kelamin</td>
                <td>{{ user_data.gender }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Status</td>
                <td>{{ user_data.status }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Peran</td>
                <td>{{ user_data.role }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Nama Bisnis</td>
                <td>{{ user_data.company }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Ulang Tahun</td>
                <td>{{ user_data.dob }}</td>
              </tr>
              <tr>
                <td class="font-semibold">No. HP</td>
                <td>{{ user_data.mobile }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
          <div class="vx-col w-full flex" id="account-manage-buttons">
            <vs-button icon-pack="feather" icon="icon-edit" class="mr-4" :to="{name: 'app-user-edit', params: { userId: $route.params.userId }}">Edit</vs-button>
            <vs-button type="border" color="danger" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRecord">Delete</vs-button>
          </div>

        </div>

      </vx-card>
      <!-- Permissions -->
      <vx-card>

        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="LockIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Izin</span>
            </div>
            <vs-divider />
          </div>
        </div>

        <div class="block overflow-x-auto">
          <table class="w-full permissions-table">
            <tr>
              <!--
                You can also use `Object.keys(Object.values(data_local.permissions)[0])` this logic if you consider,
                our data structure. You just have to loop over above variable to get table headers.
                Below we made it simple. So, everyone can understand.
               -->
              <th class="font-semibold text-base text-left px-3 py-2" v-for="heading in ['Module', 'Read', 'Write', 'Create', 'Delete']" :key="heading">{{ heading }}</th>
            </tr>

            <tr v-for="(val, name) in user_data.permissions" :key="name">
              <td class="px-3 py-2">{{ name }}</td>
              <td v-for="(permission, name) in val" class="px-3 py-2" :key="name+permission">
                <vs-checkbox v-model="val[name]" class="pointer-events-none" />
              </td>
            </tr>
          </table>
        </div>

      </vx-card>
    </div>
  </div>
</template>

<script>

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
