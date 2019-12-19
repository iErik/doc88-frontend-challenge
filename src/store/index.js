import Vue from 'vue'
import Vuex from 'vuex'

import ordersStore from '@store/orders'

Vue.use(Vuex)
export default new Vuex.Store(ordersStore)
