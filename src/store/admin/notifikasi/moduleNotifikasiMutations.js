export default {
  ADD_ITEM_NOTIFICATION (state, item) {
    state.notifications.unshift(item)
  },
  SET_NOTIFICATION (state, notifications) {
    state.notifications = notifications.data
  },
  UPDATE_NOTIFICATION (state, notification) {
    const notificationIndex = state.notifications.findIndex((p) => p.id === notification.data.id)
    Object.assign(state.notifications[notificationIndex], notification.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.notifications.findIndex((p) => p.id === itemId)
    state.notifications.splice(ItemIndex, 1)
  }
}
