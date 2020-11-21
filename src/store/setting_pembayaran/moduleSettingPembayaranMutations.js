export default {
  ADD_ITEM_SETTING_PAYMENT (state, item) {
    state.setting_payments.unshift(item)
  },
  SET_SETTING_PAYMENT (state, setting_payments) {
    state.setting_payments = setting_payments.data
  },
  UPDATE_SETTING_PAYMENT (state, setting_payment) {
    const setting_paymentIndex = state.setting_payments.findIndex((p) => p.id === setting_payment.data.id)
    Object.assign(state.setting_payments[setting_paymentIndex], setting_payment.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.setting_payments.findIndex((p) => p.id === itemId)
    state.setting_payments.splice(ItemIndex, 1)
  }
}
