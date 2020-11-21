

import state from './moduleLaporanState.js'
import mutations from './moduleLaporanMutations.js'
import actions from './moduleLaporanActions.js'
import getters from './moduleLaporanGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

