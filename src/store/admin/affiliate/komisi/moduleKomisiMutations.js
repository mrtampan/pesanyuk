export default {
  ADD_ITEM_COMMISSION (state, item) {
    state.commissions.unshift(item)
  },
  UPDATE_COMMISSION (state, commission) {
    const commissionIndex = state.commissions.findIndex((p) => p.id === commission.data.id)
    Object.assign(state.commissions[commissionIndex], commission.data)
  },
  SET_COMMISSION (state, commissions) {
    state.commissions = commissions.data
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.commissions.findIndex((p) => p.id === itemId)
    state.commissions.splice(ItemIndex, 1)
  }
}
