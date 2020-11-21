export default {
  ADD_ITEM_SALE (state, item) {
    state.sales.unshift(item)
  },
  SET_SALE (state, sales) {
    state.sales = sales.data
  },
  UPDATE_SALE (state, sale) {
    const saleIndex = state.sales.findIndex((p) => p.id === sale.data.id)
    Object.assign(state.sales[saleIndex], sale.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.sales.findIndex((p) => p.id === itemId)
    state.sales.splice(ItemIndex, 1)
  }
}
  