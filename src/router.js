/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      meta: { requiresAuth: true },
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          redirect: '/owner'
        },
        // =============================================================================
        // Theme Routes owner
        // =============================================================================
        {
          path: '/owner',
          name: 'dashboard',
          component: () => import('./views/pages/owner/Dashboard.vue'),
          meta: {
            rule: 'owner'
          }
        },
        {
          path: '/owner/transaction',
          name: 'transaction',
          redirect: '/owner/transaction/all'
        },
        {
          path: '/owner/transaction/:filter',
          component: () => import('./views/pages/owner/Transaksi.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Transaksi', active: true }
            ],
            pageTitle: 'Transaksi',
            parent: 'transaction',
            no_scroll: true,
            rule: 'owner'
          }
        },
        {
          path: '/owner/report/product',
          name: 'laporan produk',
          component: () => import('./views/pages/owner/report/Produk.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'laporan produk', active: true }
            ],
            pageTitle: 'laporan produk',
            rule: 'owner'
          }
        },
        {
          path: '/owner/report/sales',
          name: 'laporan penjualan',
          component: () => import('./views/pages/owner/report/Penjualan.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Laporan Penjualan', active: true }
            ],
            pageTitle: 'Laporan Penjualan',
            rule: 'owner'
          }
        },
        {
          path: '/owner/report/payment',
          name: 'laporan pembayaran',
          component: () => import('./views/pages/owner/report/Pembayaran.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Laporan Pembayaran', active: true }
            ],
            pageTitle: 'Laporan Pembayaran',
            rule: 'owner'
          }
        },
        {
          path: '/owner/report/customer',
          name: 'laporan pelanggan',
          component: () => import('./views/pages/owner/report/Pelanggan.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner/report' },
              { title: 'Laporan Pelanggan', active: true }
            ],
            pageTitle: 'Laporan Pelanggan',
            rule: 'owner'
          }
        },
        {
          path: '/owner/report/category',
          name: 'laporan kategori',
          component: () => import('./views/pages/owner/report/Kategori.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner/report' },
              { title: 'Laporan Kategori', active: true }
            ],
            pageTitle: 'Laporan Kategori',
            rule: 'owner'
          }
        },
        {
          path: '/owner/report/discount',
          name: 'laporan diskon',
          component: () => import('./views/pages/owner/report/Diskon.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner/report' },
              { title: 'Laporan Diskon', active: true }
            ],
            pageTitle: 'Laporan Diskon',
            rule: 'owner'
          }
        },
        {
          path: '/owner/report',
          name: 'laporan',
          component: () => import('./views/pages/owner/Laporan.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Laporan', active: true }
            ],
            pageTitle: 'Laporan',
            rule: 'owner'
          }
        },
        {
          path: '/owner/product',
          name: 'produk',
          component: () => import('./views/pages/owner/Produk.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Produk', url: '/owner/product' },
              { title: 'Daftar Produk', active: true }
            ],
            pageTitle: 'Daftar Produk',
            rule: 'owner'
          }
        },
        {
          path: '/owner/product/add',
          name: 'produk-add',
          component: () => import('./views/pages/owner/ProductAdd.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Produk', url: '/owner/product' },
              { title: 'Tambah Produk', active: true }
            ],
            pageTitle: 'Tambah Produk',
            rule: 'owner'
          }
        },
        {
          path: '/owner/product/category',
          name: 'kategori',
          component: () => import('./views/pages/owner/Kategori.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Produk', url: '/owner/product' },
              { title: 'Kategori', active: true }
            ],
            pageTitle: 'Kategori',
            rule: 'owner'
          }
        },
        {
          path: '/owner/product/coupon',
          name: 'kupon',
          component: () => import('./views/pages/owner/Kupon.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Produk', url: '/owner' },
              { title: 'Kupon', active: true }
            ],
            pageTitle: 'Kupon',
            rule: 'owner'
          }
        },
        {
          path: '/owner/customer',
          name: 'pelanggan',
          component: () => import('./views/pages/owner/Pelanggan.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Pelanggan', active: true }
            ],
            pageTitle: 'Pelanggan',
            rule: 'owner'
          }
        },
        {
          path: '/owner/payment',
          name: 'pembayaran',
          component: () => import('./views/pages/owner/Pembayaran.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Pembayaran', active: true }
            ],
            pageTitle: 'Pembayaran',
            rule: 'owner'
          }
        },
        {
          path: '/owner/supplier',
          name: 'supplier',
          component: () => import('./views/pages/owner/Supplier.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Supplier', active: true }
            ],
            pageTitle: 'Supplier',
            rule: 'owner'
          }
        },
        {
          path: '/owner/addstock',
          name: 'tambah stok',
          component: () => import('./views/pages/owner/TambahStok.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Tambah Stok', active: true }
            ],
            pageTitle: 'Tambah Stok',
            rule: 'owner'
          }
        },
        {
          path: '/owner/setstock',
          name: 'penyesuaian stok',
          component: () => import('./views/pages/owner/AturStok.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Penyesuaian Stok', active: true }
            ],
            pageTitle: 'Penyesuaian Stok',
            rule: 'owner'
          }
        },
        {
          path: '/owner/employee-settings',
          name: 'karyawan-settings',
          component: () => import(
              './views/pages/owner/user-settings/UserSettingsKaryawan.vue'
            ),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Settings Karyawan', active: true }
            ],
            pageTitle: 'Settings Karyawan',
            rule: 'owner'
          }
        },
        {
          path: '/owner/manage',
          name: 'kelola',
          component: () => import('./views/pages/owner/Kelola.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Kelola', active: true }
            ],
            pageTitle: 'Kelola',
            rule: 'owner'
          }
        },
        {
          path: '/owner/shop-settings',
          name: 'pengaturan',
          component: () => import('./views/pages/owner/Pengaturan.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Pengaturan', url: '/owner' },
              { title: 'Pengaturan Toko', active: true }
            ],
            pageTitle: 'Pengaturan Toko',
            rule: 'owner'
          }
        },
        {
          path: '/owner/shop-settings/shop-add',
          name: 'tambahpengaturan',
          component: () => import('./views/pages/owner/user-settings/SettingsShopAdd.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Pengaturan', url: '/owner' },
              { title: 'Pengaturan Tambah Toko', active: true }
            ],
            pageTitle: 'Pengaturan Tambah Toko',
            rule: 'owner'
          }
        },
        {
          path: '/owner/employee-settings',
          name: 'karyawan',
          component: () => import('./views/pages/owner/Karyawan.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Pengaturan', url: '/owner' },
              { title: 'Karyawan', active: true }
            ],
            pageTitle: 'Karyawan',
            rule: 'owner'
          }
        },
        {
          path: '/owner/profile',
          name: 'profil',
          component: () => import('./views/pages/owner/Profil.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/owner' },
              { title: 'Profil', active: true }
            ],
            pageTitle: 'Profil',
            rule: 'owner'
          }
        },
        {
          path: '/owner/user-settings',
          name: 'page-user-settings',
          component: () => import('@/views/pages/owner/user-settings/UserSettings.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pages' },
              { title: 'User Settings', active: true }
            ],
            pageTitle: 'Settings',
            rule: 'owner'
          }
        },
        {
          path: '/pages/owner/user-view',
          name: 'page-user-view',
          component: () => import('@/views/pages/owner/UserView.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: 'Pages' },
              { title: 'User View', active: true }
            ],
            pageTitle: 'View',
            rule: 'owner'
          }
        }
      ]
    },
    // =============================================================================
    // MAIN ADMIN LAYOUT ROUTES
    // =============================================================================
    {
      path: '',
      component: () => import('./layouts/main/MainAdmin.vue'),
      meta: { requiresAuth: true },
      children: [
        // =============================================================================
        // Theme Routes Admin
        // =============================================================================
        {
          path: '/admin',
          name: 'admin',
          component: () => import('./views/pages/admin/Dashboard.vue'),
          meta: {
            rule: 'admin'
          }
        },
        {
          path: '/admin/transaction',
          name: 'transaksi-pesanyuk',
          component: () => import('./views/pages/admin/Transaksi.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Transaksi', active: true }
            ],
            pageTitle: 'Transaksi',
            rule: 'admin'
          }
        },
        {
          path: '/admin/report',
          name: 'laporan-pesanyuk',
          component: () => import('./views/pages/admin/Laporan.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Laporan', active: true }
            ],
            pageTitle: 'Laporan',
            rule: 'admin'
          }
        },
        {
          path: '/admin/member',
          name: 'member-pesanyuk',
          component: () => import('./views/pages/admin/Member.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Member', active: true }
            ],
            pageTitle: 'Member',
            rule: 'admin'
          }
        },
        {
          path: '/admin/payment',
          name: 'pembayaran-pesanyuk',
          component: () => import('./views/pages/admin/Pembayaran.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Pembayaran', active: true }
            ],
            pageTitle: 'Pembayaran',
            rule: 'admin'
          }
        },
        {
          path: '/admin/affiliate',
          name: 'affiliate-pesanyuk',
          component: () => import('./views/pages/admin/affiliate/Member.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Affiliate', active: true }
            ],
            pageTitle: 'Affiliate',
            rule: 'admin'
          }
        },
        {
          path: '/admin/affiliate/leaderboard',
          name: 'leaderboard-pesanyuk',
          component: () => import('./views/pages/admin/affiliate/Leaderboard.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Leaderboard', active: true }
            ],
            pageTitle: 'Leaderboard',
            rule: 'admin'
          }
        },
        {
          path: '/admin/affiliate/setting',
          name: 'pengaturan-pesanyuk',
          component: () => import('./views/pages/admin/affiliate/Setting.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Pengaturan', active: true }
            ],
            pageTitle: 'Pengaturan',
            rule: 'admin'
          }
        },
        {
          path: '/admin/affiliate/commission',
          name: 'komisi-pesanyuk',
          component: () => import('./views/pages/admin/affiliate/Komisi.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Komisi', active: true }
            ],
            pageTitle: 'Komisi',
            rule: 'admin'
          }
        },
        {
          path: '/admin/affiliate/promotion',
          name: 'alat-promosi-pesanyuk',
          component: () => import('./views/pages/admin/affiliate/Alatpromosi.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Alat Promosi', active: true }
            ],
            pageTitle: 'Alat Promosi',
            rule: 'admin'
          }
        },
        {
          path: '/admin/affiliate/coupon',
          name: 'kupon-affiliate',
          component: () => import('./views/pages/admin/affiliate/Kupon.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Kupon', active: true }
            ],
            pageTitle: 'Kupon',
            rule: 'admin'
          }
        },
        {
          path: '/admin/package',
          name: 'paket-pesanyuk',
          component: () => import('./views/pages/admin/Paket.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Paket', active: true }
            ],
            pageTitle: 'Paket',
            rule: 'admin'
          }
        },
        {
          path: '/admin/coupons',
          name: 'kupon-pesanyuk',
          component: () => import('./views/pages/admin/Kupon.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Kupon', active: true }
            ],
            pageTitle: 'Kupon',
            rule: 'admin'
          }
        },
        {
          path: '/admin/notification',
          name: 'notifikasi-pesanyuk',
          component: () => import('./views/pages/admin/Notifikasi.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Notifikasi', active: true }
            ],
            pageTitle: 'Notifikasi',
            rule: 'admin'
          }
        },
        {
          path: '/admin/logupdate',
          name: 'logupdate-pesanyuk',
          component: () => import('./views/pages/admin/Logupdate.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/admin' },
              { title: 'Logupdate', active: true }
            ],
            pageTitle: 'Logupdate',
            rule: 'admin'
          }
        }
      ]
    },
    // =============================================================================
    // MAIN COURIER LAYOUT ROUTES
    // =============================================================================
    {
      path: '',
      component: () => import('./layouts/main/MainCourier.vue'),
      meta: { requiresAuth: true },
      children: [
        // =============================================================================
        // Theme Routes Courier
        // =============================================================================
        {
          path: '/courier',
          name: 'courier',
          component: () => import('./views/pages/courier/Dashboard.vue'),
          meta: {
            rule: 'courier'
          }
        },
        {
          path: '/courier/setting',
          name: 'pengaturancourier',
          component: () => import('./views/pages/courier/Pengaturan.vue'),
          meta: {
            rule: 'courier'
          }
        },
        {
          path: '/courier/setting/add',
          name: 'pengaturancourieradd',
          component: () => import('./views/pages/courier/courier/SettingsEdit.vue'),
          meta: {
            rule: 'courier'
          }
        }
      ]
    },
    // =============================================================================
    // MAIN CASHIER LAYOUT ROUTES
    // =============================================================================
    {
      path: '',
      component: () => import('./layouts/main/MainCashier.vue'),
      meta: { requiresAuth: true },
      children: [
        // =============================================================================
        // Theme Routes Cashier
        // =============================================================================
        {
          path: '/cashier',
          name: 'dashboardkasir',
          component: () => import('./views/pages/cashier/Dashboard.vue'),
          meta: {
            rule: 'cashier'
          }
        },
        // {
        //   path: '/cashier/kasir/produk',
        //   name: 'produkkassir',
        //   component: () => import('./views/pages/cashier/KasirProduk.vue'),
        //   meta: {
        //     rule: 'cashier'
        //   }
        // },
        {
          path: '/cashier/kasir/barcode',
          name: 'barcode',
          component: () => import('./views/pages/cashier/Barcode.vue'),
          meta: {
            rule: 'cashier'
          }
        },
        {
          path: '/cashier/riwayat',
          name: 'transaksikasir',
          component: () => import('./views/pages/cashier/Riwayat.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/cashier' },
              { title: 'Riwayat', active: true }
            ],
            pageTitle: 'Riwayat',
            rule: 'cashier'
          }
        },
        {
          path: '/cashier/produk',
          name: 'produkkasir',
          component: () => import('./views/pages/cashier/Produk.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/cashier' },
              { title: 'Produk', active: true }
            ],
            pageTitle: 'Produk',
            rule: 'cashier'
          }
        },
        {
          path: '/cashier/product/add',
          name: 'cashier-produk-add',
          component: () => import('./views/pages/cashier/ProductAdd.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/cashier' },
              { title: 'Produk', url: '/cashier/product' },
              { title: 'Tambah Produk', active: true }
            ],
            pageTitle: 'Tambah Produk',
            rule: 'cashier'
          }
        },
        {
          path: '/cashier/rekapkas',
          name: 'rekapkas',
          component: () => import('./views/pages/cashier/RekapKas.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/rekapkas' },
              { title: 'Rekap Kas', active: true }
            ],
            pageTitle: 'Rekap Kas',
            rule: 'cashier'
          }
        },
        {
          path: '/cashier/setting',
          name: 'pengaturankasir',
          component: () => import('./views/pages/cashier/Pengaturan.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/cashier' },
              { title: 'Pengaturan', active: true }
            ],
            pageTitle: 'Pengaturan',
            rule: 'cashier'
          }
        },
        {
          path: '/cashier/setting/edit',
          name: 'pengaturankasiredit',
          component: () => import('./views/pages/cashier/PengaturanEdit.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/cashier' },
              { title: 'Pengaturan', active: true }
            ],
            pageTitle: 'Pengaturan',
            rule: 'cashier'
          }
        }
      ]
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('@/views/pages/Login.vue'),
          meta: {
            rule: 'public'
          }
        },

        {
          path: '/pages/packets',
          name: 'page-register',
          component: () => import('@/views/pages/Pilih-Paket.vue'),
          meta: {
            rule: 'public'
          }
        },
        {
          path: '/pages/register/:id',
          name: 'page-register-paket',
          component: () => import('@/views/pages/Register.vue'),
          meta: {
            rule: 'public'
          }
        },
        {
          path: '/pages/pembayaran',
          name: 'page-pembayaran',
          component: () => import('@/views/pages/Pembayaran.vue'),
          meta: {
            rule: 'public'
          }
        },
        {
          path: '/pages/pembayaran/success',
          name: 'page-pembayaransucess',
          component: () => import('@/views/pages/PembayaranSuccess.vue'),
          meta: {
            rule: 'public'
          }
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue'),
          meta: {
            rule: 'error'
          }
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ]
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
  // this route requires auth, check if logged in
  // if not, redirect to login page.
    if (!localStorage.getItem('accessToken')) {
      next({
        path: '/pages/login'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
export default router
