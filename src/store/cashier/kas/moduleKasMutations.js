export default {
  ADD_ITEM_CASH (state, item) {
    state.cashs.unshift(item)
  },
  SET_CASH (state, cashs) {
    state.cashs = cashs.data
  },
  UPDATE_CASH (state, cash) {
    const cashIndex = state.cashs.findIndex((p) => p.id === cash.data.id)
    Object.assign(state.cashs[cashIndex], cash.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.cashs.findIndex((p) => p.id === itemId)
    state.cashs.splice(ItemIndex, 1)
  }
}
