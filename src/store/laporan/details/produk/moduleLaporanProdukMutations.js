export default {
  ADD_ITEM_PRODUCT (state, item) {
    state.product.unshift(item)
  },
  SET_PRODUCT (state, products) {
    state.products = products.data
  },
  UPDATE_PRODUCT (state, product) {
    const productIndex = state.products.findIndex((p) => p.id === product.id)
    Object.assign(state.products[productIndex], product)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.products.findIndex((p) => p.id === itemId)
    state.products.splice(ItemIndex, 1)
  }
}
  