/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import jwt from '../../http/requests/auth/jwt/index.js'


import router from '@/router'

export default {
  // JWT
  loginJWT ({ commit }, payload) {


    return new Promise((resolve, reject) => {
      jwt.login(payload.userDetails.email, payload.userDetails.password)
        .then(response => {

          // If there's user data in response
          if (response.data.userData) {

            localStorage.setItem('accessToken', response.data.accessToken)

            commit('UPDATE_USER_INFO', response.data.userData, {root: true})

            commit('SET_BEARER', response.data.accessToken)

            router.push(router.currentRoute.query.to || { path: `/${response.data.userData.nama_role}` }).catch(error => { reject(error) })

            resolve(response)
          } else {
            reject({message: 'Wrong Email or Password'})
          }
          
        })
        .catch(error => { reject(error) })
    })


  },
  
  register ({commit}, payload) {
    //const { name, email, password, confirmPassword } = payload.userDetails
    //const nameL = 'data'
    return new Promise((resolve, reject) => {
      jwt.registerUser(
        payload.userDetails.name, 
        payload.userDetails.email, 
        payload.userDetails.password, 
        payload.userDetails.couponId, 
        payload.userDetails.id_paket)
        .then(response => {

          if (response.data.urlRataPay) {
          //const urli = response.data.payment_url
          //window.location.replace(urli)
          //window.location.href = 'http://www.w3schools.com'

          // Simulate an HTTP redirect:
            window.location.replace(response.data.urlRataPay)
            commit()
          }

          // Redirect User
          //router.push(router.currentRoute.query.to || '/')

          // Update data in localStorage
          // localStorage.setItem('accessToken', response.data.accessToken)

          resolve(response)
        })
        .catch(error => { reject(error) })
    })
  }
}
