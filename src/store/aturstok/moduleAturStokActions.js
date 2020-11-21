// import axios from '@/axios.js'

// import accessToken from '../auth/moduleAuth'


export default {
  // addItem ({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/v1/inventory/setstock/${item.id_business}/insert`, { item }, accessToken)
  //       .then((response) => {
  //         commit('ADD_ITEM_SET_STOCK', Object.assign(item, { id: response.data.id }))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  
  // fetchDataSetStockItems ({ commit }, id) {
  //   return new Promise((resolve, reject) => {
  //     const accessToken = {
  //       headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
  //     }
  //     axios.get(`/api/v1/inventory/setstock/${id.idBusiness}/show`, accessToken)
  //       .then((response) => {
  //         commit('SET_SET_STOCK', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

  // fetchDataSetStockItems ({ commit }, id) {
  //   return new Promise((resolve, reject) => {
  //     axios.get(`/api/v1/inventory/setstock/${id.idBusiness}/show`, accessToken)
  //       .then((response) => {
  //         commit('SET_SET_STOCK', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // }
  

  // updateItem ({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`api/v1/inventory/setstock/${item.id}/${item.id_business}/update`, { item }, accessToken)
  //       .then((response) => {
  //         commit('UPDATE_SET_STOCK', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // }

  // removeItem ({ commit }, itemId) {
  //   return new Promise((resolve, reject) => {
  //     axios.delete(`api/v1/inventory/setstock/${itemId}/delete`, accessToken)
  //       .then((response) => {
  //         commit('REMOVE_ITEM', itemId)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // }

}
