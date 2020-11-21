
export default [

  // Owner
  {
    url: null,
    name: 'Kasir',
    icon: 'PackageIcon',
    submenu: [
      {
        url: '/cashier',
        name: 'Menu',
        slug: 'menu',
        icon: 'PackageIcon'
      },
      // {
      //   url: '/cashier/kasir/produk',
      //   name: 'Produk',
      //   slug: 'produk',
      //   icon: 'LayersIcon'
      // },
      {
        url: '/cashier/kasir/barcode',
        name: 'Barcode',
        slug: 'barcode',
        icon: 'LayersIcon'
      }
    ]
  },
  {
    url: '/cashier/riwayat',
    name: 'Riwayat',
    slug: 'riwayat',
    icon: 'RepeatIcon'
  },
  {
    url: '/cashier/produk',
    name: 'Produk',
    slug: 'produk',
    icon: 'BoxIcon'
  },
  {
    url: '/cashier/rekapkas',
    name: 'Rekap Kas',
    slug: 'rekapkas',
    icon: 'ClipboardIcon'
  },
  {
    url: '/cashier/setting',
    name: 'Pengaturan',
    slug: 'setting',
    icon: 'SettingsIcon'
  }
]
