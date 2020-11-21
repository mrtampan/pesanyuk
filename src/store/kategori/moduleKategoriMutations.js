export default {
  ADD_ITEM_CATEGORY (state, item) {
    state.category.unshift(item)
  },
  SET_CATEGORY (state, category) {
    state.category = category.data
  },
  UPDATE_CATEGORY (state, category) {
    const categoryIndex = state.category.findIndex((p) => p.id === category.data.id)
    Object.assign(state.category[categoryIndex], category.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.category.findIndex((p) => p.id === itemId)
    state.category.splice(ItemIndex, 1)
  }
}
