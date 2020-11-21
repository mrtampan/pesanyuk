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
                <span class="text-primary text-lg">Data Pegawai</span>
                <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Nama Lengkap" class="w-full mt-8" v-model="dataNama" name="item-nama" />
                <vs-input class="w-full mt-8" label="No HP" v-model="dataHp" label-placeholder="No HP" v-validate="{regex: '^\\+?([0-9]+)$' }" name="hp" />
                <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Jabatan" class="w-full mt-8" v-model="dataJabatan" name="item-jabatan" />
                <vs-input icon-pack="feather" icon="icon-briefcase" label-placeholder="Email" type="email" class="w-full mt-8" v-model="dataEmail" name="item-email" />
                <hr>
                <span class="text-primary text-lg">Keamanan</span>
                <vs-input class="w-full" type="password" v-model="dataPin" label-placeholder="Pin" name="pin" v-validate="{regex: '^\\+?([0-9]+)$' }" />
                <span class="text-danger text-sm"  v-show="errors.has('pin')">{{ errors.first('pin') }}</span>
                <hr>
                <span class="text-primary text-lg">Pilih Outlet</span>
                <vs-checkbox v-model="DataOutlet" class="mt-4" color="primary" vs-value="pusat">Pusat</vs-checkbox>
                <hr>
                <span class="text-primary text-lg">Foto Pegawai</span>
                <vs-upload action="#" @on-success="successUpload" vs-value="img" v-model="DataImg" name="img" />
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
import vSelect from 'vue-select'
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
    VuePerfectScrollbar,
    'v-select': vSelect
  },
  data () {
    return {

      dataId: null,
      dataNama: '',
      dataHp: '',
      dataJabatan: '',
      dataEmail: '',
      dataPin: '',
      DataOutlet: '',
      DataImg: null,
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
        const { id, nama, hp, jabatan, email, pin, outlet, img } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.dataNama = nama
        this.dataHp = hp
        this.dataJabatan = jabatan
        this.dataEmail = email
        this.dataPin = pin
        this.DataOutlet = outlet
        this.DataImg = img
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
      return !this.errors.any() && this.supplier && this.dataCatatan && this.dataProduk === null
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  methods: {
    successUpload () {
      this.$vs.notify({color:'success', title:'Upload Sukses', text:'Upload Sukses'
      }
      )
    },
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.dataNama = null
      this.dataHp = null
      this.dataJabatan = null
      this.dataEmail = null
      this.dataPin = null
      this.DataOutlet = null
      this.DataImg = null
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            nama: this.dataNama,
            hp: this.dataHp,
            jabatan: this.dataJabatan,
            email: this.dataEmail,
            pin: this.dataPin,
            outlet: this.DataOutlet,
            img: this.DataImg
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
