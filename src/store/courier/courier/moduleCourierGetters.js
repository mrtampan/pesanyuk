/*=========================================================================================
  File Name: moduleEmailGetters.js
  Description: Email Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  filteredcouriers: state => state.couriers.filter((couriers) => {
    return (state.couriers_filter === 'starred' ? couriers.isStarred : state.couriers_filter === couriers.couriersFolder || couriers.labels.includes(state.couriers_filter)) && (couriers.sender_name.toLowerCase().includes(state.couriersSearchQuery.toLowerCase()) || couriers.sender.toLowerCase().includes(state.couriersSearchQuery.toLowerCase()) || couriers.subject.toLowerCase().includes(state.couriersSearchQuery.toLowerCase()) || couriers.message.toLowerCase().includes(state.couriersSearchQuery.toLowerCase()))
  }),
  getcouriers: state => (couriersId) => state.cour.find((couriers) => couriers.id === couriersId)
}
