/*=========================================================================================
  File Name: modulePaket.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './modulePaketState.js'
import mutations from './modulePaketMutations.js'
import actions from './modulePaketActions.js'
import getters from './modulePaketGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
