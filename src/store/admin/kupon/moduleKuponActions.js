import axios from '@/axios.js'

const accessToken = {
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
}

export default {
  addItem ({ commit }, item) {
    return new Promise((resolve, reject) => {

      axios.post('/api/v1/admin/coupon/insert', { item }, accessToken)
        .then((response) => {
          commit('ADD_ITEM_COUPON', Object.assign(item, { id: response.data.data.id }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchDataCouponItems ({ commit }) {
    return new Promise((resolve, reject) => {

      axios.get('/api/v1/admin/coupon/show', accessToken)
        .then((response) => {
          commit('SET_COUPON', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`api/v1/admin/coupon/${item.id}/update`, { item }, accessToken)
        .then((response) => {
          commit('UPDATE_COUPON', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`api/v1/admin/coupon/${itemId}/delete`, accessToken)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }

}
