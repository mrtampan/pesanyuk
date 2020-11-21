/*=========================================================================================
  File Name: moduleProduk.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleProdukState.js'
import mutations from './moduleProdukMutations.js'
import actions from './moduleProdukActions.js'
import getters from './moduleProdukGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

