// input :

import axios from '@/axios.js'
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
}
export default {
  addItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/report/manage/${item.id_business}/${item.id_user}/insert`, { item }, config)
        .then((response) => {
          const tgl = response.data.data.tanggal.replace('T', ' ')
          const tgl1 = tgl.replace('.000000Z', ' ')

          commit('ADD_ITEM_MANAGE', Object.assign(item, { id: response.data.data.id, tanggal: tgl1}))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchDataManageItems ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/report/manage/${id.idBusiness}/show`, config)
        .then((response) => {
          commit('SET_MANAGE', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`api/v1/report/manage/${item.id}/update`, { item }, config)
        .then((response) => {
          commit('UPDATE_MANAGE', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`api/v1/report/manage/${itemId}/delete`, config)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }

}
