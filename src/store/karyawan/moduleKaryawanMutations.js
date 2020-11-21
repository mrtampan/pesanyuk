export default {
  ADD_ITEM_EMPLOYEE (state, item) {
    state.employees.unshift(item)
  },
  SET_EMPLOYEE (state, employees) {
    state.employees = employees.data
  },
  UPDATE_EMPLOYEE (state, employee) {
    const employeeIndex = state.employees.findIndex((p) => p.id === employee.data.id)
    Object.assign(state.employees[employeeIndex], employee.data)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.employees.findIndex((p) => p.id === itemId)
    state.employees.splice(ItemIndex, 1)
  }
}
