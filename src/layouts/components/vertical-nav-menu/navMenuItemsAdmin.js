
export default [

  // Owner
  {
    url: '/admin',
    name: 'Dashboard',
    slug: 'dashboard',
    icon: 'GridIcon'
  },
  {
    header: 'Report',
    icon: 'PackageIcon',
    items: [
      {
        url: '/admin/transaction',
        name: 'Transaksi',
        slug: 'transaction',
        icon: 'ActivityIcon'
      },
      {
        url: '/admin/report',
        name: 'Laporan',
        slug: 'report',
        icon: 'FileTextIcon'
      }
    ]
  },
  {
    header: 'Data',
    icon: 'PackageIcon',
    items: [
      {
        url: '/admin/member',
        name: 'Member Pesanyuk',
        slug: 'member',
        icon: 'UserCheckIcon'
      },
      {
        url: '/admin/payment',
        name: 'Pembayaran',
        slug: 'payment',
        icon: 'CreditCardIcon'
      },
      {
        url: null,
        name: 'Affiliate',
        slug: 'affiliate',
        icon: 'UsersIcon',
        submenu: [
          {
            url: '/admin/affiliate',
            name: 'Member Affiliate',
            slug: 'affiliate',
            icon: 'SettingsIcon'
          },
          {
            url: '/admin/affiliate/leaderboard',
            name: 'Leaderboard',
            slug: 'leaderboard',
            icon: 'AwardIcon'
          },
          {
            url: '/admin/affiliate/setting',
            name: 'Pengaturan',
            slug: 'afiliatesetting',
            icon: 'SettingsIcon'
          },
          {
            url: '/admin/affiliate/commission',
            name: 'Komisi',
            slug: 'commission',
            icon: 'SettingsIcon'
          },
          {
            url: '/admin/affiliate/promotion',
            name: 'Alat Promosi',
            slug: 'promotion',
            icon: 'SettingsIcon'
          },
          {
            url: '/admin/affiliate/coupon',
            name: 'Kupon Afiliate',
            slug: 'coupon',
            icon: 'SettingsIcon'
          }
        ]
      },
      {
        url: '/admin/package',
        name: 'Paket',
        slug: 'package',
        icon: 'ArchiveIcon'
      },
      {
        url: '/admin/coupons',
        name: 'Kupon',
        slug: 'coupons',
        icon: 'PercentIcon'
      },
      {
        url: '/admin/notification',
        name: 'Notifikasi',
        slug: 'notification',
        icon: 'BellIcon'
      },
      {
        url: '/admin/logupdate',
        name: 'Log Update',
        slug: 'logupdate',
        icon: 'ClipboardIcon'
      }
    ]
  }
]
