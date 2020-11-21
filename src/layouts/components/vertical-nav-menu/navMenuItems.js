
export default [  // Owner
  {
    url: '/owner',
    name: 'Dashboard',
    slug: 'dashboard',
    icon: 'GridIcon'
  },
  {
    header: 'Report',
    icon: 'PackageIcon',
    items: [
      {
        url: '/owner/transaction',
        name: 'Transaksi',
        slug: 'transaction',
        icon: 'ActivityIcon'
      },
      {
        url: '/owner/report',
        name: 'Laporan',
        slug: 'report',
        icon: 'FileTextIcon'
      },
      {
        url: '/owner/manage',
        name: 'Kelola kas',
        slug: 'manage',
        icon: 'GitPullRequestIcon'
      }
    ]
  },
  {
    header: 'Data',
    icon: 'PackageIcon',
    items: [
      {
        url: null,
        name: 'Produk',
        icon: 'PackageIcon',
        submenu: [
          {
            url: '/owner/product',
            name: 'Katalog',
            slug: 'product',
            icon: 'PackageIcon'
          },
          {
            url: '/owner/product/category',
            name: 'Kategori',
            slug: 'category',
            icon: 'LayersIcon'
          },
          {
            url: '/owner/product/coupon',
            name: 'Kupon',
            slug: 'coupon',
            icon: 'TagIcon'
          }
        ]
      },
      {
        url: '/owner/customer',
        name: 'Pelanggan',
        slug: 'customer',
        icon: 'UserCheckIcon'
      },
      {
        url: '/owner/payment',
        name: 'Pembayaran',
        slug: 'payment',
        icon: 'CreditCardIcon'
      },
      {
        url: '/owner/inventory',
        name: 'Inventaris',
        slug: 'inventory',
        icon: 'CodesandboxIcon',
        submenu: [
          {
            url: '/owner/supplier',
            name: 'Supplier',
            slug: 'supplier',
            icon: 'SettingsIcon'
          },
          {
            url: '/owner/addstock',
            name: 'Tambah Stok',
            slug: 'addstock',
            icon: 'UsersIcon'
          },
          {
            url: '/owner/setstock',
            name: 'Penyesuaian Stok',
            slug: 'setstock',
            icon: 'UsersIcon'
          }
        ]
      }
    ]
  },
  {
    header: 'Setting',
    icon: 'PackageIcon',
    items: [
      {
        url: null,
        name: 'Pengaturan',
        icon: 'SettingsIcon',
        submenu: [
          {
            url: '/owner/user-settings',
            name: 'Pengaturan Toko',
            slug: 'user-settings',
            icon: 'SettingsIcon'
          },
          {
            url: '/owner/employee-settings',
            name: 'Pengaturan Staff',
            slug: 'employee-settings',
            icon: 'UsersIcon'
          }
        ]
      }
    ]
  }
]
