/*=========================================================================================
  File Name: moduleAlatPromosi.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleAlatPromosiState.js'
import mutations from './moduleAlatPromosiMutations.js'
import actions from './moduleAlatPromosiActions.js'
import getters from './moduleAlatPromosiGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
