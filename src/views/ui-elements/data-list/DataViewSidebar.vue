<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>{{ Object.entries(this.data).length === 0 ? "TAMBAH" : "UBAH" }} DATA</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">

        <!-- Product Image -->
        <template v-if="dataImg">

          <!-- Image Container -->
          <div class="img-container w-64 mx-auto flex items-center justify-center">
            <img :src="dataImg" alt="img" class="responsive">
          </div>

          <!-- Image upload Buttons -->
          <div class="modify-img flex justify-between mt-5">
            <input type="file" class="hidden" ref="updateImgInput" @change="updateCurrImg" accept="image/*">
            <vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Update Image</vs-button>
            <vs-button type="flat" color="#999" @click="dataImg = null">Remove Image</vs-button>
          </div>
        </template>

        <!-- NAME -->
        <vs-input label="Nama Produk" v-model="dataName" class="mt-5 w-full" name="item-name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>

        <!-- CATEGORY -->
        <vs-select v-model="dataCategory" label="Kategori" class="mt-5 w-full" name="item-category" v-validate="'required'">
          <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in category_choices" />
        </vs-select>
        <span class="text-danger text-sm" v-show="errors.has('item-category')">{{ errors.first('item-category') }}</span>

        <!-- Jumlah -->
        <vs-input icon-pack="feather" icon="icon-box" label="Jumlah" v-model="dataJumlah" class="mt-5 w-full" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="item-jumlah" />
        <span class="text-danger text-sm" v-show="errors.has('item-jumlah')">{{ errors.first('item-jumlah') }}</span>
        <!-- Deskripsi -->
        <vs-textarea  label="Deskripsi" width="300px" v-model="dataDeskripsi" v-validate="'required'" class="mt-5 w-full" name="item-deskripsi" />
        <span class="text-danger text-sm" v-show="errors.has('item-deskripsi')">{{ errors.first('item-deskripsi') }}</span>
        <!-- PRICE -->
        <vs-input  label="Harga"  v-model="dataPrice" class="mt-5 w-full"  name="item-price" />
        <span class="text-danger text-sm" v-show="errors.has('item-price')">{{ errors.first('item-price') }}</span>
        <!-- PRICE -->
        <vs-input  label="Diskon" v-model="dataDiskon" class="mt-5 w-full"  name="item-diskon" />
        <span class="text-danger text-sm" v-show="errors.has('item-diskon')">{{ errors.first('item-diskon') }}</span>
        <!-- Upload -->
        <!-- <vs-upload text="Upload Image" class="img-upload" ref="fileUpload" /> -->

        <div class="upload-img mt-5" v-if="!dataImg">
          <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
          <vs-button @click="$refs.uploadImgInput.click()">Upload Gambar</vs-button>
        </div>
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">Buat</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Batal</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    VuePerfectScrollbar
  },
  data () {
    return {

      dataId: null,
      dataName: '',
      dataCategory: null,
      dataImg: null,
      dataJumlah: 0,
      dataDeskripsi: '',
      dataPrice: 'Rp.',
      dataDiskon: 'Rp.',

      category_choices: [
        {text:'Makanan', value:'makanan'},
        {text:'Minuman', value:'minuman'}
      ],

      jumlah_choices: [
        {text:'Pending', value:'pending'},
        {text:'Canceled', value:'canceled'},
        {text:'Delivered', value:'delivered'},
        {text:'On Hold', value:'on_hold'}
      ],
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    }
  },
  watch: {
    isSidebarActive (val) {
      if (!val) return
      if (Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      } else {
        const { category, id, img, name, jumlah, deskripsi, price, diskon } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.dataCategory = category
        this.dataImg = img
        this.dataName = name
        this.dataJumlah = jumlah
        this.dataDeskripsi = deskripsi
        this.dataPrice = price
        this.dataDiskon = diskon
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataJumlah, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get () {
        return this.isSidebarActive
      },
      set (val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid () {
      return !this.errors.any() && this.dataName && this.dataCategory && this.dataPrice > 0
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  methods: {
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.dataName = ''
      this.dataCategory = null
      this.dataJumlah = 0
      this.dataDeskripsi = ''
      this.dataPrice = 'Rp. '
      this.dataDiskon = 'Rp. '
      this.dataImg = null
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            name: this.dataName,
            img: this.dataImg,
            category: this.dataCategory,
            jumlah: this.dataJumlah,
            deskripsi: this.dataDeskripsi,
            price: this.dataPrice,
            diskon: this.dataDiskon
          }

          // const id = {
          //   idBusiness : this.$store.state.AppActiveUser.id_business
          // }
          if (this.dataId !== null && this.dataId >= 0) {
            // this.$store.dispatch('dataList/updateItem', obj).catch(err => { console.error(err) })
          } else {
            delete obj.id
            obj.popularity = 0
            // this.$store.dispatch('dataList/addItem', obj).catch(err => { console.error(err) })
          }

          this.$emit('closeSidebar')
          this.initValues()
        }
      })
    },
    updateCurrImg (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.dataImg = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);

    &:not(.ps) {
      overflow-y: auto;
    }
}
</style>
