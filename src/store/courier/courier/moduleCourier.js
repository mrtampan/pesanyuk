/*=========================================================================================
  File Name: moduleEmail.js
  Description: Email Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleCourierState.js'
import mutations from './moduleCourierMutations.js'
import actions from './moduleCourierActions.js'
import getters from './moduleCourierGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
