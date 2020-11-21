

import state from './moduleLaporanPembayaranState.js'
import mutations from './moduleLaporanPembayaranMutations.js'
import actions from './moduleLaporanPembayaranActions.js'
import getters from './moduleLaporanPembayaranGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

