import { createStore } from 'vuex'
import categories from '@/store/Categories'
import promos from '@/store/Promos'
import cart from '@/store/Cart'
import orders from '@/store/Orders'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categories,
    promos,
    cart,
    orders
  }
})
