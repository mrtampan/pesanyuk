import axios from '@/axios.js'

const accessToken = {
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
}

export default {
  addItem ({ commit }, item) {
    return new Promise((resolve, reject) => {

      axios.post('/api/v1/admin/packet/insert', { item }, accessToken)
        .then((response) => {
          commit('ADD_ITEM_PACKET', Object.assign(item, { id: response.data.data.id }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchDataPacketItems ({ commit }) {
    return new Promise((resolve, reject) => {

      axios.get('/api/v1/admin/packet/show')
        .then((response) => {
          commit('SET_PACKET', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`api/v1/admin/packet/${item.id}/update`, { item }, accessToken)
        .then((response) => {
          commit('UPDATE_PACKET', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`api/v1/admin/packet/${itemId}/delete`, accessToken)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }

}
