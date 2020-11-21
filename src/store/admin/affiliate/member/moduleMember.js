/*=========================================================================================
  File Name: moduleKupon.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleMemberState.js'
import mutations from './moduleMemberMutations.js'
import actions from './moduleMemberActions.js'
import getters from './moduleMemberGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
