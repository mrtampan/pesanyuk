/*=========================================================================================
  File Name: moduleEmailGetters.js
  Description: Email Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  filteredtransactions: state => state.transactions.filter((transactions) => {
    return (state.transaction_filter === 'starred' ? transactions.isStarred : state.transaction_filter === transactions.transactionsFolder || transactions.labels.includes(state.transaction_filter)) && (transactions.sender_name.toLowerCase().includes(state.transactionsSearchQuery.toLowerCase()) || transactions.sender.toLowerCase().includes(state.transactionsSearchQuery.toLowerCase()) || transactions.subject.toLowerCase().includes(state.transactionsSearchQuery.toLowerCase()) || transactions.message.toLowerCase().includes(state.transactionsSearchQuery.toLowerCase()))
  }),
  gettransactions: state => (transactionsId) => state.trans.find((transactions) => transactions.id === transactionsId)
}
