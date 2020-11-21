export default {
  ADD_ITEM_ADD_STOCK (state, item) {
    state.addstocks.unshift(item)
  },
  SET_ADD_STOCK (state, addstocks) {
    state.addstocks = addstocks.data
  },
  UPDATE_ADD_STOCK (state, addstock) {
    const addstockIndex = state.addstocks.findIndex((p) => p.id === addstock.data.id)
    Object.assign(state.addstocks[addstockIndex], addstock.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.addstocks.findIndex((p) => p.id === itemId)
    state.addstocks.splice(ItemIndex, 1)
  }
}
