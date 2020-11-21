export default {
  ADD_ITEM_PAYMENT (state, item) {
    state.payments.unshift(item)
  },
  SET_PAYMENT (state, payments) {
    state.payments = payments.data
  },
  UPDATE_PAYMENT (state, payment) {
    const paymentIndex = state.payments.findIndex((p) => p.id === payment.data.id)
    Object.assign(state.payments[paymentIndex], payment.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.payments.findIndex((p) => p.id === itemId)
    state.payments.splice(ItemIndex, 1)
  }
}
