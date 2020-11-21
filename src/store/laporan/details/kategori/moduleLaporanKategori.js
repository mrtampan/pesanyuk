

import state from './moduleLaporanKategoriState.js'
import mutations from './moduleLaporanKategoriMutations.js'
import actions from './moduleLaporanKategoriActions.js'
import getters from './moduleLaporanKategoriGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

