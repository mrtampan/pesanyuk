export default {
  ADD_ITEM_SET_STOCK (state, item) {
    state.setstocks.unshift(item)
  },
  SET_SET_STOCK (state, setstocks) {
    state.setstocks = setstocks.setstocks
  },
  UPDATE_SET_STOCK (state, setstock) {
    const setstockIndex = state.setstock.findIndex((p) => p.id === setstock.id)
    Object.assign(state.setstocks[setstockIndex], setstock)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.setstock.findIndex((p) => p.id === itemId)
    state.setstock.splice(ItemIndex, 1)
  }
}
