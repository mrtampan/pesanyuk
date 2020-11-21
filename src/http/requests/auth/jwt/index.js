import axios from '../../../axios/index.js'

export default {
  login (email, pwd) {
    return axios.post('/api/v1/login', {
      email,
      password: pwd
    })
  },
  registerUser (name, email, pwd, couponId, id_paket) {
    return axios.post('/api/v1/register', {
      name,
      email,
      password: pwd,
      couponId,
      id_paket
    })
  }//,
//  refreshToken () {
//    return axios.post('/api/auth/refresh-token', {accessToken: localStorage.getItem('accessToKen')})
//  }
}
