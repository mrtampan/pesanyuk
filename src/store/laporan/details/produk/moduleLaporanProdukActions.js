import axios from '@/axios.js'

const accessToken = {
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
}

export default {
  addItem ({ commit }, item) {
    return new Promise((resolve, reject) => {

      axios.post(`/api/v1/products/${item.id_business}/insert`, { item }, accessToken)
        .then((response) => {
          commit('ADD_ITEM_PRODUCT', Object.assign(item, { id: response.data.id }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchDataProdukItems ({ commit }, id) {
    return new Promise((resolve, reject) => {

      axios.get(`/api/v1/products/${id.idBusiness}/show`, accessToken)
        .then((response) => {
          commit('SET_PRODUCT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchProductCategory ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/product/category/${id}/show`, accessToken)
        .then((response) => {
          commit('SET_CATEGORY', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`api/v1/products/${item.id}/${item.id_business}/update`, { item }, accessToken)
        .then((response) => {
          commit('UPDATE_PRODUCT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`api/v1/products/${itemId}/delete`, accessToken)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }

}
