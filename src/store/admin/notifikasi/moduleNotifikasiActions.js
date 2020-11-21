import axios from '@/axios.js'
const accessToken = {
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
}
export default {
  addItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/v1/data/admin/notification/insert', { item }, accessToken)
        .then((response) => {
          commit('ADD_ITEM_NOTIFICATION', Object.assign(item, { id: response.data.data.id }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchDataNotificationItems ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/v1/data/admin/notification/show', accessToken)
        .then((response) => {
          commit('SET_NOTIFICATION', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`api/v1/data/admin/notification/${item.id}/update`, { item }, accessToken)
        .then((response) => {
          commit('UPDATE_NOTIFICATION', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`api/v1/data/admin/notification/${itemId}/delete`, accessToken)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }

}
