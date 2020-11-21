export default {
  ADD_ITEM_SUPPLIER (state, item) {
    state.suppliers.unshift(item)
  },
  SET_SUPPLIER (state, suppliers) {
    state.suppliers = suppliers.data
  },
  UPDATE_SUPPLIER (state, supplier) {
    // alert(JSON.stringify(supplier.suppliers.id))
    const supplierIndex = state.suppliers.findIndex((p) => p.id === supplier.data.id)
    Object.assign(state.suppliers[supplierIndex], supplier.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.suppliers.findIndex((p) => p.id === itemId)
    state.suppliers.splice(ItemIndex, 1)
  }
}
