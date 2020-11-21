<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vs-popup class="uppercase" title="Edit Stock Pembelian " :active.sync="popupEdit">
      <template>
        <!---- <h4 class="mb-5 font-bold">Informasi Tambah Stok</h4> --->
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full font-bold">
            <span>Nama Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
          <p class="font-bold">
          {{ supplier_name }}
          </p>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full font-bold">
            <span>Email Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
          <p class="font-bold">
          {{ supplier_email }}
          </p>
           
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full font-bold">
            <span>Phone Supplier</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
          <p class="font-bold mb-2">
          {{ supplier_phone }}
          </p>
          <vs-button size="small" @click.stop="EditSupplier">
            <feather-icon icon="EditIcon" svgClasses="w-3 h-3 hover:text-success stroke-current" class=" mr-2"/> Edit Supplier
          </vs-button>
          
          </div>
        </div>
        
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full font-bold">
            <span>Catatan</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-textarea v-model="catatan" label="catatan" v-validate="'required'" width="auto" />
            <span class="text-danger text-sm" v-show="errors.has('catatan')">{{ errors.first('catatan') }}</span> <br>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full font-bold">
            <span>Nama Produk</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
          <p class="font-bold mb-2">{{ name_product }}</p>
          <vs-button class="mb-4" size="small" @click="EditProduck">
            <feather-icon icon="EditIcon" svgClasses="w-3 h-3 hover:text-success stroke-current" class=" mr-2"/> Edit Produck
          </vs-button>
          
            <vs-th sort-key="Jumlah">Jumlah Pembelian</vs-th>            
            <vs-th></vs-th>
            <vs-th sort-key="Beli">Harga Beli (Satuan)</vs-th>
            <vs-tr>
              <vs-td>
                <p><vs-input icon-pack="feather" icon="icon-box"  v-model="jumlah" class="mt-3 w-full" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="item-jumlah"/>
                <span class="text-danger text-sm" v-show="errors.has('item-jumlah')">{{ errors.first('item-jumlah') }}</span></p>
              </vs-td>
              <vs-td></vs-td>
              <vs-td>
                <p><vs-input icon-pack="feather" icon="icon-box"  v-model="beli" class="mt-3 w-full" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="beli" />
                <span class="text-danger text-sm" v-show="errors.has('beli')">{{ errors.first('beli') }}</span></p>
              </vs-td>
            </vs-tr>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" @click="submitItemData" >Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="popupActivo = false">Reset</vs-button>
          </div>
        </div>
      </template>
    </vs-popup>
</template>
