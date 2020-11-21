

import state from './moduleLaporanDiskonState.js'
import mutations from './moduleLaporanDiskonMutations.js'
import actions from './moduleLaporanDiskonActions.js'
import getters from './moduleLaporanDiskonGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

