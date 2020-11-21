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

       <vs-input icon-pack="feather" v-model="dataPelanggan" icon="icon-briefcase" label-placeholder="Nama Pelanggan"  name="item-pelanggan" class="w-full mt-8" />

                  <vs-input icon-pack="feather" v-model="dataHp" name="item-hp" icon="icon-briefcase" label-placeholder="Tagline" class="w-full mt-8" />

                  <vs-input icon-pack="feather"  v-model="dataKtp" name="item-ktp" icon="icon-briefcase" label-placeholder="Nomor KTP (Tidak Wajib)" class="w-full mt-8" />

                  <vs-input icon-pack="feather"  v-model="dataEmail" name="item-email" icon="icon-briefcase" label-placeholder="Email" class="w-full mt-8" />

                  <vs-input icon-pack="feather"  v-model="dataAlamat" name="item-alamat" icon="icon-briefcase" label-placeholder="Alamat" class="w-full mt-8" />

                  <vs-input icon-pack="feather" v-model="dataLong" name="item-longitude" icon="icon-briefcase" label-placeholder="Longitude" class="w-full mt-8" />

                  <vs-input icon-pack="feather" v-model="dataLat" name="item-latitude" icon="icon-briefcase" label-placeholder="Latitude" class="w-full mt-8" />

                  <vs-input icon-pack="feather" v-model="dataTl" name="item-ig" icon="icon-briefcase" label-placeholder="Tanggal Lahir" class="w-full mt-8" />

                  <vs-input icon-pack="feather" v-model="dataCatatan" name="item-fb" icon="icon-briefcase" label-placeholder="Catatan" class="w-full mt-8" />
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
      dataPelanggan: '',
      dataHp: '+62 ',
      dataKtp: '',
      dataEmail: '',
      dataAlamat: '',
      dataLong: '',
      dataLat: '',
      dataTl: '',
      dataCatatan: '',
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
        const { id, pelanggan, hp, ktp, email, alamat, long, lat, tl, catatan } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.dataPelanggan = pelanggan
        this.dataHp = hp
        this.dataKtp = ktp
        this.dataEmail = email
        this.dataAlamat = alamat
        this.dataLong = long
        this.dataLat = lat
        this.dataTl = tl
        this.dataCatatan = catatan
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
      return !this.errors.any() && this.dataPelanggan && this.dataEmail && this.dataHp > 0
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  methods: {
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.dataPelanggan = ''
      this.dataHp = ''
      this.dataKtp = ''
      this.dataEmail = ''
      this.dataAlamat = ''
      this.dataLong = ''
      this.dataLat = ''
      this.dataTl = ''
      this.dataCatatan = ''
      
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            pelanggan: this.dataPelanggan,
            hp: this.dataHp,
            ktp: this.dataKtp,
            email: this.dataEmail,
            alamat: this.dataAlamat,
            long: this.dataLong,
            lat: this.dataLat,
            tl: this.dataTl,
            catatan: this.dataCatatan
          }
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
