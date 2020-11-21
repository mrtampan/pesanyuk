export default {
  SET_CUSTOMER (state, customers) {
    state.customers = customers.data
  },
  UPDATE_CUSTOMER (state, customer) {
    const customerIndex = state.customers.findIndex((p) => p.id === customer.data.id)
    Object.assign(state.customers[customerIndex], customer.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.customers.findIndex((p) => p.id === itemId)
    state.customers.splice(ItemIndex, 1)
  }
}
  