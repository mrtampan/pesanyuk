export default {
  ADD_ITEM_MANAGE (state, item) {
    state.manages.unshift(item)
  },
  SET_MANAGE (state, manages) {
    state.manages = manages.data
  },
  UPDATE_MANAGE (state, manage) {
    const manageIndex = state.manages.findIndex((p) => p.id === manage.data.id)
    Object.assign(state.manages[manageIndex], manage.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.manages.findIndex((p) => p.id === itemId)
    state.manages.splice(ItemIndex, 1)
  }
}
