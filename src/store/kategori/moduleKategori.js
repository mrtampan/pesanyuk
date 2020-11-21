/*=========================================================================================
  File Name: moduleProduk.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleKategoriState.js'
import mutations from './moduleKategoriMutations.js'
import actions from './moduleKategoriActions.js'
import getters from './moduleKategoriGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

