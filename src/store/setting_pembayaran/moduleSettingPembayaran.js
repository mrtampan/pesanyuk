/*=========================================================================================
  File Name: moduleProduk.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleSettingPembayaranState.js'
import mutations from './moduleSettingPembayaranMutations.js'
import actions from './moduleSettingPembayaranActions.js'
import getters from './moduleSettingPembayaranGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

