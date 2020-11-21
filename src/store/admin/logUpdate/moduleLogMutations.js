export default {
  ADD_ITEM_LOG (state, item) {
    state.logs.unshift(item)
  },
  SET_LOG (state, logs) {
    state.logs = logs.data
  },
  UPDATE_LOG (state, log) {
    const logIndex = state.logs.findIndex((p) => p.id === log.data.id)
    Object.assign(state.logs[logIndex], log.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.logs.findIndex((p) => p.id === itemId)
    state.logs.splice(ItemIndex, 1)
  }
}
