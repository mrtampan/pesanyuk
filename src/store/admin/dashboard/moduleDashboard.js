/*=========================================================================================
  File Name: moduleEmail.js
  Description: Email Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleTransaksiState.js'
import mutations from './moduleTransaksiMutations.js'
import actions from './moduleTransaksiActions.js'
import getters from './moduleTransaksiGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
