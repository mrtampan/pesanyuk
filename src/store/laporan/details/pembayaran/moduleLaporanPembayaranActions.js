import axios from '@/axios.js'
const accessToken = {
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
}
export default {
  fetchDataPaymentItems ({ commit }, idbs) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/data/payment/${idbs.idBusiness}/show`, accessToken)
        .then((response) => {
          commit('SET_PAYMENT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`api/v1/data/payment/${item.id}/update`, { item }, accessToken)
        .then((response) => {
          commit('UPDATE_PAYMENT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`api/v1/data/payment/${itemId}/delete`, accessToken)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }

}
