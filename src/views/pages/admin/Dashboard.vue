
<template>

  <div id="dashboard">

    <div class="vx-row no-gutter">
      <vs-col vs-w="6" vs-xs="12">
        <div class="flex items-center markdown">
          <h1 class="text-5xl font-bold">Dashboard</h1>
        </div>
        <p class="mt-0 mb-4 text-lg ml-1">
          Halo
          <b>Admin</b>, Selamat Datang !
        </p>
      </vs-col>
      <vs-col vs-w="6" vs-xs="12">
        <vx-card content-color="#fff" card-background="primary">
          <vs-row>
            <vs-col vs-xs="12" vs-w="2" class="text-center relative">
              <feather-icon icon="InfoIcon" class="p-2 bg-white inline-flex rounded-full text-primary shadow" svgClasses="h-8 w-8"></feather-icon>
            </vs-col>
            <vs-col vs-xs="12" vs-w="7" class="text-center align-middle">
              <p class="">
                <b><h2>Pendapatan Selama 1 Bulan Terakhir : Rp. </h2></b>
              </p>
            </vs-col>
          </vs-row>
        </vx-card>
      </vs-col>
    </div>

    <div class="vx-row mt-10 ">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">

        <h2 class="font-semibold mb-6">Ringkasan Hari ini</h2>


        <statistics-card-line
          hideChart
          class="mb-base"
          icon="ShoppingCartIcon"
          icon-right
          statistic="2356"
          statisticTitle="Total Transaksi"
        />

        <statistics-card-line
          hideChart
          class="mb-base"
          icon="ShoppingBagIcon"
          icon-right
          statistic="86%"
          statisticTitle="Total Produk Terjual"
          color="warning"
        />

        <statistics-card-line
          hideChart
          class="mb-base"
          icon="CreditCardIcon"
          icon-right
          statistic="86%"
          statisticTitle="Total Omzet"
          color="success"
        />
      </div>
    </div>

    <div class="vx-row mt-10">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
        <h2 class="font-semibold mb-3">Saldo Saat Ini</h2>
        <statistics-card-line
          class="mb-base"
          icon="ChevronDownIcon"
          icon-right
          statistic="78.9k"
          statisticTitle="Total Pendapatan Bulan Ini"
          :chartData="siteTraffic.series"
          color="warning"
        />

        <statistics-card-line
          class="mb-base"
          icon="ChevronUpIcon"
          icon-right
          statistic="659.8k"
          statisticTitle="Total Pesanan Bulan Ini"
          :chartData="activeUsers.series"
          color="success"
        />
      </div>

      <div class="vx-col w-full md:w-2/3 lg:w-2/3 xl:w-2/3">
        <h2 class="font-semibold mb-3">Ringkasan Pendapatan</h2>
        <vs-tabs>
          <vs-tab label="1 Minggu" icon-pack="feather" icon="icon-calendar">
            <div class="vx-row mt-2 no-gutter">
              <div class="vx-col p-3 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-5">
                ph
                <h2 class="font-bold mt-1">
                  1.231.100
                  <span class="text-success text-base">
                    25%
                    <vs-icon icon="expand_less"></vs-icon>
                  </span>
                </h2>
              </div>
              <div class="vx-col p-3 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                <p>Rata-rata Nilai Transaksi</p>
                <h2 class="font-bold mt-1">
                  45.032
                  <span class="text-warning text-base">
                    25%
                    <vs-icon icon="expand_more"></vs-icon>
                  </span>
                </h2>
              </div>
            </div>
            <statistics-card-line
              icon="MailIcon"
              type="area"
              statistic="28.7k"
              statisticTitle="Newsletter"
              :chartData="newsletter.series"
              color="warning"
            />
          </vs-tab>
          <vs-tab label="1 Bulan" icon-pack="feather" icon="icon-calendar">
            <div class="vx-row mt-2 no-gutter">
              <div class="vx-col p-3 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-5">
                <p>Transaksi Tertunda</p>
                <h2 class="font-bold mt-1">
                  1.231.100
                  <span class="text-success text-base">
                    25%
                    <vs-icon icon="expand_less"></vs-icon>
                  </span>
                </h2>
              </div>
              <div class="vx-col p-3 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                <p>Rata-rata Nilai Transaksi</p>
                <h2 class="font-bold mt-1">
                  45.032
                  <span class="text-warning text-base">
                    25%
                    <vs-icon icon="expand_more"></vs-icon>
                  </span>
                </h2>
              </div>
            </div>
            <statistics-card-line
              icon="MailIcon"
              type="area"
              statistic="28.7k"
              statisticTitle="Newsletter"
              :chartData="newsletter.series"
              color="warning"
            />
          </vs-tab>
          <vs-tab label="3 Bulan" icon-pack="feather" icon="icon-calendar">
            <div class="vx-row mt-2 no-gutter">
              <div class="vx-col p-3 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-5">
                <p>Transaksi Tertunda</p>
                <h2 class="font-bold mt-1">
                  1.231.100
                  <span class="text-success text-base">
                    25%
                    <vs-icon icon="expand_less"></vs-icon>
                  </span>
                </h2>
              </div>
              <div class="vx-col p-3 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                <p>Rata-rata Nilai Transaksi</p>
                <h2 class="font-bold mt-1">
                  45.032
                  <span class="text-warning text-base">
                    25%
                    <vs-icon icon="expand_more"></vs-icon>
                  </span>
                </h2>
              </div>
            </div>
            <statistics-card-line
              icon="MailIcon"
              type="area"
              statistic="28.7k"
              statisticTitle="Newsletter"
              :chartData="newsletter.series"
              color="warning"
            />
          </vs-tab>
          <vs-tab label="1 Tahun" icon-pack="feather" icon="icon-calendar">
            <div class="vx-row mt-2 no-gutter">
              <div class="vx-col p-3 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-5">
                <p>Transaksi Tertunda</p>
                <h2 class="font-bold mt-1">
                  1.231.100
                  <span class="text-success text-base">
                    25%
                    <vs-icon icon="expand_less"></vs-icon>
                  </span>
                </h2>
              </div>
              <div class="vx-col p-3 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                <p>Rata-rata Nilai Transaksi</p>
                <h2 class="font-bold mt-1">
                  45.032
                  <span class="text-warning text-base">
                    25%
                    <vs-icon icon="expand_more"></vs-icon>
                  </span>
                </h2>
              </div>
            </div>
            <statistics-card-line
              icon="MailIcon"
              type="area"
              statistic="28.7k"
              statisticTitle="Newsletter"
              :chartData="newsletter.series"
              color="warning"
            />
          </vs-tab>
        </vs-tabs>
      </div>
    </div>

    <div class="vx-row mt-10">
      <div class="vx-col w-full mb-3">
        <h2 class="font-semibold">Data Perbandingan Transaksi</h2>
      </div>
      <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <vx-card title="Perbandingan Tipe Pembayaran">
          <!-- CHART -->
          <div slot="no-body">
            <vue-apex-charts
              type="donut"
              height="340"
              class="mb-12 mt-4"
              :options="sessionsByDeviceDonut.chartOptions"
              :series="subscribers_gained.series"
            />
          </div>

          <!-- CHART DATA -->
          <ul>
            <li
              v-for="deviceData in subscribers_gained.analyticsData"
              :key="deviceData.device"
              class="flex mb-3"
            >
              <feather-icon
                :icon="deviceData.icon"
                :svgClasses="[`h-5 w-5 stroke-current text-${deviceData.color}`]"
              ></feather-icon>
              <span class="ml-2 inline-block font-semibold">{{ deviceData.device }}</span>
              <span class="mx-2">-</span>
              <span class="mr-4">{{ deviceData.sessionsPercentage }}%</span>
              <div class="ml-auto flex -mr-1">
                <span class="mr-1">{{ deviceData.comparedResultPercentage }}%</span>
                <feather-icon
                  :icon=" deviceData.comparedResultPercentage < 0 ? 'ArrowDownIcon' : 'ArrowUpIcon'"
                  :svgClasses="[deviceData.comparedResultPercentage < 0 ? 'text-danger' : 'text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"
                ></feather-icon>
              </div>
            </li>
          </ul>
        </vx-card>
      </div>

      <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <vx-card title="Perbandingan Status Order">
          <!-- CHART -->
          <div slot="no-body">
            <vue-apex-charts
              type="radialBar"
              height="420"
              :options="productOrdersRadialBar.chartOptions"
              :series="productsOrder.series"
            />
          </div>

          <!-- CHART DATA -->
          <ul>
            <li
              v-for="orderData in productsOrder.analyticsData"
              :key="orderData.orderType"
              class="flex mb-3 justify-between"
            >
              <span class="flex items-center">
                <span
                  class="inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid"
                  :class="`border-${orderData.color}`"
                ></span>
                <span class="font-semibold">{{ orderData.orderType }}</span>
              </span>
              <span>{{ orderData.counts }}</span>
            </li>
          </ul>
        </vx-card>
      </div>
    </div>

    <div class="vx-row mt-10">
      <div class="vx-col w-full mb-3">
        <h2 class="font-semibold">Data Perbandingan Transaksi</h2>
      </div>
      <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <vx-card title="Transaksi Terbaru">

          <vx-timeline :data="timelineData" />

        </vx-card>
      </div>

      <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <vx-card title="Produk Terlaris">

          <vs-table :data="produk">

            <template slot="thead">
              <vs-th>Produk</vs-th>
              <vs-th>Nama</vs-th>
              <vs-th>Terjual</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                <vs-td :data="data[indextr].produk">
                  <vs-avatar size="large" :src="data[indextr].produk"/>
                </vs-td>

                <vs-td :data="data[indextr].nama">
                  {{ data[indextr].nama }}
                </vs-td>

                <vs-td :data="data[indextr].terjual">
                  {{ data[indextr].terjual }}
                </vs-td>

              </vs-tr>
            </template>

          </vs-table>

        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import VxTimeline from '@/components/timeline/VxTimeline'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  name: 'maps',
  components: {
    StatisticsCardLine,
    VueApexCharts,
    FormWizard,
    TabContent,
    VxTimeline
  },
  methods:{
    successUpload () {
      this.$vs.notify({color:'success', title:'Upload Success', text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  },
  data () {
    return {
      center:{
        lat: -7.581774,
        lng: 110.816912
      },
      card_bg_img_1: require('@/assets/images/pages/bg-login.jpg'),
      card_bg_dash: require('@/assets/images/pages/bg-dashboard.jpg'),
      welcomePopup: false,
      configPopup: false,
      whatsappCheckout: true,
      payment: ['bank'],
      shiping: 'free',
      maps: false,
      produk: [
        {
          'id': 1,
          'produk': 'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4',
          'nama': 'Ayam Goreng',
          'terjual': '20pcs'
        },
        {
          'id': 2,
          'produk': 'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4',
          'nama': 'Ayam Goreng',
          'terjual': '20pcs'
        },
        {
          'id': 3,
          'produk': 'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4',
          'nama': 'Ayam Goreng',
          'terjual': '20pcs'
        },
        {
          'id': 4,
          'produk': 'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4',
          'nama': 'Ayam Goreng',
          'terjual': '20pcs'
        },
        {
          'id': 5,
          'produk': 'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4',
          'nama': 'Ayam Goreng',
          'terjual': '20pcs'
        }
      ],

      timelineData: [
        {
          color: 'success',
          icon: 'PlusIcon',
          title: 'Rp 32000',
          desc: 'Terima Pembayaran Tunai',
          time: '18:23 - 30 September 2020'
        },
        {
          color: 'danger',
          icon: 'MinusIcon',
          title: 'Rp 32001',
          desc: 'Beli Es Batu',
          time: '17:23 - 30 September 2020'
        },
        {
          color: 'danger',
          icon: 'MinusIcon',
          title: 'Rp 32002',
          desc: 'Beli Plastik',
          time: '13:23 - 30 September 2020'
        },
        {
          color: 'success',
          icon: 'PlusIcon',
          title: 'Rp 32003',
          desc: 'Terima Pembayaran Via OVO',
          time: '11:23 - 30 September 2020'
        },
        {
          color: 'success',
          icon: 'PlusIcon',
          title: 'Rp 32004',
          desc: 'Terima Pembayaran Via OVO',
          time: '11:23 - 30 September 2020'
        },
        {
          color: 'success',
          icon: 'PlusIcon',
          title: 'Rp 32005',
          desc: 'Terima Pembayaran Via GOPAY',
          time: '10:23 - 30 September 2020'
        }
      ],

      siteTraffic: {
        series: [
          {
            name: 'Traffic Rate',
            data: [150, 200, 125, 225, 200, 250]
          }
        ]
      },
      activeUsers: {
        series: [
          {
            name: 'Active Users',
            data: [750, 1000, 900, 1250, 1000, 1200, 1100]
          }
        ]
      },
      newsletter: {
        series: [
          {
            name: 'Newsletter',
            data: [365, 390, 365, 400, 375, 400]
          }
        ]
      },
      sessionsByDeviceDonut: {
        // analyticsData: [
        //     { device: 'Dekstop', icon: 'MonitorIcon', color: 'primary', sessionsPercentgae: 58.6, comparedResultPercentage: 2 },
        //     { device: 'Mobile', icon: 'SmartphoneIcon', color: 'warning', sessionsPercentgae: 34.9, comparedResultPercentage: 8 },
        //     { device: 'Tablet', icon: 'TabletIcon', color: 'danger', sessionsPercentgae: 6.5, comparedResultPercentage: -5 },
        // ],
        // comparedResult: [2, -3, 8],
        // series: [58.6, 34.9, 6.5],
        chartOptions: {
          labels: ['Cash', 'COD', 'Ojek Online'],
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          chart: {
            offsetY: 30,
            type: 'donut',
            toolbar: {
              show: false
            }
          },
          stroke: {
            width: 0
          },
          colors: ['#7961F9', '#FF9F43', '#EA5455'],
          fill: {
            type: 'gradient',
            gradient: {
              gradientToColors: ['#9c8cfc', '#FFC085', '#f29292']
            }
          }
        }
      },
      productOrdersRadialBar: {
        // analyticsData: [
        //     { 'orderType': 'Finished', 'counts': 23043, color: 'primary' },
        //     { 'orderType': 'Pending', 'counts': 14658, color: 'warning' },
        //     { 'orderType': 'Rejected ', 'counts': 4758, color: 'danger' },
        // ],
        // series: [70, 52, 26],
        chartOptions: {
          labels: ['Finished', 'Pending', 'Rejected'],
          plotOptions: {
            radialBar: {
              size: 165,
              offsetY: -5,
              hollow: {
                size: '20%'
              },
              track: {
                background: '#ebebeb',
                strokeWidth: '100%',
                margin: 15
              },
              dataLabels: {
                show: true,
                name: {
                  fontSize: '18px'
                },
                value: {
                  fontSize: '16px',
                  color: '#636a71',
                  offsetY: 11
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter () {
                    return 42459
                  }
                }
              }
            }
          },
          responsive: [
            {
              breakpoint: 576,
              options: {
                plotOptions: {
                  radialBar: {
                    size: 150,
                    hollow: {
                      size: '20%'
                    },
                    track: {
                      background: '#ebebeb',
                      strokeWidth: '100%',
                      margin: 15
                    }
                  }
                }
              }
            }
          ],
          colors: ['#7961F9', '#FF9F43', '#EA5455'],
          fill: {
            type: 'gradient',
            gradient: {
              // enabled: true,
              shade: 'dark',
              type: 'vertical',
              shadeIntensity: 0.5,
              gradientToColors: ['#9c8cfc', '#FFC085', '#f29292'],
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          chart: {
            height: 355,
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1
            }
          }
        }
      },
      subscribers_gained: {
        analyticsData: [
          {
            device: 'Cash',
            icon: 'DollarSignIcon',
            color: 'primary',
            sessionsPercentage: 58.6,
            comparedResultPercentage: 2
          },
          {
            device: 'Pesan Antar',
            icon: 'SendIcon',
            color: 'warning',
            sessionsPercentage: 34.9,
            comparedResultPercentage: 8
          },
          {
            device: 'Ojek Online',
            icon: 'PackageIcon',
            color: 'danger',
            sessionsPercentage: 6.5,
            comparedResultPercentage: -5
          }
        ],
        series: [58.6, 34.9, 6.5]
      },
      productsOrder: {
        analyticsData: [
          {
            orderType: 'Finished',
            counts: 23043,
            color: 'primary'
          },
          {
            orderType: 'Pending',
            counts: 14658,
            color: 'warning'
          },
          {
            orderType: 'Rejected ',
            counts: 4758,
            color: 'danger'
          }
        ],
        series: [70, 52, 26]
      }
    }
  }
}
</script>
<style>
  #maps {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
