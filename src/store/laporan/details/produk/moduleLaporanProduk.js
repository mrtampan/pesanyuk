

import state from './moduleLaporanProdukState.js'
import mutations from './moduleLaporanProdukMutations.js'
import actions from './moduleLaporanProdukActions.js'
import getters from './moduleLaporanProdukGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

