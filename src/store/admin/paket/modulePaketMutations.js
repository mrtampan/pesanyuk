export default {
  ADD_ITEM_PACKET (state, item) {
    state.packets.unshift(item)
  },
  UPDATE_PACKET (state, packet) {
    const packetIndex = state.packets.findIndex((p) => p.id === packet.data.id)
    Object.assign(state.packets[packetIndex], packet.data)
  },
  SET_PACKET (state, packets) {
    state.packets = packets.data
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.packets.findIndex((p) => p.id === itemId)
    state.packets.splice(ItemIndex, 1)
  }
}
