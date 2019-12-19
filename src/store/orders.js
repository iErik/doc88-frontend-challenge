import * as types from '@store/types'

const state = {
  orders: []
}

const getters = {
  [types.ORDER_LIST]: ({ orders }) => orders
}

const mutations = {
  [types.NEW_ORDER]: (state, orderList) => {
    state.orders = [ ...state.orders, orderList ]
  }
}

const actions = {
  [types.NEW_ORDER]: ({ commit }, newOrder) => {
    commit(types.NEW_ORDER, newOrder)
  }
}

export default { state, getters, mutations, actions }
