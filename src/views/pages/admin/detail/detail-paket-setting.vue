<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div>
    <edit-paket :isPopupActiveEdit="viewEditPaket" @closePopupEditPaket="togglePopup"/>
    <vs-popup title="Tampilan Register | Edit Tampilan Register | Paket Aktive" :active.sync="isPopupActiveLocal">
        <template>
            <div class="h-screen flex w-full bg-img vx-row no-gutter" id="page-register">
                <div class="vx-col">
                <vx-card class="my-1">
                    <div slot="no-body" class="full-page-bg-color">

                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                        <div class="px-8 py-10 login-tabs-container">

                            <div class="vx-card__title mb-5">
                            <div class="text-center mb-5">
                                <img src="@/assets/images/logo/full-logo.png" alt="login" width="200px" class="mx-auto mb-1">
                                <h4 class="mb-4 text-black font-bold tracking-wide">Boost Your Business With Pesanyuk.id</h4>
                            </div>

                            <vs-list >
                                <vs-list-header icon-pack="feather" icon="icon-award" title="Paket Pro (Rp 1.090.000) *6 Bulan"></vs-list-header>
                            <!----- Edit ----->
                            <vs-button color="success" size="small" @click.stop="EditPaket">Edit Paket Non Promo</vs-button>
                            <!------ end ----->
                            </vs-list>
                            <div class="vx-row no-gutter">
                                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/2">
                                <vs-list >
                                    <vs-list-item icon-pack="feather" icon="icon-check" subtitle="100% Web Based Software" ></vs-list-item>
                                    <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Unlimited Produk" ></vs-list-item>
                                    <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Unlimited Order" ></vs-list-item>
                                    <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Checkout System" ></vs-list-item>
                                </vs-list>
                                </div>
                                <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/2">
                                <vs-list >
                                    <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Ratapay Integration" ></vs-list-item>
                                    <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Integrasi Facebook Pixel" ></vs-list-item>
                                    <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Gratis Support" ></vs-list-item>
                                    <vs-list-item icon-pack="feather" icon="icon-check" subtitle="Gabung Komunitas Pesanyuk.id" ></vs-list-item>
                                </vs-list>
                                </div>
                            
                            <!----- Edit ----->
                            <vs-button color="success" size="small">Edit Paket Option</vs-button>
                            <!------ end ----->
                            
                            </div>
                            <p class="mb-5 mt-10 text-base">Lengkapi data di bawah ini !</p>
                            </div>

                            <div>
                            <div class="vx-col w-full">
                                <vs-input
                                placeholder="Name"
                                icon-pack="feather"
                                icon="icon-user"
                                class="w-full"
                                />
                            </div>
                            <div class="vx-col w-full">
                                <vs-input
                                name="email"
                                label-placeholder="Email"
                                placeholder="Email"
                                icon-pack="feather"
                                icon="icon-mail"
                                class="w-full mt-6"
                                />
                            </div>
                            <div class="vx-row">
                                <div class="vx-col w-1/2">
                                <vs-input
                                    name="password"
                                    label-placeholder="Password"
                                    placeholder="Password"
                                    icon-pack="feather"
                                    icon="icon-lock"
                                    class="mt-6 w-full"
                                />
                                </div>
                                <div class="vx-col w-1/2">
                                <vs-input
                                    label-placeholder="Confirm Password"
                                    placeholder="Confirm Password"
                                    icon-pack="feather"
                                    icon="icon-lock"
                                    class="mt-6 w-full"
                                />
                                </div>
                            </div>

                            <div class="vx-col w-1/2 mt-3">
                                <span class=""><b>Gunakan Kupon : </b></span>
                                <vs-input
                                label-placeholder="Gunakan Kuponmu"
                                placeholder="Kupon"
                                icon-pack="feather"
                                icon="icon-scissors"
                                class=" w-full mt-3 mb-5"
                                />
                            </div>

                            <vs-checkbox
                                class="mt-3 mb-10"
                                >
                                Saya setuju dengan <a href="#" class="hover:underline"> syarat & ketentuan </a> dan <a href="#" class="hover:underline"> kebijakan privasi</a>
                                </vs-checkbox>

                            <vx-card
                                card-background="#fffbe2"
                                content-color="#fff"
                                class="mb-5 border-dotted border-danger p-0"
                                noShadow>
                                <vs-checkbox
                                class="text-black font-bold mb-1 text-lg"
                                icon-pack="feather" icon="icon-plus" >
                                Pesanyuk Business (12 Bulan)
                                </vs-checkbox>
                                <p class="text-danger font-bold underline">HANYA Dengan Menambahkan 200.000 Rupiah!</p>
                                <p class="text-black text-sm">Harga normal Pesanyuk Business 12 bulan adalah Rp 1.090.000. Namun HANYA melalui halaman ini Anda bisa mendapatkan tambahan 6 bulan (total jadi 12 bulan) TANPA biaya mahal, HANYA menambahkan 200.000 saja. Silahkan centang checkbox diatas!</p>
                            
                            </vx-card>
                            <!----- Edit ----->
                            <vs-button color="success" size="small">Edit Paket Promo</vs-button>
                            <!------ end ----->
                            
                            <div class="text-center item-center">
                                <p class="text-lg mb-3 text-black float-right">Total yang harus dibayar <b>Rp ---.---,--</b></p>
                                <vs-button class="mx-auto mb-3 w-full" type="relief" size="large" color="primary" icon-pack="feather" icon="icon-arrow-right" icon-after >Lanjut ke pembayaran</vs-button>
                                <span>Apakah Sudah Memiliki Akun ? <a href="" class="hover:underline">Login</a></span>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
                    </div>
                </vx-card>
                </div>
            </div>
        </template>    
        
        
    </vs-popup>
    </div>
</template>

<script>
import EditPaket from '@/views/pages/admin/detail/edit-paket.vue'

export default {
  props: {
    isPopupActive: {
      required: true
    }
  },
  data () {
    return {
      viewEditPaket: false
    }
  },
  components: {
    EditPaket
  },
  watch: {
    isPopupActive () {
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    isPopupActiveLocal: {
      get () {
        return this.isPopupActive
      },
      set (val) {
        if (!val) {
          this.$emit('closePopup')
          this.isPopupActive = false
        }
      }
    }
  },
  methods: {
    EditPaket () {
      this.togglePopup(true)
      this.$emit('closePopup')
      this.isPopupActive = false
    },
    
    togglePopup (val = false) {
      this.viewEditPaket = val
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
