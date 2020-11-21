export default {
  ADD_ITEM_COUPON (state, item) {
    state.coupons.unshift(item)
  },
  UPDATE_COUPON (state, coupon) {
    const couponIndex = state.coupons.findIndex((c) => c.id === coupon.id)
    Object.assign(state.coupons[couponIndex], coupon)
  },
  SET_COUPON (state, coupons) {
    state.coupons = coupons.data
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.coupons.findIndex((c) => c.id === itemId)
    state.coupons.splice(ItemIndex, 1)
  }
}
