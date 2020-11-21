import axios from '@/axios.js'

const accessToken = {
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
}

export default {
  
  fetchDataMemberItems ({ commit }) {
    return new Promise((resolve, reject) => {

      axios.get('/api/v1/admin/user/member/show', accessToken)
        .then((response) => {
          commit('SET_MEMBER', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }
}
