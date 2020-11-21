import axios from '@/axios.js'
const accessToken = {
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
}
export default {
  fetchDataSalesItems ({ commit }, idbs) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/data/report/sales/${idbs.idBusiness}/show`, accessToken)
        .then((response) => {
          commit('SET_SALES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`api/v1/data/report/sales/${item.id}/update`, { item }, accessToken)
        .then((response) => {
          commit('UPDATE_SALES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`api/v1/data/report/sales/${itemId}/delete`, accessToken)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }

}
