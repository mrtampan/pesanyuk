

import state from './moduleLaporanPelangganState.js'
import mutations from './moduleLaporanPelangganMutations.js'
import actions from './moduleLaporanPelangganActions.js'
import getters from './moduleLaporanPelangganGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

