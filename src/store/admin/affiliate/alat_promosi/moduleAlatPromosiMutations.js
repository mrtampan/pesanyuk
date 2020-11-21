export default {
  ADD_ITEM_PROMOTION_TOOLS (state, item) {
    state.promotion_tools.unshift(item)
  },
  UPDATE_PROMOTION_TOOLS (state, promotion_tool) {
    const promotion_toolIndex = state.promotion_tools.findIndex((p) => p.id === promotion_tool.data.id)
    Object.assign(state.promotion_tools[promotion_toolIndex], promotion_tool.data)
  },
  SET_PROMOTION_TOOLS (state, promotion_tools) {
    state.promotion_tools = promotion_tools.data
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.promotion_tools.findIndex((p) => p.id === itemId)
    state.promotion_tools.splice(ItemIndex, 1)
  }
}
