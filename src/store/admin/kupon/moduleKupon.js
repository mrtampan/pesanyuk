/*=========================================================================================
  File Name: moduleKupon.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleKuponState.js'
import mutations from './moduleKuponMutations.js'
import actions from './moduleKuponActions.js'
import getters from './moduleKuponGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
