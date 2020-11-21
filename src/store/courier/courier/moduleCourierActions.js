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
  couriers: [
    {
      id: 1,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfino Hamzah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'pending',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 2,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfino Haasdmzah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'shipping',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 13,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfino Hamzxczah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'pending',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 14,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfino Hxzcxzcamzah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'shipped',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 15,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfino Hamsadsadzah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'cancel',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 16,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfino Hamzah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'shipped',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 11,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfino Haasdasdmzah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'cancel',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 12,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfino Hamzasdsasadah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'shipping',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 18,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfino Hasdsdaamzah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'shipped',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 15,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfiasdsadno Hamzah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'pending',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 21,
      //pemilik
      invoice: '#P0001',
      nama: 'Marasdsadfino Hamzah',
      alamat: 'Jl Arjuna 2 No 4 ',
      noHp: '089626312680',
      namaProduct: 'Makanan',
      status: 'shipping',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    },
    {
      id: 22,
      //pemilik
      invoice: '#P0001',
      nama: 'Marfadssdaino Hamzah',
      noHp: '089626312680',
      alamat: 'Jl Arjuna 2 No 4 ',
      namaProduct: 'Makanan',
      status: 'shipped',
      markers: [
        {
          position: {lat: 11.0, lng:11.0}
        }
      ]
    }
  ]
}

export default {
// dummy
  fetchDataCourierItems ({ commit }) {
    return new Promise(() => {
      commit('SET_COURIER', data.couriers)
    })
  }
  // fetchDataCourierItems ({ commit }, idbs) {
  //   return new Promise((resolve, reject) => {
  //     axios.get(`/api/v1/report/courier/${idbs.idBusiness}/:filter`, accessToken)
  //       .then((response) => {
  //         commit('SET_COURIER', response.data.courier)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
//   courierTags: [
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
//   return [200, data.courierTags]
// })
  
// // GET : Unread Mails
// mock.onGet('/api/report/transaksi/meta').reply(() => {
  
//   const countUnsentcouriersFolders = ['inbox', 'spam']
  
//   const meta = {
//     Unsentcouriers: {
//       folder: {},
//       label: {}
//     },
//     draftcouriers: []
//   }
  
//   data.couriers.forEach((trans) => {
  
//     // Count unread mails
//     if (trans.unread) {
  
//       // Add mail id
//       if (countUnsentcouriersFolders.includes(trans.transFolder)) {
//         meta.unsentcouriers.folder[trans.transFolder] ? meta.unsentcouriers.folder[trans.transFolder].push(trans.id) : meta.unsentcouriers.folder[trans.transFolder] = [trans.id]
//       }
  
//       // Add mail id
//       trans.labels.forEach((label) => {
//         meta.unsentcouriers.label[label] ? meta.unsentcouriers.label[label].push(trans.id) : meta.unsentcouriers.label[label] = [trans.id]
//       })
//     }
  
//     // Get draft mail count
//     if (trans.transFolder === 'draft') meta.draftcouriers.push(trans.id)
//   })
  
//   return [200, meta]
// })
  
// // POST : Move Mails to another folder
// mock.onPost('/api/report/courier/move-trans').reply((request) => {
//   const transToMove = JSON.parse(request.data).courierIds
  
//   data.couriers.forEach((trans) => {
//     if (transToMove.includes(trans.id)) trans.transFolder = JSON.parse(request.data).transFolder
//   })
  
//   return [200]
// })
  
// // POST : Update Mails Labels
// mock.onPost('/api/report/courier/update-labels').reply((request) => {
  
//   const label = JSON.parse(request.data).label
//   const transToUpdate = JSON.parse(request.data).courierIds
  
//   transToUpdate.forEach((transId) => {
//     const transIndex = data.couriers.findIndex((trans) => trans.id === transId)
//     const labelIndex = data.couriers[transIndex].labels.indexOf(label)
  
//     if (labelIndex === -1) {
//       data.couriers[transIndex].labels.push(label)
//     } else {
//       data.couriers[transIndex].labels.splice(labelIndex, 1)
//     }
//   })
  
//   return [200]
// })
  
// // POST : Set Mails Labels for single mail
// mock.onPost('/api/report/courier/set-labels').reply((request) => {
//   const transId = JSON.parse(request.data).transId
//   data.couriers.find((trans) => trans.id === transId).labels = JSON.parse(request.data).labels
//   return [200]
// })
  
// // POST : Mark as Unread
// mock.onPost('/api/report/courier/mark-unsent').reply((request) => {
//   const transToUpdate = JSON.parse(request.data).courierIds
  
//   transToUpdate.forEach((transId) => {
//     const transIndex = data.couriers.findIndex((trans) => trans.id === transId)
//     data.couriers[transIndex].unsent = JSON.parse(request.data).unsentFlag
//   })
  
//   return [200]
// })
  
// POST : Set; starred
// mock.onPost('/api/report/courier/set-starred').reply((request) => {
//   const transId = JSON.parse(request.data).transId
//   data.couriers.find((trans) => trans.id === transId).isStarred = JSON.parse(request.data).value
  
//   return [200]
// })
  
// GET: Fetch; Calendar; Labels
// mock.onGet('api/report/courier/labels').reply(() => {
//   return [200, data.labels]
// })
  
// POST: Update; Event
// mock.onPost(/\/api\/report\/courier\/calendar\/event\/\d+/).reply((request) => {
  
//   const eventId = request.url.substring(request.url.lastIndexOf('/') + 1)
  
//   const event = data.events.find((event) => event.id === eventId)
//   Object.assign(event, JSON.parse(request.data).event)
  
//   return [200, event]
// })
  
// DELETE: Remove; Event
// mock.onDelete(/\/api\/report\/courier\/calendar\/event\/\d+/).reply((request) => {
  
//   const eventId = request.url.substring(request.url.lastIndexOf('/') + 1)
  
//   const eventIndex = data.events.findIndex((event) => event.id === eventId)
//   data.events.splice(eventIndex, 1)
//   return [200]
// })
  
// POST: Update; Dragged; Event
// mock.onPost(/\/api\/report\/courier\/calendar\/event\/dragged\/\d+/).reply((request) => {
  
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
// setcourierSearchQuery ({ commit }, query) {
  //   commit('SET_courier_SEARCH_QUERY', query)
  // },

  // // Fetch emails
  // fetchcouriers ({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.get('/api/apps/courier/couriers', { params: {filter: payload.filter} })
  //       .then((response) => {
  //         commit('SET_courierS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  // // Fetch Tags
  // fetchTags ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get('/api/apps/courier/tags')
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
  //     axios.get('/api/apps/courier/meta')
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
  //     axios.post('/api/apps/courier/move-couriers', { transIds: payload.transIds,
  //       transFolder: payload.to })
  //       .then((response) => {
  //         commit('MOVE_courierS_TO', payload)
  //         commit('UPDATE_UNREAD_META_ON_MOVE', payload)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  // // Update Mails label
  // updateLabels ({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post('/api/apps/courier/update-labels', { transIds: payload.couriers,
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
  //     axios.post('/api/apps/courier/set-labels', { transId: payload.transId,
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
  //     axios.post('/api/apps/courier/mark-unread', { courierIds: payload.courierIds,
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
  //     axios.post('/api/apps/courier/set-starred', { transId: payload.transId,
  //       value: payload.value })
  //       .then((response) => {
  //         commit('TOGGLE_IS_TRANS_STARRED', payload)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // }
}