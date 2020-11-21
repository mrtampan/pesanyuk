<!-- =========================================================================================
  File Name: Profile.vue
  Description: Profile Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="profile-page">

        <!-- COL AREA -->
        <div class="vx-row">

            <!-- COL 1 -->
            <div class="vx-col w-full lg:w-2/3">
                <div class="vx-row">
                  <!-- card top 1 -->
                  <div class="vx-col w-full lg:w-1/3">
                  <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" size="60px" :src="card_4.userImg" />
                    <div class="text-center">
                        <h4>{{ card_4.name }}</h4>
                        <p class="text-grey">{{ card_4.profession }}</p>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-2 mr-2 w-full shadow-lg" type="gradient" color="primary" gradient-color-secondary="#CE9FFC">{{ card_4.btn_1_text }}</vs-button>
                        <vs-button class="mt-4 w-full" type="border" color="#b9b9b9">{{ card_4.btn_2_text }}</vs-button>
                        <small class="text-grey">{{ card_4.progress_goal }}</small>
                    </div>
                    <template slot="footer">
                        <vs-divider />
                        <div class="flex justify-between">
                            <span class="flex items-center">
                                <feather-icon :icon="card_4.footer_text_1_icon" svgClasses="h-5 w-5 text-warning stroke-current" />
                                <span class="ml-2">{{ card_4.footer_text_1 }}</span>
                            </span>
                            <span class="flex items-center">
                                <feather-icon :icon="card_4.footer_text_2_icon" svgClasses="h-5 w-5 text-primary stroke-current" />
                                <span class="ml-2">{{ card_4.footer_text_2 }}</span>
                            </span>
                        </div>
                    </template>                
                </vx-card>
                </div>
                <!-- card top 2 -->
                  <div class="vx-col w-full lg:w-1/3">
                  <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" size="60px" :src="card_4.userImg" />
                    <div class="text-center">
                        <h4>{{ card_4.name }}</h4>
                        <p class="text-grey">{{ card_4.profession }}</p>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-2 mr-2 w-full shadow-lg" type="gradient" color="primary" gradient-color-secondary="#CE9FFC">{{ card_4.btn_1_text }}</vs-button>
                        <vs-button class="mt-4 w-full" type="border" color="#b9b9b9">{{ card_4.btn_2_text }}</vs-button>
                        <small class="text-grey">{{ card_4.progress_goal }}</small>
                    </div>
                    <template slot="footer">
                        <vs-divider />
                        <div class="flex justify-between">
                            <span class="flex items-center">
                                <feather-icon :icon="card_4.footer_text_1_icon" svgClasses="h-5 w-5 text-warning stroke-current" />
                                <span class="ml-2">{{ card_4.footer_text_1 }}</span>
                            </span>
                            <span class="flex items-center">
                                <feather-icon :icon="card_4.footer_text_2_icon" svgClasses="h-5 w-5 text-primary stroke-current" />
                                <span class="ml-2">{{ card_4.footer_text_2 }}</span>
                            </span>
                        </div>
                    </template>                
                </vx-card>
                </div>
                <!-- card top 3 -->
                  <div class="vx-col w-full lg:w-1/3">
                  <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" size="60px" :src="card_4.userImg" />
                    <div class="text-center">
                        <h4>{{ card_4.name }}</h4>
                        <p class="text-grey">{{ card_4.profession }}</p>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-2 mr-2 w-full shadow-lg" type="gradient" color="primary" gradient-color-secondary="#CE9FFC">{{ card_4.btn_1_text }}</vs-button>
                        <vs-button class="mt-4 w-full" type="border" color="#b9b9b9">{{ card_4.btn_2_text }}</vs-button>
                        <small class="text-grey">{{ card_4.progress_goal }}</small>
                    </div>
                    <template slot="footer">
                        <vs-divider />
                        <div class="flex justify-between">
                            <span class="flex items-center">
                                <feather-icon :icon="card_4.footer_text_1_icon" svgClasses="h-5 w-5 text-warning stroke-current" />
                                <span class="ml-2">{{ card_4.footer_text_1 }}</span>
                            </span>
                            <span class="flex items-center">
                                <feather-icon :icon="card_4.footer_text_2_icon" svgClasses="h-5 w-5 text-primary stroke-current" />
                                <span class="ml-2">{{ card_4.footer_text_2 }}</span>
                            </span>
                        </div>
                    </template>                
                </vx-card>
                </div>
              </div>
              <div class="vx-row mb-12 mt-10 w-full lg:w-full">
                <div class="vx-col w-full lg:w-full">
                <div id="page-user-list">

                  <div class="vx-card p-6">

                    <div class="flex flex-wrap items-center">

                      <!-- ITEMS PER PAGE -->
                      <div class="flex-grow">
                        <vs-dropdown vs-trigger-click class="cursor-pointer">
                          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                            <span class="mr-2">{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} - {{ usersData.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : usersData.length }} of {{ usersData.length }}</span>
                            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                          </div>
                          <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button>
                          <vs-dropdown-menu>

                            <vs-dropdown-item @click="paginationSetPageSize(10)">
                              <span>10</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="paginationSetPageSize(20)">
                              <span>20</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="paginationSetPageSize(25)">
                              <span>25</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="paginationSetPageSize(30)">
                              <span>30</span>
                            </vs-dropdown-item>
                          </vs-dropdown-menu>
                        </vs-dropdown>
                      </div>

                      <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
                        <vs-input class="sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
                        <!-- <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button> -->

                        <!-- ACTION - DROPDOWN -->
                        <vs-dropdown vs-trigger-click class="cursor-pointer">

                          <div class="p-3 shadow-drop rounded-lg d-theme-dark-light-bg cursor-pointer flex items-end justify-center text-lg font-medium w-32">
                            <span class="mr-2 leading-none">Actions</span>
                            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                          </div>

                          <vs-dropdown-menu>

                            <vs-dropdown-item>
                              <span class="flex items-center">
                                <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                                <span>Delete</span>
                              </span>
                            </vs-dropdown-item>

                            <vs-dropdown-item>
                              <span class="flex items-center">
                                <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                                <span>Archive</span>
                              </span>
                            </vs-dropdown-item>

                            <vs-dropdown-item>
                              <span class="flex items-center">
                                <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                                <span>Print</span>
                              </span>
                            </vs-dropdown-item>

                            <vs-dropdown-item>
                              <span class="flex items-center">
                                <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" class="mr-2" />
                                <span>CSV</span>
                              </span>
                            </vs-dropdown-item>

                          </vs-dropdown-menu>
                        </vs-dropdown>
                    </div>


            <!-- AgGrid Table -->
            <ag-grid-vue
        ref="agGridTable"
        class="ag-theme-material w-100 my-4 ag-grid-table"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="contacts"
        rowSelection="multiple"
        colResizeDefault="shift"
        :animateRows="true"
        :floatingFilter="true"
        :pagination="true"
        :paginationPageSize="paginationPageSize"
        :suppressPaginationPanel="true"
        :enableRtl="$vs.rtl">
      </ag-grid-vue>
      <vs-pagination
        :total="totalPages"
        :max="maxPageNumbers"
        v-model="currentPage" />

          </div>
        </div>
          </div>
          </div>
            </div>

            <!-- COL 2 -->
            <div class="vx-col w-full lg:w-1/3">

               <div class="vx-col w-full lg:w-full mb-base">
            <vx-card title="Top Owner Today">
          <div slot="no-body" class="mt-4">
            <vs-table :data="dispatchedOrders" class="table-dark-inverted">
              <template slot="thead">
                <vs-th>PRODUK</vs-th>
                <vs-th>PEMILIK</vs-th>
                <vs-th>LOKASI</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].orderNo">
                    <span>#{{data[indextr].orderNo}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <ul class="users-liked user-list">
                        <li v-for="(user, userIndex) in data[indextr].usersLiked" :key="userIndex">
                            <vx-tooltip :text="user.name" position="bottom">
                                <vs-avatar :src="user.img" size="30px" class="border-2 border-white border-solid -m-1"></vs-avatar>
                            </vx-tooltip>
                        </li>
                    </ul>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].location}}</span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
                </vx-card>
            </div>

                <vx-card title="Affiliator Baru" class="mt-base">
                    <!-- ACTION SLOT -->
                    <template slot="actions">
                        <vs-button size="small">Tampilkan Semua</vs-button>
                    </template>

                    <!-- FRIENDS LIST -->
                    <ul class="friend-suggesions-list">
                        <li class="friend-suggestion flex items-center mb-4" v-for="(friend, index) in suggestedFriends" :key="index">
                            <div class="mr-3"><vs-avatar class="m-0" :src="friend.avatar" size="35px" /></div>
                            <div class="leading-tight">
                                <p class="font-medium">{{ friend.name }}</p>
                                <span class="text-xs">{{ friend.mutualFriends }} Mutual Friends</span>
                            </div>
                            <div class="ml-auto cursor-pointer">
                                
                            </div>
                        </li>
                    </ul>
                    <template slot="footer">
                    <vs-button icon-pack="feather" icon="icon-plus" class="w-full">Load More</vs-button>
                    </template>
                </vx-card>

                <vx-card title="Polls" class="mt-base">
                    <ul class="polls-list">
                        <li class="poll" v-for="poll in polls" :key="poll.id">
                            <h6 class="poll-title">{{ poll.title }}</h6>
                            <ul class="poll-options-result">
                                <li class="poll-option mt-6" v-for="option in poll.options" :key="option.value">
                                    <div class="flex">
                                        <vs-radio v-model="userPoll" :vs-value="option.value">{{ option.text | capitalize }}</vs-radio>
                                        <span class="block ml-auto">{{ option.voted }}%</span>
                                    </div>
                                    <vs-progress :percent="option.voted"></vs-progress>
                                    <ul class="users-voted user-list mt-2">
                                        <li v-for="(user, userIndex) in option.usersVoted" :key="userIndex">
                                            <vx-tooltip :text="user.name" position="bottom">
                                                <vs-avatar :src="user.avatar" size="30px" class="border-2 border-white border-solid -m-1"></vs-avatar>
                                            </vx-tooltip>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <vs-button class="mt-5 w-full">Vote Now</vs-button>
                        </li>
                    </ul>
                </vx-card>
            </div>
        </div>

        <div class="vx-row">
            <div class="vx-col w-full">
                <div class="flex justify-center mt-base">
                    <vs-button id="button-load-more-posts" class="vs-con-loading__container" @click="loadContent">Load More</vs-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import '@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from '@/views/ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VxTimeline from '@/components/timeline/VxTimeline.vue'
import { AgGridVue } from 'ag-grid-vue'
import vSelect from 'vue-select'
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'
export default {
  
  data () {
    return {
      maxPageNumbers: 7,
      isNavOpen: false,
      userPoll: '',
      searchQuery: '',
      gridOptions: {},
      defaultColDef: {
        sortable: true,
        resizable: true,
        suppressMenu: true
      },
      dispatchedOrders: [
        {
          orderNo: 879985,
          status: 'Moving',
          statusColor: 'success',
          operator: 'Cinar Knowles',
          operatorImg: require('@/assets/images/pages/s.jpg'),
          usersLiked: [
            {
              name: 'Vennie Mostowy',
              img: require('@/assets/images/pages/s.jpg')
            },
            {
              name: 'Elicia Rieske',
              img: require('@/assets/images/pages/s.jpg')
            },
            {
              name: 'Julee Rossignol',
              img: require('@/assets/images/pages/s.jpg')
            },
            {
              name: 'Darcey Nooner',
              img: require('@/assets/images/pages/s.jpg')
            }
          ],
          location: 'Anniston, Alabama',
          distance: '130 km',
          distPercent: 80,
          startDate: '26/07/2018',
          estDelDate: '28/07/2018'
        },
        {
          orderNo: 156897,
          status: 'Pending',
          statusColor: 'warning',
          operator: 'Britany Ryder',
          operatorImg: require('@/assets/images/pages/s.jpg'),
          usersLiked: [
            {
              name: 'Trina Lynes',
              img: require('@/assets/images/pages/s.jpg')
            },
            {
              name: 'Lilian Nenez',
              img: require('@/assets/images/pages/s.jpg')
            },
            {
              name: 'Alberto Glotzbach',
              img: require('@/assets/images/pages/s.jpg')
            }
          ],
          location: 'Cordova, Alaska',
          distance: '234 km',
          distPercent: 60,
          startDate: '26/07/2018',
          estDelDate: '28/07/2018'
        },
        {
          orderNo: 568975,
          status: 'Moving',
          statusColor: 'success',
          operator: 'Kishan Ashton',
          operatorImg: require('@/assets/images/pages/s.jpg'),
          usersLiked: [
            {
              name: 'Lai Lewandowski',
              img: require('@/assets/images/pages/s.jpg')
            },
            {
              name: 'Elicia Rieske',
              img: require('@/assets/images/pages/s.jpg')
            },
            {
              name: 'Darcey Nooner',
              img: require('@/assets/images/pages/s.jpg')
            },
            {
              name: 'Julee Rossignol',
              img: require('@/assets/images/pages/s.jpg')
            },
            {
              name: 'Jeffrey Gerondale',
              img: require('@/assets/images/pages/s.jpg')
            }
          ],
          location: 'Florence, Alabama',
          distance: '168 km',
          distPercent: 70,
          startDate: '26/07/2018',
          estDelDate: '28/07/2018'
        },
        {
          orderNo: 245689,
          status: 'Canceled',
          statusColor: 'danger',
          operator: 'Anabella Elliott',
          operatorImg: require('@/assets/images/pages/s.jpg'),
          usersLiked: [
            {
              name: 'Vennie Mostowy',
              img: require('@/assets/images/pages/s.jpg')
            },
            {
              name: 'Elicia Rieske',
              img: require('@/assets/images/pages/s.jpg')
            }
          ],
          location: 'Clifton, Arizona',
          distance: '125 km',
          distPercent: 95,
          startDate: '26/07/2018',
          estDelDate: '28/07/2018'
        }
      ],
      columnDefs: [
        {
          headerName: 'ID',
          field: 'id',
          width: 125,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true
        },
        {
          headerName: 'Username',
          field: 'username',
          width: 210
        },
        {
          headerName: 'Email',
          field: 'email',
          width: 225
        },
        {
          headerName: 'Name',
          field: 'name',
          width: 200
        },
        {
          headerName: 'Country',
          field: 'country',
          width: 150
        },
        {
          headerName: 'Role',
          field: 'role',
          width: 150
        },
        {
          headerName: 'Status',
          field: 'status',
          width: 150
        },
        {
          headerName: 'Department',
          field: 'department',
          width: 150
        },
        {
          headerName: 'Actions',
          field: 'transactions',
          width: 150
        }
      ],
    
      user_info: {
        profile_img: require('@/assets/images/pages/s.jpg'),
        cover_img: require('@/assets/images/pages/s.jpg')
      },
      analyticsData,
      card_4: {},
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      },
      contacts:[
        {
          'firstname': 'Essie',
          'lastname': 'Vaill',
          'company': 'Litronic Industries',
          'address': '14225 Hancock Dr',
          'city': 'Anchorage',
          'country': 'Anchorage',
          'state': 'AK',
          'zip': '99515',
          'phone': '907-345-0962',
          'fax': '907-345-1215',
          'email': 'essie@vaill.com',
          'web': 'http://www.essievaill.com',
          'followers': 354
        },
        {
          'firstname': 'Essie',
          'lastname': 'Vaill',
          'company': 'Litronic Industries',
          'address': '14225 Hancock Dr',
          'city': 'Anchorage',
          'country': 'Anchorage',
          'state': 'AK',
          'zip': '99515',
          'phone': '907-345-0962',
          'fax': '907-345-1215',
          'email': 'essie@vaill.com',
          'web': 'http://www.essievaill.com',
          'followers': 354
        },
        {
          'firstname': 'Essie',
          'lastname': 'Vaill',
          'company': 'Litronic Industries',
          'address': '14225 Hancock Dr',
          'city': 'Anchorage',
          'country': 'Anchorage',
          'state': 'AK',
          'zip': '99515',
          'phone': '907-345-0962',
          'fax': '907-345-1215',
          'email': 'essie@vaill.com',
          'web': 'http://www.essievaill.com',
          'followers': 354
        }
      ],
      suggestedFriends: [
        { name: 'Carissa Dolle', avatar: require('@/assets/images/pages/s.jpg'),  mutualFriends: 6 },
        { name: 'Liliana Pecor', avatar: require('@/assets/images/pages/s.jpg'),  mutualFriends: 3 },
        { name: 'Isidra Strunk', avatar: require('@/assets/images/pages/s.jpg'),  mutualFriends: 2 },
        { name: 'Gerald Licea',  avatar: require('@/assets/images/pages/s.jpg'),  mutualFriends: 1 },
        { name: 'Kelle Herrick', avatar: require('@/assets/images/pages/s.jpg'),  mutualFriends: 1 },
        { name: 'Cesar Lee',     avatar: require('@/assets/images/pages/s.jpg'), mutualFriends: 1 },
        { name: 'John Doe',      avatar: require('@/assets/images/pages/s.jpg'), mutualFriends: 1 },
        { name: 'Tonia Seabold', avatar: require('@/assets/images/pages/s.jpg'), mutualFriends: 1 }
      ],
      userLatestPhotos: [
        require('@/assets/images/pages/s.jpg'),
        require('@/assets/images/pages/s.jpg'),
        require('@/assets/images/pages/s.jpg'),
        require('@/assets/images/pages/s.jpg'),
        require('@/assets/images/pages/s.jpg'),
        require('@/assets/images/pages/s.jpg'),
        require('@/assets/images/pages/s.jpg'),
        require('@/assets/images/pages/s.jpg'),
        require('@/assets/images/pages/s.jpg')
      ],
      
      userPosts: [
        {
          author     : 'Leeanna Alvord',
          time       : 'Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)',
          isLiked    : true,
          text       : 'I love jujubes wafer pie ice cream tiramisu. Chocolate I love pastry pastry sesame snaps wafer. Pastry topping biscuit lollipop topping I love lemon drops sweet roll bonbon. Brownie donut icing.',
          media      : [{ img: require('@/assets/images/pages/s.jpg') }],
          likes      : 145,
          comments   : 77,
          usersLiked : [
            { name: 'Trina Lynes',       img: require('@/assets/images/pages/s.jpg') },
            { name: 'Lilian Nenez',      img: require('@/assets/images/pages/s.jpg') },
            { name: 'Alberto Glotzbach', img: require('@/assets/images/pages/s.jpg') },
            { name: 'George Nordick',    img: require('@/assets/images/pages/s.jpg') },
            { name: 'Vennie Mostowy',    img: require('@/assets/images/pages/s.jpg') }
          ],
          commentbox : '',
          usersCommented: [
            {
              comment : 'orthoplumbate morningtide naphthaline exarteritis',
              author  : 'Kitty Allanson',
              img     : require('@/assets/images/pages/s.jpg'),
              time    : 'Mon Dec 10 2018 08:56:05 GMT+0000 (GMT)'
            },
            {
              comment : 'blockiness pandemy metaxylene speckle coppy',
              author  : 'Jeanie Bulgrin',
              img     : require('@/assets/images/pages/s.jpg'),
              time    : 'Mon Dec 10 2018 08:55:00 GMT+0000 (GMT)'
            }
          ]
        },
        {
          author     : 'Leeanna Alvord',
          time       : 'Mon Dec 11 2018 08:05:05 GMT+0000 (GMT)',
          isLiked    : false,
          text       : 'Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake. Cupcake I love wafer cake. Halvah I love powder jelly I love cheesecake cotton candy tiramisu brownie.',
          media      : [{ img: require('@/assets/images/pages/s.jpg') }],
          likes      : 276,
          comments   : 105,
          usersLiked : [
            { name: 'Lai Lewandowski',   img: require('@/assets/images/pages/s.jpg')  },
            { name: 'Elicia Rieske',     img: require('@/assets/images/pages/s.jpg')  },
            { name: 'Darcey Nooner',     img: require('@/assets/images/pages/s.jpg')  },
            { name: 'Julee Rossignol',   img: require('@/assets/images/pages/s.jpg') },
            { name: 'Jeffrey Gerondale', img: require('@/assets/images/pages/s.jpg')  }
          ],
          commentbox: '',
          usersCommented: [
            {
              comment : 'I love cupcake danish jujubes sweet.',
              author  : 'Darcey Nooner',
              img     : require('@/assets/images/pages/s.jpg'),
              time    : 'Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)'
            },
            {
              comment : 'Wafer I love brownie jelly bonbon tart apple pie',
              author  : 'Lai Lewandowski',
              img     : require('@/assets/images/pages/s.jpg'),
              time    : 'Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)'
            }
          ]
        },
        {
          author     : 'Leeanna Alvord',
          time       : 'Mon Dec 10 2018 12:05:05 GMT+0000 (GMT)',
          isLiked    : false,
          text       : 'Wafer I love brownie jelly bonbon tart. Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.',
          media      : [{ sources: [{ type: 'video/mp4', src: 'http://vjs.zencdn.net/v/oceans.mp4' }], poster: 'https://goo.gl/xcCsDd' }],
          likes      : 269,
          comments   : 98,
          usersLiked : [
            { name: 'Vennie Mostowy',  img: require('@/assets/images/pages/s.jpg')  },
            { name: 'Elicia Rieske',   img: require('@/assets/images/pages/s.jpg')  },
            { name: 'Julee Rossignol', img: require('@/assets/images/pages/s.jpg') },
            { name: 'Darcey Nooner',   img: require('@/assets/images/pages/s.jpg')  },
            { name: 'Elicia Rieske',   img: require('@/assets/images/pages/s.jpg')  }
          ],
          commentbox: '',
          usersCommented: [
            {
              comment : 'I love cupcake danish jujubes sweet.',
              author  : 'Darcey Nooner',
              img     : require('@/assets/images/pages/s.jpg'),
              time    : 'Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)'
            },
            {
              comment : 'Wafer I love brownie jelly bonbon tart apple pie',
              author  : 'Lai Lewandowski',
              img     : require('@/assets/images/pages/s.jpg'),
              time    : 'Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)'
            }
          ]
        }
      ],
      suggestedPages: [
        { img: require('@/assets/images/pages/s.jpg'), title: 'Rockose',      type: 'Company'          },
        { img: require('@/assets/images/pages/s.jpg'), title: 'The Devil\'s', type: 'Clothing Store'   },
        { img: require('@/assets/images/pages/s.jpg'), title: 'The Magician', type: 'Public Figure'    },
        { img: require('@/assets/images/pages/s.jpg'), title: 'AC/DC',        type: 'Music'            },
        { img: require('@/assets/images/pages/s.jpg'), title: 'eat hard',     type: 'restaurant / bar' },
        { img: require('@/assets/images/pages/s.jpg'), title: 'B4B',          type: 'Beauty Store'     },
        { img: require('@/assets/images/pages/s.jpg'), title: 'Kylie Jenner', type: 'Public Figure'    },
        { img: require('@/assets/images/pages/s.jpg'), title: 'RDJ',          type: 'Actor'            },
        { img: require('@/assets/images/pages/s.jpg'), title: 'Taylor Swift', type: 'Music'            }
      ],
      polls: [
        {
          id: 59,
          title: 'Who is the best actor in Marvel Cinematic Universe?',
          options: [
            {
              text       : 'RDJ',
              value      : 'rdj',
              voted      : 58,
              usersVoted : [
                { name: 'Tonia Seabold',  avatar: require('@/assets/images/pages/s.jpg') },
                { name: 'Carissa Dolle',  avatar: require('@/assets/images/pages/s.jpg') },
                { name: 'Kelle Herrick',  avatar: require('@/assets/images/pages/s.jpg') },
                { name: 'Len Bregantini', avatar: require('@/assets/images/pages/s.jpg') },
                { name: 'John Doe',       avatar: require('@/assets/images/pages/s.jpg') },
                { name: 'Tonia Seabold',  avatar: require('@/assets/images/pages/s.jpg') },
                { name: 'Dirk Fornili',   avatar: require('@/assets/images/pages/s.jpg') }
              ]
            },
            {
              text       : 'Chris Hemsworth',
              value      : 'chris hemsworth',
              voted      : 16,
              usersVoted : [
                { name: 'Liliana Pecor',      avatar: require('@/assets/images/pages/s.jpg') },
                { name: 'Kasandra Nalevanko', avatar: require('@/assets/images/pages/s.jpg') }
              ]
            },
            {
              text       : 'mark ruffalo',
              value      : 'mark ruffalo',
              voted      : 8,
              usersVoted : [{ name: 'Lorelei Lacsamana', avatar: require('@/assets/images/pages/s.jpg') }]
            },
            {
              text       : 'Chris Evans',
              value      : 'chris evans',
              voted      : 16,
              usersVoted : [
                { name: 'Jeanie Bulgrin', avatar: require('@/assets/images/pages/s.jpg') },
                { name: 'Graig Muckey',   avatar: require('@/assets/images/pages/s.jpg') }
              ]
            }
          ]

        }
      ],
      twitterFeeds: [
        {
          authorAvatar      : require('@/assets/images/pages/s.jpg'),
          authorUsername    : 'tiana59',
          authorDisplayName : 'Tiana Vercetti',
          content           : 'I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups.',
          tags              : ['js', 'vuejs'],
          time              : 'Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)'
        },
        {
          authorAvatar      : require('@/assets/images/pages/s.jpg'),
          authorUsername    : 'tiana59',
          authorDisplayName : 'Tiana Vercetti',
          content           : 'Carrot cake cake gummies I love I love tiramisu. Biscuit marzipan cookie lemon drops.',
          tags              : ['python'],
          time              : 'Mon Dec 11 2018 01:05:05 GMT+0000 (GMT)'
        },
        {
          authorAvatar      : require('@/assets/images/pages/s.jpg'),
          authorUsername    : 'tiana59',
          authorDisplayName : 'Tiana Vercetti',
          content           : 'I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups .',
          tags              : [],
          time              : 'Mon Dec 10 2018 03:33:05 GMT+0000 (GMT)'
        },
        {
          authorAvatar      : require('@/assets/images/pages/s.jpg'),
          authorUsername    : 'tiana59',
          authorDisplayName : 'Tiana Vercetti',
          content           : 'Muffin candy caramels. I love caramels tiramisu jelly. Pie I love wafer. Chocolate cake lollipop tootsie roll cake.',
          tags              : ['django', 'vuejs'],
          time              : 'Mon Dec 9 2018 08:47:05 GMT+0000 (GMT)'
        }
      ],
      wasSidebarOpen: null,
      customersData: {}
    }
  },
  watch: {
    roleFilter (obj) {
      this.setColumnFilter('role', obj.value)
    },
    statusFilter (obj) {
      this.setColumnFilter('status', obj.value)
    },
    isVerifiedFilter (obj) {
      const val = obj.value === 'all' ? 'all' : obj.value === 'yes' ? 'true' : 'false'
      this.setColumnFilter('is_verified', val)
    },
    departmentFilter (obj) {
      this.setColumnFilter('department', obj.value)
    }
  },
  methods: {
    setColumnFilter (column, val) {
      const filter = this.gridApi.getFilterInstance(column)
      let modelObj = null

      if (val !== 'all') {
        modelObj = { type: 'equals', filter: val }
      }

      filter.setModel(modelObj)
      this.gridApi.onFilterChanged()
    },
    resetColFilters () {
      // Reset Grid Filter
      this.gridApi.setFilterModel(null)
      this.gridApi.onFilterChanged()

      // Reset Filter Options
      this.roleFilter = this.statusFilter = this.isVerifiedFilter = this.departmentFilter = { label: 'All', value: 'all' }

      this.$refs.filterCard.removeRefreshAnimation()
    },
    updateSearchQuery (val) {
      this.gridApi.setQuickFilter(val)
    },
    loadContent () {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: '#button-load-more-posts',
        scale: 0.45
      })
      setTimeout(() => {
        this.$vs.loading.close('#button-load-more-posts > .con-vs-loading')
      }, 3000)
    }
  },
  mounted () {
    this.gridApi = this.gridOptions.api
    if (this.$vs.rtl) {
      const header = this.$refs.agGridTable.$el.querySelector('.ag-header-container')
      header.style.left = `-${  String(Number(header.style.transform.slice(11, -3)) + 9)  }px`
    }
    this.wasSidebarOpen = this.$store.state.reduceButton
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
  },
  beforeDestroy () {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
  },
  computed: {
    usersData () {
      return this.$store.state.userManagement.users
    },
    paginationPageSize () {
      if (this.gridApi) return this.gridApi.paginationGetPageSize()
      else return 10
    },
    totalPages () {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages()
      else return 0
    },
    currentPage: {
      get () {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
        else return 1
      },
      set (val) {
        this.gridApi.paginationGoToPage(val - 1)
      }
    }
  },
  
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown,
    VuePerfectScrollbar,
    VxTimeline,
    AgGridVue,
    vSelect
  },
  created () {
    if (!moduleUserManagement.isRegistered) {
      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    }
    this.$store.dispatch('userManagement/fetchUsers').catch(err => { console.error(err) })
    // Customers
    this.$http.get('/api/card/card-analytics/customers')
      .then((response) => { this.customersData = response.data })
      .catch((error) => { console.log(error) })
  }
}

</script>

<style lang="scss">
/*=========================================================================================
    File Name: profile.scss
    Description: Profile page styles
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


#profile-page {
    .profile-img-container {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: -3.6rem;
        left: 10%;
        width: 80%;
        justify-content: space-between;
    }

    .user-profile-img {
        border: .3rem solid #fff;
        box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.3);
    }

    .user-latest-image {
        transition: all .2s ease-in-out;

        &:hover {
            transform: scale(1.2);
        }
    }

    .profile-header-nav {
        background-color: #fff;
    }
}
#page-user-list {
  .user-list-filters {
    .vs__actions {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-58%);
    }
  }
}
$icons-path: "~ag-grid-community/src/styles/ag-theme-material/icons/" !default;

$font-family: inherit;
$font-size: inherit;
$font-weight: inherit;
$secondary-font-family: inherit;
$secondary-font-size: inherit;
$secondary-font-weight: 600;
$primary-color: #7367F0;


.ag-grid-table {

  color: inherit !important;

  height: calc(var(--vh, 1vh) * 100 - 30rem);
  @media screen and (max-height: 800px) {
    height: 620px;
  }

  .ag-header-cell {
    .ag-cell-label-container {
      .ag-header-icon.ag-filter-icon {
        display: none;
      }
    }
  }

  // style select of column header filter
  .ag-filter-select {
    padding: 0.3rem;
    background: transparent;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, .2);
  }

  // style input of column header filter input
  .ag-filter-filter {
    margin-right: 10px;
    margin-left: 10px;
    padding-bottom: 0 !important;
    padding-bottom: 0 !important;
    height: 25px !important;
    margin-top: 10px;
    margin-bottom: 14px !important;
  }

  // remove extra padding of input in inline edit
  .ag-input-text-wrapper {
    input {
      padding-bottom: 0 !important;
    }
  }

  // Make input border bottom visible
  .ag-floating-filter-body {
    height: unset;
  }

  .ag-cell-inline-editing {
    height: 62px !important;
  }

  .ag-cell-inline-editting,
  .ag-popup-editor {
    padding-bottom: 12px;
  }

  .ag-grid-table-actions-right {
    @media screen and (max-width: 614px) {
      flex-grow: 1;
    }
  }

  .ag-grid-table-actions-left {
    @media screen and (max-width: 614px) and (min-width: 443px) {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }
  }

  // remove horizontal scroolbar from pinned columns
  .ag-horizontal-left-spacer, .ag-horizontal-right-spacer {
    overflow-x: auto;
  }

  .ag-icon-checkbox-checked,
  .ag-icon-checkbox-indeterminate {
    font-size: 22px;
    color: rgba(var(--vs-primary),1) !important;
  }

  .ag-icon-checkbox-unchecked {
    color: grey !important;
    font-size: 22px;
  }

    ::-webkit-scrollbar {
     width: 10px;
     height: 10px;
    }

    ::-webkit-scrollbar-thumb {
     background: grey;
     border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
     background: yellow;
     border-radius: 20px;
    }
}

// Can not use vuexy admin variables
// agGrid vars and imported vars may conflict
.theme-dark {
  .ag-grid-table {
    &.ag-theme-material {
      background: transparent;
      color: rgb(114, 114, 114);

      .ag-header {
        background: transparent;
        color: white;
        border-bottom-color: rgb(44, 44, 44);
      }

      .ag-cell-last-left-pinned {
        border-right-color: rgb(44, 44, 44) !important;
      }

      .ag-floating-filter-input {
        color:rgb(160, 160, 160);
        border-bottom-color: rgb(44, 44, 44);
      }

      .ag-row-hover,
      .ag-header-cell:hover {
        background-color:rgb(235, 232, 232);
      }

      .ag-row-selected {
        background: rgb(235, 232, 232);
      }

      .ag-row,
      .ag-header-cell,
      .ag-header-group-cell,
      .ag-row,
      .ag-pinned-left-header,
      .ag-horizontal-left-spacer,
      .ag-horizontal-right-spacer {
        border-color: rgb(44, 44, 44);
      }
    }

    .ag-icon-checkbox-unchecked,
    .ag-icon-filter,
    .ag-icon-asc,
    .ag-icon-desc {
      color: rgb(160, 160, 160) !important;
    }

    .ag-filter-body-wrapper {
      background-color: rgb(235, 232, 232);
    }

    .ag-filter-select {
      border-color: rgb(44, 44, 44);
      color: rgb(160, 160, 160);
    }

    option {
      background-color: rgb(37, 37, 37);
    }

    ::-webkit-scrollbar {
     width: 10px;
     height: 10px;
    }

    ::-webkit-scrollbar-thumb {
     background: rgba(211, 211, 71, 0.842);
     border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
     background: rgb(235, 232, 232);
     border-radius: 20px;
    }
  }
}

// Custom Fixes
.ag-grid-cell-chip {
  top: 50%;
  transform: translateY(-50%);
  line-height: 1;
}
</style>