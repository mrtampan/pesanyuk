export default {
  SET_CATEGORY (state, categorys) {
    state.categorys = categorys.data
  },
  UPDATE_CATEGORY (state, category) {
    const categoryIndex = state.categorys.findIndex((p) => p.id === category.data.id)
    Object.assign(state.categorys[categoryIndex], category.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.categorys.findIndex((p) => p.id === itemId)
    state.categorys.splice(ItemIndex, 1)
  }
}
  