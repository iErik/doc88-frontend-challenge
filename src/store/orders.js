import * as types from '@store/types'

const state = {
  orders: [],
  orderFilter: 'food'
}

const getters = {
  [types.ORDER_LIST_FILTER]: ({ orderFilter }) => orderFilter,
  [types.ORDER_LIST]: ({ orders, orderFilter }) => orders
    .filter(order => order.type === orderFilter)
}

const mutations = {
  [types.NEW_ORDER]: (state, newOrder) => {
    state.orders = [ newOrder, ...state.orders ]
  },

  [types.ORDER_LIST_FILTER]: (state, orderFilter) => {
    state.orderFilter = orderFilter
  }
}

const actions = {
  [types.NEW_ORDER]: ({ commit }, newOrder) => {
    commit(types.NEW_ORDER, newOrder)
  },
  [types.ORDER_LIST_FILTER]: ({ commit }, filter) => {
    commit(types.ORDER_LIST_FILTER, filter)
  }
}

export default { state, getters, mutations, actions }
