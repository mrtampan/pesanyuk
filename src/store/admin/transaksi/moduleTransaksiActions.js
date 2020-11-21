/*=========================================================================================
  File Name: moduleEmailActions.js
  Description: Email Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// import axios from '@/axios.js'
// import mock from '../transaksi/mock.js'

const data = {
  transactions: [
    {
      id: 1,
      //pemilik
      namecom: 'Pesanyuk.id',
      addresscom: 'Jl Cawas Gayam Rt 1 Rw 9 Gayam Sukoharjo',
      mailcom: 'pesanyuk@gmail.com',
      mobilecom: '+6285730277132',
      //pembeli
      nameRecipient: 'Marfino Hamzah',
      addressRecipient: 'Jl Arjuna 2 no 4 rt 03 rw 04 serengan solo 57155',
      mailRecipient: 'marfinohamzah455@mail.com',
      mobileRecipient: '+6289626312680',
      //invoice
      invoice: 'INV000110',
      ordertime: '30 Sep 2020, 20.32 WIB',
      shiptime: '30 Sep 2020, 20.50 WIB',
      shipVia: 'JNE',
      order: [
        {
          item: 'Es Teh',
          itemDesc: 'Manis Murah Meriah',
          qty: 2,
          unitPrice: 9000,
          amount: 18000
        },
        {
          item: 'Es Teler',
          itemDesc: 'Enak Murah Meriah',
          qty: 3,
          unitPrice: 7000,
          amount: 21000
        }
      ],
      metode: 'Go Food',
      status: 'done',
      bank: 'BCA',
      subtotal: 39000,
      discountPercentage: 5,
      discountedAmount: 1950,
      total: 37050
    },
    {
      id: 3,
      //pemilik
      namecom: 'Pesanyuk.id',
      addresscom: 'Jl Cawas Gayam Rt 1 Rw 9 Gayam Sukoharjo',
      mailcom: 'pesanyuk@gmail.com',
      mobilecom: '+6285730277132',
      //pembeli
      nameRecipient: 'Marfino Ha',
      addressRecipient: 'Jl Arna 2 no 4 rt 03 rw 04 serengan solo 57155',
      mailRecipient: 'marfinamzah455@mail.com',
      mobileRecipient: '+6289626312680',
      //invoice
      invoice: 'INV000117',
      ordertime: '27 Sep 2020, 20.32 WIB',
      shiptime: '27 Sep 2020, 20.50 WIB',
      shipVia: 'JNE',
      order: [
        {
          item: 'Es Teh',
          itemDesc: 'Manis Murah Meriah',
          qty: 2,
          unitPrice: 9000,
          amount: 18000
        },
        {
          item: 'Es Teler',
          itemDesc: 'Enak Murah Meriah',
          qty: 3,
          unitPrice: 7000,
          amount: 21000
        }
      ],
      metode: 'Go Food',
      status: 'cancel',
      bank: 'BCA',
      subtotal: 39000,
      discountPercentage: 5,
      discountedAmount: 1950,
      total: 37050
    },
    {
      id: 4,
      //pemilik
      namecom: 'Pesanyuk.id',
      addresscom: 'Jl Cawas Gayam Rt 1 Rw 9 Gayam Sukoharjo',
      mailcom: 'pesanyuk@gmail.com',
      mobilecom: '+6285730277132',
      //pembeli
      nameRecipient: 'Marfino H',
      addressRecipient: 'Jl na 2 no 4 rt 03 rw 04 serengan solo 57155',
      mailRecipient: 'marfinohamzah455@mail.com',
      mobileRecipient: '+6289626312680',
      //invoice
      invoice: 'INV000110',
      ordertime: '30 Sep 2020, 20.32 WIB',
      shiptime: '30 Sep 2020, 20.50 WIB',
      shipVia: 'JNE',
      order: [
        {
          item: 'Es Teh',
          itemDesc: 'Manis Murah Meriah',
          qty: 2,
          unitPrice: 9000,
          amount: 18000
        },
        {
          item: 'Es Teler',
          itemDesc: 'Enak Murah Meriah',
          qty: 3,
          unitPrice: 7000,
          amount: 21000
        }
      ],
      metode: 'Go Food',
      status: 'shipping',
      bank: 'BCA',
      subtotal: 39000,
      discountPercentage: 5,
      discountedAmount: 1950,
      total: 37050
    },
    {
      id: 1,
      //pemilik
      namecom: 'Pesanyuk.id',
      addresscom: 'Jl Cawas Gayam Rt 1 Rw 9 Gayam Sukoharjo',
      mailcom: 'pesanyuk@gmail.com',
      mobilecom: '+6285730277132',
      //pembeli
      nameRecipient: 'no Hamzah',
      addressRecipient: 'Jl Arjuna 2 no 4 rt 03 rw 04 serengan solo 57155',
      mailRecipient: 'marfinohamzah455@mail.com',
      mobileRecipient: '+6289626312680',
      //invoice
      invoice: 'INV000110',
      ordertime: '26 Sep 2020, 20.32 WIB',
      shiptime: '26 Sep 2020, 20.50 WIB',
      shipVia: 'JNE',      
      order: [
        {
          item: 'Es Teh',
          itemDesc: 'Manis Murah Meriah',
          qty: 2,
          unitPrice: 9000,
          amount: 18000
        },
        {
          item: 'Es Teler',
          itemDesc: 'Enak Murah Meriah',
          qty: 3,
          unitPrice: 7000,
          amount: 21000
        }
      ],
      metode: 'Go Food',
      status: 'done',
      bank: 'BCA',
      subtotal: 39000,
      discountPercentage: 5,
      discountedAmount: 1950,
      total: 37050
    },
    {
      id: 1,
      //pemilik
      namecom: 'Pesanyuk.id',
      addresscom: 'Jl Cawas Gayam Rt 1 Rw 9 Gayam Sukoharjo',
      mailcom: 'pesanyuk@gmail.com',
      mobilecom: '+6285730277132',
      //pembeli
      nameRecipient: 'Marfino Hamzah',
      addressRecipient: 'Jl Arjuna 2 no 4 rt 03 rw 04 serengan solo 57155',
      mailRecipient: 'marfinohamzah455@mail.com',
      mobileRecipient: '+6289626312680',
      //invoice
      invoice: 'INV000110',
      ordertime: '30 Sep 2020, 20.32 WIB',
      shiptime: '30 Sep 2020, 20.50 WIB',
      shipVia: 'JNE',
      order: [
        {
          item: 'Es Teh',
          itemDesc: 'Manis Murah Meriah',
          qty: 2,
          unitPrice: 9000,
          amount: 18000
        },
        {
          item: 'Es Teler',
          itemDesc: 'Enak Murah Meriah',
          qty: 3,
          unitPrice: 7000,
          amount: 21000
        }
      ],
      metode: 'Go Food',
      status: 'done',
      bank: 'BCA',
      subtotal: 39000,
      discountPercentage: 5,
      discountedAmount: 1950,
      total: 37050
    },
    {
      id: 1,
      //pemilik
      namecom: 'Pesanyuk.id',
      addresscom: 'Jl Cawas Gayam Rt 1 Rw 9 Gayam Sukoharjo',
      mailcom: 'pesanyuk@gmail.com',
      mobilecom: '+6285730277132',
      //pembeli
      nameRecipient: 'Marfino Hamzah',
      addressRecipient: 'Jl Arjuna 2 no 4 rt 03 rw 04 serengan solo 57155',
      mailRecipient: 'marfinohamzah455@mail.com',
      mobileRecipient: '+6289626312680',
      //invoice
      invoice: 'INV000110',
      ordertime: '30 Sep 2020, 20.32 WIB',
      shiptime: '30 Sep 2020, 20.50 WIB',
      shipVia: 'JNE',
      order: [
        {
          item: 'Es Teh',
          itemDesc: 'Manis Murah Meriah',
          qty: 2,
          unitPrice: 9000,
          amount: 18000
        },
        {
          item: 'Es Teler',
          itemDesc: 'Enak Murah Meriah',
          qty: 3,
          unitPrice: 7000,
          amount: 21000
        }
      ],
      metode: 'Go Food',
      status: 'done',
      bank: 'BCA',
      subtotal: 39000,
      discountPercentage: 5,
      discountedAmount: 1950,
      total: 37050
    },
    {
      id: 1,
      //pemilik
      namecom: 'Pesanyuk.id',
      addresscom: 'Jl Cawas Gayam Rt 1 Rw 9 Gayam Sukoharjo',
      mailcom: 'pesanyuk@gmail.com',
      mobilecom: '+6285730277132',
      //pembeli
      nameRecipient: 'Marfino Hamzah',
      addressRecipient: 'Jl Arjuna 2 no 4 rt 03 rw 04 serengan solo 57155',
      mailRecipient: 'marfinohamzah455@mail.com',
      mobileRecipient: '+6289626312680',
      //invoice
      invoice: 'INV000118',
      ordertime: '28 Sep 2020, 20.32 WIB',
      shiptime: '28 Sep 2020, 20.50 WIB',
      shipVia: 'JNE',
      order: [
        {
          item: 'Es Teh',
          itemDesc: 'Manis Murah Meriah',
          qty: 2,
          unitPrice: 9000,
          amount: 18000
        },
        {
          item: 'Es Teler',
          itemDesc: 'Enak Murah Meriah',
          qty: 3,
          unitPrice: 7000,
          amount: 21000
        }
      ],
      metode: 'Go Food',
      status: 'confirm',
      bank: 'BCA',
      subtotal: 39000,
      discountPercentage: 5,
      discountedAmount: 1950,
      total: 37050
    },
    {
      id: 9,
      //pemilik
      namecom: 'Pesanyuk.id',
      addresscom: 'Jl Cawas Gayam Rt 1 Rw 9 Gayam Sukoharjo',
      mailcom: 'pesanyuk@gmail.com',
      mobilecom: '+6285730277132',
      //pembeli
      nameRecipient: 'Marfino Ham',
      addressRecipient: 'Jl Arju 2 no 4 rt 03 rw 04 serengan solo 57155',
      mailRecipient: 'marfinomzah455@mail.com',
      mobileRecipient: '+628926312680',
      //invoice
      invoice: 'INV000119',
      ordertime: '30 Sep 2020, 20.32 WIB',
      shiptime: '30 Sep 2020, 20.50 WIB',
      shipVia: 'JNE',
      order: [
        {
          item: 'Es Teh',
          itemDesc: 'Manis Murah Meriah',
          qty: 2,
          unitPrice: 9000,
          amount: 18000
        },
        {
          item: 'Es Teler',
          itemDesc: 'Enak Murah Meriah',
          qty: 3,
          unitPrice: 7000,
          amount: 21000
        }
      ],
      metode: 'Go Food',
      status: 'process',
      bank: 'BCA',
      subtotal: 39000,
      discountPercentage: 5,
      discountedAmount: 1950,
      total: 37050
    },
    {
      id: 10,
      //pemilik
      namecom: 'Pesanyuk.id',
      addresscom: 'Jl Cawas Gayam Rt 1 Rw 9 Gayam Sukoharjo',
      mailcom: 'pesanyuk@gmail.com',
      mobilecom: '+6285730277132',
      //pembeli
      nameRecipient: 'Marfino Hamza',
      addressRecipient: 'Jl Arjun 2 no 4 rt 03 rw 04 serengan solo 57155',
      mailRecipient: 'marfinohamah455@mail.com',
      mobileRecipient: '+628962312680',
      //invoice
      invoice: 'INV000120',
      ordertime: '29 Sep 2020, 20.32 WIB',
      shiptime: '29 Sep 2020, 20.50 WIB',
      shipVia: 'JNE',
      order: [
        {
          item: 'Es Teh',
          itemDesc: 'Manis Murah Meriah',
          qty: 2,
          unitPrice: 9000,
          amount: 18000
        },
        {
          item: 'Es Teler',
          itemDesc: 'Enak Murah Meriah',
          qty: 3,
          unitPrice: 7000,
          amount: 21000
        }
      ],
      metode: 'Go Food',
      status: 'done',
      bank: 'BCA',
      subtotal: 39000,
      discountPercentage: 5,
      discountedAmount: 1950,
      total: 37050
    },
    {
      id: 2,
      //company
      namecom: 'Pesanyuk.id',
      addresscom: 'Jl Cawas Gayam Rt 1 Rw 9 Gayam Sukoharjo',
      mailcom: 'pesanyuk@gmail.com',
      mobilecom: '+6285730277132',
      //recipient
      nameRecipient: 'Valenia Tabhita Putri',
      addressRecipient: 'Jl Kaliwingko',
      mailRecipient: 'valeniatp@mail.com',
      mobileRecipient: '+6289616312680',
      //invoice
      invoice: 'INV000111',
      ordertime: '31 Sep 2020, 20.32 WIB',
      shiptime: '31 Sep 2020, 20.50 WIB',
      shipVia: 'TIKI',
      bank: 'BSM',
      noRek: 'G882-1111-2222-3333',
      status: 'pending',
      subtotal: 24000,
      discountPercentage: 5,
      discountedAmount: 1200,
      total: 22800,
      metode: 'Grab Food',
      order: [
        {
          id: 1,
          item: 'Es Jeruk',
          itemDesc: 'Nikmat Murah Meriah',
          qty: 3,
          unitPrice: 5000,
          amount: 15000
        },
        {
          id: 2,
          item: 'Es Teh Tawar',
          itemDesc: 'Asli Murah Meriah',
          qty: 3,
          unitPrice: 3000,
          amount: 9000
        }
      ]
      
    }
  ]
}

export default {
// dummy
  fetchDataTransactionItems ({ commit }) {
    return new Promise(() => {
      commit('SET_TRANSACTION', data.transactions)
    })
  }
  // fetchDataTransactionItems ({ commit }, idbs) {
  //   return new Promise((resolve, reject) => {
  //     axios.get(`/api/v1/report/transaction/${idbs.idBusiness}/:filter`, accessToken)
  //       .then((response) => {
  //         commit('SET_TRANSACTION', response.data.transaction)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
//   transactionTags: [
//     {
//       text: 'Personal',
//       value : 'personal',
//       color:'success'
//     },
//     {
//       text: 'Company',
//       value: 'company',
//       color:'primary'
//     },
//     {
//       text: 'Important',
//       value: 'important',
//       color:'warning'
//     },
//     {
//       text: 'Private',
//       value: 'private',
//       color:'danger'
//     }
//   ]
// }
  
// // GET : Emails
// mock.onGet('api/report/transaksi/tags').reply(() => {
//   return [200, data.transactionTags]
// })
  
// // GET : Unread Mails
// mock.onGet('/api/report/transaksi/meta').reply(() => {
  
//   const countUnsentTransactionsFolders = ['inbox', 'spam']
  
//   const meta = {
//     UnsentTransactions: {
//       folder: {},
//       label: {}
//     },
//     draftTransactions: []
//   }
  
//   data.transactions.forEach((trans) => {
  
//     // Count unread mails
//     if (trans.unread) {
  
//       // Add mail id
//       if (countUnsentTransactionsFolders.includes(trans.transFolder)) {
//         meta.unsentTransactions.folder[trans.transFolder] ? meta.unsentTransactions.folder[trans.transFolder].push(trans.id) : meta.unsentTransactions.folder[trans.transFolder] = [trans.id]
//       }
  
//       // Add mail id
//       trans.labels.forEach((label) => {
//         meta.unsentTransactions.label[label] ? meta.unsentTransactions.label[label].push(trans.id) : meta.unsentTransactions.label[label] = [trans.id]
//       })
//     }
  
//     // Get draft mail count
//     if (trans.transFolder === 'draft') meta.draftTransactions.push(trans.id)
//   })
  
//   return [200, meta]
// })
  
// // POST : Move Mails to another folder
// mock.onPost('/api/report/transaction/move-trans').reply((request) => {
//   const transToMove = JSON.parse(request.data).transactionIds
  
//   data.transactions.forEach((trans) => {
//     if (transToMove.includes(trans.id)) trans.transFolder = JSON.parse(request.data).transFolder
//   })
  
//   return [200]
// })
  
// // POST : Update Mails Labels
// mock.onPost('/api/report/transaction/update-labels').reply((request) => {
  
//   const label = JSON.parse(request.data).label
//   const transToUpdate = JSON.parse(request.data).transactionIds
  
//   transToUpdate.forEach((transId) => {
//     const transIndex = data.transactions.findIndex((trans) => trans.id === transId)
//     const labelIndex = data.transactions[transIndex].labels.indexOf(label)
  
//     if (labelIndex === -1) {
//       data.transactions[transIndex].labels.push(label)
//     } else {
//       data.transactions[transIndex].labels.splice(labelIndex, 1)
//     }
//   })
  
//   return [200]
// })
  
// // POST : Set Mails Labels for single mail
// mock.onPost('/api/report/transaction/set-labels').reply((request) => {
//   const transId = JSON.parse(request.data).transId
//   data.transactions.find((trans) => trans.id === transId).labels = JSON.parse(request.data).labels
//   return [200]
// })
  
// // POST : Mark as Unread
// mock.onPost('/api/report/transaction/mark-unsent').reply((request) => {
//   const transToUpdate = JSON.parse(request.data).transactionIds
  
//   transToUpdate.forEach((transId) => {
//     const transIndex = data.transactions.findIndex((trans) => trans.id === transId)
//     data.transactions[transIndex].unsent = JSON.parse(request.data).unsentFlag
//   })
  
//   return [200]
// })
  
// POST : Set; starred
// mock.onPost('/api/report/transaction/set-starred').reply((request) => {
//   const transId = JSON.parse(request.data).transId
//   data.transactions.find((trans) => trans.id === transId).isStarred = JSON.parse(request.data).value
  
//   return [200]
// })
  
// GET: Fetch; Calendar; Labels
// mock.onGet('api/report/transaction/labels').reply(() => {
//   return [200, data.labels]
// })
  
// POST: Update; Event
// mock.onPost(/\/api\/report\/transaction\/calendar\/event\/\d+/).reply((request) => {
  
//   const eventId = request.url.substring(request.url.lastIndexOf('/') + 1)
  
//   const event = data.events.find((event) => event.id === eventId)
//   Object.assign(event, JSON.parse(request.data).event)
  
//   return [200, event]
// })
  
// DELETE: Remove; Event
// mock.onDelete(/\/api\/report\/transaction\/calendar\/event\/\d+/).reply((request) => {
  
//   const eventId = request.url.substring(request.url.lastIndexOf('/') + 1)
  
//   const eventIndex = data.events.findIndex((event) => event.id === eventId)
//   data.events.splice(eventIndex, 1)
//   return [200]
// })
  
// POST: Update; Dragged; Event
// mock.onPost(/\/api\/report\/transaction\/calendar\/event\/dragged\/\d+/).reply((request) => {
  
//   const eventId = request.url.substring(request.url.lastIndexOf('/') + 1)
//   const event = data.events.find((event) => event.id === eventId)
//   const payload = JSON.parse(request.data).payload
  
//   const draggedDateStart = new Date(payload.date)
  
//   const eventStartDate = new Date(event.startDate).getTime()
//   const eventEndDate = new Date(event.endDate).getTime()
  
//   const diff = draggedDateStart - eventStartDate
//   const newEndDate = new Date(eventEndDate + diff)
//   event.startDate = draggedDateStart
//   event.endDate = newEndDate
  
//   return [200, event]
// })
// setTransactionSearchQuery ({ commit }, query) {
  //   commit('SET_TRANSACTION_SEARCH_QUERY', query)
  // },

  // // Fetch emails
  // fetchTransactions ({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.get('/api/apps/transaction/transactions', { params: {filter: payload.filter} })
  //       .then((response) => {
  //         commit('SET_TRANSACTIONS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  // // Fetch Tags
  // fetchTags ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get('/api/apps/transaction/tags')
  //       .then((response) => {
  //         commit('SET_TAGS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  // // Fetch Email Meta
  // fetchMeta ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get('/api/apps/transaction/meta')
  //       .then((response) => {
  //         commit('SET_META', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  // // Move mails to another folder
  // moveMailsTo ({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post('/api/apps/transaction/move-transactions', { transIds: payload.transIds,
  //       transFolder: payload.to })
  //       .then((response) => {
  //         commit('MOVE_TRANSACTIONS_TO', payload)
  //         commit('UPDATE_UNREAD_META_ON_MOVE', payload)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  // // Update Mails label
  // updateLabels ({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post('/api/apps/transaction/update-labels', { transIds: payload.transactions,
  //       label: payload.label })
  //       .then((response) => {
  //         commit('UPDATE_LABELS', payload)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  // setLabels ({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post('/api/apps/transaction/set-labels', { transId: payload.transId,
  //       labels: payload.labels })
  //       .then((response) => {
  //         commit('SET_LABELS', payload)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  // // Set mails flag unread to true
  // setUnread ({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post('/api/apps/transaction/mark-unread', { transactionIds: payload.transactionIds,
  //       unreadFlag: payload.unreadFlag })
  //       .then((response) => {
  //         commit('SET_UNREAD', payload)

  //         // Remove this if you are getting meta like us
  //         // Use your own method to update email meta if you are fetching email meta
  //         commit('UPDATE_UNREAD_META', payload)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  // // Toggle isStarred flag in mail
  // toggleIsTransStarred ({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post('/api/apps/transaction/set-starred', { transId: payload.transId,
  //       value: payload.value })
  //       .then((response) => {
  //         commit('TOGGLE_IS_TRANS_STARRED', payload)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // }
}