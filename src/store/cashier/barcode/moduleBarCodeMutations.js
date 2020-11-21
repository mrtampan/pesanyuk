export default {
  ADD_ITEM_BAR_CODE (state, item) {
    state.barcodes.unshift(item)
  },
  SET_BAR_CODE (state, barcodes) {
    state.barcodes = barcodes.data
  },
  UPDATE_BAR_CODE (state, barcode) {
    const barcodeIndex = state.barcodes.findIndex((p) => p.id === barcode.data.id)
    Object.assign(state.barcodes[barcodeIndex], barcode.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.barcodes.findIndex((p) => p.id === itemId)
    state.barcodes.splice(ItemIndex, 1)
  }
}
