/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default { 
  // ADD_ITEM(state, item) {
  //   state.products.unshift(item)
  // },
  SET_COURIER (state, courier) {
    state.couriers = courier
  },
  // SET_TRANSACTION_SEARCH_QUERY (state, query) {
  //   state.transSearchQuery = query
  // },
  // SET_TAGS (state, tags) {
  //   state.transTags = tags
  // },
  // SET_META (state, meta) {
  //   state.meta = meta
  // },
  UPDATE_COUR_FILTER (state, filterName) {
    state.couriers_filter = filterName
  }
  // UPDATE_LABELS (state, payload) {
  //   payload.transactions.forEach((transId) => {
  //     const transIndex = state.transactions.findIndex((trans) => trans.id === transId)
  //     const index = state.transactions[transIndex].labels.indexOf(payload.label)

  //     if (index === -1) state.transactions[transIndex].labels.push(payload.label)
  //     else state.transactions[transIndex].labels.splice(index, 1)
  //   })
  // },
  // SET_LABELS (state, payload) {
  //   state.transactions.find((trans) => trans.id === payload.transId).labels = payload.labels
  // },
  // SET_UNSENT (state, payload) {
  //   payload.transactionIds.forEach((transId) => {
  //     const transIndex = state.transactions.findIndex((trans) => trans.id === transId)
  //     if (transIndex !== -1) state.transactions[transIndex].unsent = payload.unsentFlag
  //   })
  // },

  // MOVE_TRANSACTIONS_TO (state, payload) {
  //   payload.transactionIds.forEach((transId) => {
  //     const transIndex = state.transactions.findIndex((trans) => trans.id === transId)

  //     // Update draft meta
  //     // If moving from draft mailFolder decrease draft meta by removing mailId
  //     if (state.transactions[transIndex].transFolder === 'draft') {
  //       state.meta.draftTransactions.splice(state.meta.draftTransactions.findIndex(i => i === transId), 1)
  //     }
  //     // Else increase by pushing mailId
  //     if (payload.to === 'draft') {
  //       state.meta.draftTransactions.push(transId)
  //     }

  //     state.transactions[transIndex].transFolder = payload.to
  //   })
  // },

  // TOGGLE_IS_TRANSACTION_STARRED (state, payload) {
  //   state.transactions.find((trans) => trans.id === payload.transId).isStarred = payload.value
  // },

  // // If your process of fetching is different than ours. Please update action and mutation
  // // Maybe this mutation is redundant for you. Feel free to remove it.
  // UPDATE_UNSENT_META (state, payload) {

  //   // Loop over email meta
  //   for (const folder in state.meta.unsentTransactions.folder) {

  //     // If folder is same as current filter
  //     if (folder === state.trans_filter) {

  //       if (payload.unsentFlag) {

  //         // If unsent flag is true - increase count
  //         payload.transactionIds.forEach((transId) => {
  //           if (state.meta.unsentTransactions.folder[folder].indexOf(transId) === -1) state.meta.unsentTransactions.folder[folder].push(transId)
  //         })
  //       } else {

  //         // else reduce unsent mails count
  //         payload.transactionIds.forEach((transId) => {
  //           const transIdIndex = state.meta.unsentTransactions.folder[folder].indexOf(transId)
  //           if (transIdIndex !== -1) state.meta.unsentTransactions.folder[folder].splice(transIdIndex, 1)
  //         })
  //       }

  //     }
  //   }
  // },
  // UPDATE_UNSENT_META_ON_MOVE (state, payload) {

  //   // Updating Draft meta is handled by "MOVE_MAILS_TO" mutation

  //   payload.transactionIds.forEach((transId) => {
  //     const trans = state.transactions.find((trans) => trans.id === transId)

  //     if (trans.unsent) {
  //       const cf_unsent_transactions = state.meta.unsentTransactions.folder[state.trans_filter]
  //       if (cf_unsent_transactions) {
  //         cf_unsent_transactions.splice(cf_unsent_transactions.indexOf(transId), 1)
  //       }
  //       if (state.meta.unsentTransactions.folder[payload.to]) state.meta.unsentTransactions.folder[payload.to].push(transId)
  //     }
  //   })
  // }
}

