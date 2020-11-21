

import state from './moduleLaporanPenjualanState.js'
import mutations from './moduleLaporanPenjualanMutations.js'
import actions from './moduleLaporanPenjualanActions.js'
import getters from './moduleLaporanPenjualanGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

