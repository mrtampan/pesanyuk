    <!-- =========================================================================================
    File Name: CardAnalytics.vue
    Description: Analytic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="demo-card-analytics">
        <!-- ROW 1 -->
        <div class="vx-row">
            </div>
        <!-- ROW 4 -->
        <!-- ROW 1 -->
        <div class="vx-row">
            <div class="vx-col w-4 md:w-1/3 lg:w-1/4 xl:w-1/3">
                <vx-card>
                    <template slot="no-body" v-if="Object.entries(funding).length">
                        <div class="p-12 clearfix">
                            <div>
                                <h2>
                                  <span class="text-md tex-primary">Ringkasan Penjualan: </span>
                                  </h2>
                                    <h1 class="text-bold">
                                    <div class="mt-4">
                                  </div>
                                  <span class="text-md mt-4">598</span>
                                  <span class="flex-mr-1">
                                  <sup class="text-sm text-success h-4 w-4 mb-1 mr-1">28%
                                    <feather-icon :icon="'ArrowUpIcon'" svgClasses="text-success stroke-current h-4 w-4 mb-1 mr-1"></feather-icon>
                                  </sup>
                                  </span>
                                  <h4><span class="text-md mt-8">Transaksi</span></h4>
                                  </h1>
                                <div class="mt-2">
                                  </div>
                                  
                                
                            </div>
                            <vs-button icon-pack="feather" :to="`/owner/report/sales`" icon="icon-chevron-right" icon-after class="shadow-md w-full">Lihat Details</vs-button>
                        </div>
                       
                    </template>
                </vx-card>
            </div>

            <div class="vx-col w-4 md:w-1/3 lg:w-1/4 xl:w-1/3">
                <vx-card>
                    <template slot="no-body" v-if="Object.entries(funding).length">
                        <div class="p-12 clearfix">
                            <div>
                                <h2>
                                  <span class="text-md tex-primary">Penjualan Produk: </span>
                                  </h2>
                                    <h1 class="text-bold">
                                    <div class="mt-4">
                                  </div>
                                  <span class="text-md mt-8">2365</span>
                                  <span class="flex-mr-1">
                                  <sup class="text-sm text-danger h-4 w-4 mb-1 mr-1">13%
                                    <feather-icon :icon="'ArrowDownIcon'" svgClasses="text-danger stroke-current h-4 w-4 mb-1 mr-1"></feather-icon>
                                  </sup>
                                  </span>
                                  <h4><span class="text-md mt-8">Produk</span></h4>
                                  </h1>
                                <div class="mt-2">
                                  </div>                
                            </div>
                            <vs-button icon-pack="feather" :to="`/owner/report/product`" icon="icon-chevron-right" icon-after class="shadow-md w-full">Lihat Details</vs-button>
                        </div>   
                    </template>
                </vx-card>
            </div>
            
            <div class="vx-col w-4 md:w-2/3 lg:w-2/4 xl:w-1/3">
                <vx-card>
                    <template slot="no-body" v-if="Object.entries(funding).length">
                        <div class="p-12 clearfix">
                            <div>
                                <h2>
                                  <span class="text-md tex-primary">Penjualan Kategori : </span>
                                  </h2>
                                    <h1 class="text-bold">
                                    <div class="mt-4">
                                  </div>
                                  <span class="text-md mt-8">698</span>
                                  <span class="flex-mr-1">
                                  <sup class="text-sm text-success h-4 w-4 mb-1 mr-1">23%
                                    <feather-icon :icon="'ArrowUpIcon'" svgClasses="text-success stroke-current h-4 w-4 mb-1 mr-1"></feather-icon>
                                  </sup>
                                  </span>
                                  <h4><span class="text-md mt-8">Kategori</span></h4>
                                  </h1>
                                <div class="mt-2">
                                  </div>                
                            </div>
                            <vs-button icon-pack="feather" :to="`/owner/report/category`" icon="icon-chevron-right" icon-after class="shadow-md w-full">Lihat Details</vs-button>
                        </div>   
                    </template>
                </vx-card>
            </div>
        </div>
        <!-- ROW 1 -->
        <div class="vx-row mt-12">
            <div class="vx-col w-4  md:w-1/3 lg:w-1/4 xl:w-1/3">
                <vx-card>
                    <template slot="no-body" v-if="Object.entries(funding).length">
                        <div class="p-12 clearfix">
                            <div>
                                <h2>
                                  <span class="text-md tex-primary">report Pelanggan: </span>
                                  </h2>
                                    <h1 class="text-bold">
                                    <div class="mt-4">
                                  </div>
                                  <span class="text-md mt-8">598</span>
                                  <span class="flex-mr-1">
                                  <sup class="text-sm text-success h-4 w-4 mb-1 mr-1">28%
                                    <feather-icon :icon="'ArrowUpIcon'" svgClasses="text-success stroke-current h-4 w-4 mb-1 mr-1"></feather-icon>
                                  </sup>
                                  </span>
                                  <h4><span class="text-md mt-8">Pelanggan</span></h4>
                                  </h1>
                                <div class="mt-2">
                                  </div>
                                  
                                
                            </div>
                            <vs-button icon-pack="feather" :to="`/owner/report/customer`" icon="icon-chevron-right" icon-after class="shadow-md w-full">Lihat Details</vs-button>
                        </div>
                       
                    </template>
                </vx-card>
            </div>

            <div class="vx-col w-4 md:w-1/3 lg:w-1/4 xl:w-1/3">
                <vx-card>
                    <template slot="no-body" v-if="Object.entries(funding).length">
                        <div class="p-12 clearfix">
                            <div>
                                <h2>
                                  <span class="text-md tex-primary">Metode Pembayaran: </span>
                                  </h2>
                                    <h1 class="text-bold">
                                    <div class="mt-4">
                                  </div>
                                  <span class="text-md mt-8">2365</span>
                                  <span class="flex-mr-1">
                                  <sup class="text-sm text-danger h-4 w-4 mb-1 mr-1">13%
                                    <feather-icon :icon="'ArrowDownIcon'" svgClasses="text-danger stroke-current h-4 w-4 mb-1 mr-1"></feather-icon>
                                  </sup>
                                  </span>
                                  <h4><span class="text-md mt-8">Pembayaran</span></h4>
                                  </h1>
                                <div class="mt-2">
                                  </div>                
                            </div>
                            <vs-button icon-pack="feather" :to="`/owner/report/payment`" icon="icon-chevron-right" icon-after class="shadow-md w-full">Lihat Details</vs-button>
                        </div>   
                    </template>
                </vx-card>
            </div>
            
            <div class="vx-col w-4 md:w-2/3 lg:w-2/4 xl:w-1/3">
                <vx-card>
                    <template slot="no-body" v-if="Object.entries(funding).length">
                        <div class="p-12 clearfix">
                            <div>
                                <h2>
                                  <span class="text-md tex-primary">report Diskon : </span>
                                  </h2>
                                    <h1 class="text-bold">
                                    <div class="mt-4">
                                  </div>
                                  <span class="text-md mt-8">698</span>
                                  <span class="flex-mr-1">
                                  <sup class="text-sm text-success h-4 w-4 mb-1 mr-1">23%
                                    <feather-icon :icon="'ArrowUpIcon'" svgClasses="text-success stroke-current h-4 w-4 mb-1 mr-1"></feather-icon>
                                  </sup>
                                  </span>
                                  <h4><span class="text-md mt-8">Diskon</span></h4>
                                  </h1>
                                <div class="mt-2">
                                  </div>                
                            </div>
                            <vs-button icon-pack="feather" :to="`/owner/report/discount`" icon="icon-chevron-right" icon-after class="shadow-md w-full">Lihat Details</vs-button>
                        </div>   
                    </template>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
     
      funding: {
        currBalance: 22597,
        depostis: 20065,
        comparison: {
          resultPerc: 5.2,
          pastData: 956
        }
      }

    }
  },
  components: {
    
  }
}
</script>


<style lang="scss">
#demo-card-analytics {
    .tasks-today-container {
        .tasks-today__task {
            transition: background .15s ease-out;
            .tasks-today__actions {
                display: none;
            }

            &:hover {
                background: rgba(var(--vs-primary),.04) ;
                .tasks-today__actions {
                    display: flex;
                }
            }
        }
    }
}
</style>
