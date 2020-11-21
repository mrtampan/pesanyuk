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
                <td class="font-semibold text-md">Nama Bisnis</td>
                <td> {{ namaBisnis }}</td>
              </tr>

              <tr>
                <td class="font-semibold text-md">Alamat</td>
                <td>{{ alamat }}</td>
              </tr>

              <tr>
                <td class="font-semibold text-md">Provinsi</td>
                <td>{{ provinsi }}</td>
              </tr>

              <tr>
                <td class="font-semibold text-md">Nomor Whatsapp</td>
                <td>{{ noWa }}</td>
              </tr>


              <tr>
                <td class="font-semibold text-md">Link Facebook Page</td>
                <td>{{ fbPage }}</td>
              </tr>

              <tr>
                <td class="font-semibold text-md">Google Tag Manager</td>
                <td>{{ gtm }}</td>
              </tr>
              <tr>
                <td class="font-semibold text-md">Instagram Username</td>
                <td>{{ igUsername }}</td>
              </tr>
              </td>
              <td class="w-full md:w-1/2">
              <tr>
                <td class="font-semibold text-md">Judul Toko</td>
                <td>{{ judulToko }}</td>
              </tr>
              
              <tr>
                <td class="font-semibold text-md">Kota</td>
                <td> {{ kota }}</td>
              </tr>
              <tr>
                <td class="font-semibold text-md">Tag Line</td>
                <td>{{ tagLine }}</td>
              </tr>
              <tr>
                <td class="font-semibold text-md">Whatsapp Greeting</td>
                <td>{{ waGreet }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Facebook Pixel</td>
                <td>{{ fbPixel }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Google Analytics</td>
                <td>{{ ga }}</td>
              </tr>
              <ul class="centerx">
                <li>
                  
                </li>
                <li>
                  
                </li>
                </ul>
              <tr>
                <td class="font-bold">
                  <vs-checkbox v-model="checkout" vs-value="wa">Whatsapp Checkout</vs-checkbox>
                </td>
                <td class="font-bold">
                  <vs-checkbox v-model="checkout" vs-value="user">User Checkout</vs-checkbox>
                </td>
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

 <div class="vx-row">
        <div class="vx-col lg:w-1/2 w-full">
          <vx-card title="Tipe Tarif" class="mb-base">
          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">
                  
                  <span>Tipe Tarif Per Kilometer</span>
                  <vs-input icon-pack="feather" icon="icon-dollar-sign" placeholder="Harga Per Kilometer" v-show="tipeKm" v-model="PriceKm" class="w-full mt-3 mb-5" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="item-biayaKm" />
                  <span span class="text-danger text-sm" v-show="errors.has('item-biayaKm')">{{ errors.first('item-biayaKm') }}</span>
                </td>
                <td>                
                  <vs-switch color="success" v-model="tipeKm">
                    <span slot="on">Ya</span>
                    <span slot="off">Tidak</span>
                  </vs-switch>              
                </td>
              </tr>
                
              <tr>
                <td class="font-semibold">
                  <span>Tipe Tarif Flat</span>
                  <vs-input icon-pack="feather" icon="icon-dollar-sign" placeholder="Harga Flat" v-show="tipeFlat" v-model="priceFlat" class="w-full mt-3 mb-5" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="item-biayaFlat" />
                  <span span class="text-danger text-sm" v-show="errors.has('item-biayaFlat')">{{ errors.first('item-biayaFlat') }}</span>
                </td>
                <td>
                  <vs-switch color="success" v-model="tipeFlat">
                    <span slot="on">Ya</span>
                    <span slot="off">Tidak</span>
                  </vs-switch>
                </td>
              </tr>
                  
              <tr>
                <td class="font-semibold">
                  <span>Tipe Tarif Radius</span>
                  <vs-input icon-pack="feather" icon="icon-dollar-sign" placeholder="Harga per Radius" v-show="tipeRad" v-model="priceRad" class="w-full mt-3" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="item-biayaRadius" />
                  <span span class="text-danger text-sm" v-show="errors.has('item-biayaRadius')">{{ errors.first('item-biayaRadius') }}</span>
                </td>
                <td>
                  <vs-switch color="success" v-model="tipeRad">
                    <span slot="on">Ya</span>
                    <span slot="off">Tidak</span>
                  </vs-switch>
                </td>
              </tr>
                  
            </table>
          </div>
        </vx-card>
      </div>
        <div class="vx-col lg:w-1/2 w-full">
          <vx-card title="Waktu Buka" class="mb-base">              
              <table>
              <tr>
                <td class="font-semibold">Senin - Jumat</td>
                <td><vs-switch color="success" v-model="hariBuka">
                    <span slot="on">Ya</span>
                    <span slot="off">Tidak</span>
                  </vs-switch>
                  <td>
                    <ul class="demo-alignment">
                      <li>
                          <vs-checkbox  v-show="hariBuka" v-model="jamBuka1" vs-value="pagi">08.00 - 16.00</vs-checkbox>
                      </li>
                      <li>
                          <vs-checkbox v-show="hariBuka" v-model="jamBuka2" vs-value="siang">10.00 - 18.00</vs-checkbox>
                      </li>
                      <li>
                          <vs-checkbox v-show="hariBuka" v-model="jamBuka3" vs-value="sore">14.00 - 23.00</vs-checkbox>
                      </li>
                      <li>
                          <vs-checkbox v-show="hariBuka" v-model="jamBuka4" vs-value="malam">17.00 - 02.00</vs-checkbox>
                      </li>
                    </ul>
                  </td>
              </tr>
              <tr>
                <td class="font-semibold">Senin - Minggu</td>
                <td><vs-switch color="success" v-model="hariBukas">
                    <span slot="on">Ya</span>
                    <span slot="off">Tidak</span>
                  </vs-switch>
                  <td>
                    <ul class="demo-alignment">
                      <li>
                          <vs-checkbox  v-show="hariBukas" v-model="jamBukas1" vs-value="pagi">08.00 - 16.00</vs-checkbox>
                      </li>
                      <li>
                          <vs-checkbox v-show="hariBukas" v-model="jamBukas2" vs-value="siang">10.00 - 18.00</vs-checkbox>
                      </li>
                      <li>
                          <vs-checkbox v-show="hariBukas" v-model="jamBukas3" vs-value="sore">14.00 - 23.00</vs-checkbox>
                      </li>
                      <li>
                          <vs-checkbox v-show="hariBukas" v-model="jamBukas4" vs-value="malam">17.00 - 02.00</vs-checkbox>
                      </li>
                    </ul>
                  </td>
              </tr>
              <tr>
                <td class="font-semibold">Jumat - Minggu</td>
                <td><vs-switch color="success" v-model="hariBukaz">
                    <span slot="on">Ya</span>
                    <span slot="off">Tidak</span>
                  </vs-switch>
                  <td>
                    <ul class="demo-alignment">
                      <li>
                          <vs-checkbox  v-show="hariBukaz" v-model="jamBukaz1" vs-value="pagi">08.00 - 16.00</vs-checkbox>
                      </li>
                      <li>
                          <vs-checkbox v-show="hariBukaz" v-model="jamBukaz2" vs-value="siang">10.00 - 18.00</vs-checkbox>
                      </li>
                      <li>
                          <vs-checkbox v-show="hariBukaz" v-model="jamBukaz3" vs-value="sore">14.00 - 23.00</vs-checkbox>
                      </li>
                      <li>
                          <vs-checkbox v-show="hariBukaz" v-model="jamBukaz4" vs-value="malam">17.00 - 02.00</vs-checkbox>
                      </li>
                    </ul>
                  </td>
                
              </tr>
              </table>
          <!-- /Information - Col 2 -->
         
      </vx-card>    
      </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      
      intro: '',
      namaBisnis: '',
      pencarian: '',
      salam: '',
      tipeKm: 'false',
      PriceKm: '',
      tipeFlat: 'false',
      priceFlat: '',
      tipeRad: 'false',
      priceRad: '',
      hariBuka: 'false',
      jamBuka1: '',
      jamBuka2: '',
      jamBuka3: '',
      jamBuka4: '',
      hariBukas: 'false',
      jamBukas1: '',
      jamBukas2: '',
      jamBukas3: '',
      jamBukas4: '',
      hariBukaz: 'false',
      jamBukaz1: '',
      jamBukaz2: '',
      jamBukaz3: '',
      jamBukaz4: '',
      checkout: ['user', 'wa']
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
