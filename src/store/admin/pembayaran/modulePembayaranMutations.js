export default {
  ADD_ITEM_PAYMENT (state, item) {
    state.payments.unshift(item)
  },
  SET_PAYMENT (state, payments) {
    state.payments = payments.data
  },
  UPDATE_PAYMENT (state, payment) {
    const paymentIndex = state.cpayments.findIndex((p) => p.id === payment.data.id)
    Object.assign(state.cpayments[paymentIndex], payment.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.customers.findIndex((p) => p.id === itemId)
    state.customers.splice(ItemIndex, 1)
  }
}
