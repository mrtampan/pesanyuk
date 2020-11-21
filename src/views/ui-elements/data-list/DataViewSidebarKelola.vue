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

        <vs-input icon-pack="feather" icon="icon-box" label="Catatan" v-model="dataCatatankel" class="mt-5 w-full" v-validate="'required'" name="item-catatan" />
        <span class="text-danger text-sm" v-show="errors.has('item-catatan')">{{ errors.first('item-Catatan') }}</span>

        <span class="mt-8 text-md ">Tipe Kas</span>
        <v-select v-model="selecteds" :tipe="tipe" :dir="$vs.rtl ? 'rtl' : 'ltr'" class="mt-4" /><br>
        <span class="text-danger text-sm" v-show="errors.has('item-tipe-kas')">{{ errors.first('item-tipe-kas') }}</span>

        <flat-pickr v-model="dataDob" :config="{ dateFormat: 'd F Y', maxDate: new Date() }" class="w-full" v-validate="'required'" name="dob" />
        <span class="text-danger text-sm"  v-show="errors.has('dob')">{{ errors.first('dob') }}</span>

        <span class="mt-8 text-md ">Pegawai</span>
        <v-select v-model="selected" :options="options" :dir="$vs.rtl ? 'rtl' : 'ltr'" class="mt-4" /><br>
         <vs-input icon-pack="feather" icon="icon-box" label="Jumlah" v-model="dataJumlah" class="mt-5 w-full" v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }" name="item-jumlah" />
        <span class="text-danger text-sm" v-show="errors.has('item-jumlah')">{{ errors.first('item-jumlah') }}</span>
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
      options: [
        {id:1, label: 'Fino'},
        {id:2, label: 'Hamzah'}
      ],
      selected: {id: 1, label: 'Fino'},

      tipe: [
        {id:1, label: 'Masuk'},
        {id:2, label: 'Keluar'}
      ],
      selecteds: {id: 1, label: 'Masuk'},
      dataDob: '',
      dataJumlah: '',
      dataCatatankel: '',
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
        const { id, options, selected, selecteds, tipe, dataDob, dataJumlah, dataCatatankel } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.options = options
        this.selected = selected
        this.selecteds = selecteds
        this.tipe = tipe
        this.dataDob = dataDob
        this.dataJumlah = dataJumlah
        this.dataCatatankel = dataCatatankel
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
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.options = ''
      this.selected = ''
      this.selecteds = ''
      this.tipe = ''
      this.dataDob = ''
      this.dataJumlah = '0'
      this.dataCatatankel = ''
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            options: this.options,
            selected: this.selected,
            selecteds: this.selecteds,
            tipe: this.dataTipe,
            dob: this.dataDob,
            jumlah: this.dataJumlah,
            catatankel: this.dataCatatankel,
            id_business : this.$store.state.AppActiveUser.id_business
          }
          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch('dataKelola/updateItem', obj).catch(err => { console.error(err) })
            this.$vs.notify({
              color: 'success',
              title: `Edit ${this.title} Behasil`,
              text: `Data ${this.title} ${obj.kelola} berhasil ditambahkan`
            })
          } else {
            delete obj.id
            this.$store.dispatch('dataKelola/addItem', obj).catch(err => { console.error(err) })
            this.$vs.notify({
              color: 'success',
              title: `Tambah ${this.title} Behasil`,
              text: `Data ${this.title} ${obj.kelola} berhasil ditambahkan`
            })
          }
          this.$validator.reet()
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

