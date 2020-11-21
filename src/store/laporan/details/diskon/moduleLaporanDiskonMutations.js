export default {
  SET_DISCOUNT (state, discounts) {
    state.discounts = discounts.data
  },
  UPDATE_discount (state, discount) {
    const discountIndex = state.discounts.findIndex((p) => p.id === discount.data.id)
    Object.assign(state.discounts[discountIndex], discount.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.discounts.findIndex((p) => p.id === itemId)
    state.discounts.splice(ItemIndex, 1)
  }
}
  