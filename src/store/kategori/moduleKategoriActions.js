import axios from '@/axios.js'

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
}

export default {
  addItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/product/category/${item.id_business}/insert`, { item }, config)
        .then((response) => {
          commit('ADD_ITEM_CATEGORY', Object.assign(item, { id: response.data.data.id }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchProductCategory ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/product/category/${id.idBusiness}/show`, config)
        .then((response) => {
          commit('SET_CATEGORY', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`api/v1/product/category/${item.id}/${item.id_business}/update`, { item }, config)
        .then((response) => {
          commit('UPDATE_CATEGORY', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`api/v1/product/category/${itemId}/delete`, config)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }

}
