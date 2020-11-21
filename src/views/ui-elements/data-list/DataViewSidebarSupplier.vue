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

                <vs-input icon-pack="feather" v-model="dataSupplier" name="item-supplier" icon="icon-briefcase" label-placeholder="Nama Supplier" class="w-full mt-8"  />
                <vs-input class="w-full mt-4" label="No Hp" v-model="dataHp" v-validate="{regex: '^\\+?([0-9]+)$' }" name="hp" />
                <span class="text-danger text-sm"  v-show="errors.has('hpwakil')">{{ errors.first('hpwakil') }}</span>
                <vs-input icon-pack="feather" v-model="dataEmail" name="item-email" icon="icon-briefcase" label-placeholder="Nama Kategori" class="w-full mt-8"  />
                <vs-input icon-pack="feather" v-model="dataAlamat" name="item-alamat" icon="icon-briefcase" label-placeholder="Alamat" class="w-full mt-8" /><br>
                <span class="mt-3 text-md ">Kota</span>
                 <v-select v-model="selected" :options="options" :dir="$vs.rtl ? 'rtl' : 'ltr'" class="mt-4" /><br>
                <vs-input icon-pack="feather" v-model="dataKodePos" name="item-kodepos" icon="icon-briefcase" label-placeholder="Nama Kode Pos" class="w-full mt-2"  />
                <vs-input icon-pack="feather" v-model="dataWakilSupplier" name="item-wakilsupplier" icon="icon-briefcase" label-placeholder="Nama Perwakilan Supplier" class="w-full mt-8"  />
                <vs-input class="w-full mt-4" label="No Hp" v-model="dataHpWakil" v-validate="{regex: '^\\+?([0-9]+)$' }" name="hpwakil" />
                <span class="text-danger text-sm"  v-show="errors.has('hpwakil')">{{ errors.first('hpwakil') }}</span>
                <vs-input icon-pack="feather" v-model="dataEmailWakilSupplier" name="item-email-supplier" icon="icon-briefcase" label-placeholder="Email" class="w-full mt-8" />
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
      dataSupplier: '',
      datahp: '',
      dataEmail: '',
      dataAlamat: '',
      options: [
        {id:1, label: 'Solo'},
        {id:2, label: 'Klaten'},
        {id:3, label: 'Sukoharjo'}
      ],
      selected: {id: 1, label: 'Solo'},
      dataKodePos: '',
      dataWakilSupplier: '',
      dataHpWakil: '',
      dataEmailWakilSupplier: '',
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
        const { id, supplier, hp, email, alamat, kota, kodepos, wakilsupplier, hpwakil, emailwakilsupplier } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.dataSupplier = supplier
        this.datahp = hp
        this.dataEmail = email
        this.dataAlamat = alamat
        this.kota = kota
        this.dataKodePos = kodepos
        this.dataWakilSupplier = wakilsupplier
        this.dataHpWakil = hpwakil
        this.dataEmailWakilSupplier = emailwakilsupplier
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
      return !this.errors.any() && this.dataSupplier && this.datahp && this.kota === null
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  methods: {
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.dataSupplier = ''
      this.datahp = ''
      this.dataEmail = ''
      this.dataAlamat = ''
      this.kota = null
      this.dataKodePos = ''
      this.dataWakilSupplier = ''
      this.dataHpWakil = ''
      this.dataEmailWakilSupplier = ''
      
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            supplier: this.dataSupplier,
            hp: this.datahp,
            email: this.dataEmail,
            alamat: this.dataAlamat,
            kota: this.kota,
            kodepos: this.dataKodePos,
            wakillsupplier: this.dataWakilSupplier,
            hpwakil: this.dataHpWakil,
            emailwakilsupplier: this.dataEmailWakilSupplier
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
