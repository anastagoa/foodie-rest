import axios from 'axios'

const orders = {
  namespaced: true,
  state: {
    all: [],
    order: null
  },
  mutations: {
    SET_ALL(state, payload) {
      state.all = payload
    },
    SET_ORDER(state, payload) {
      state.order = payload
    }
  },
  actions: {
    loadAll({commit}) {
      axios.get('/api/orders')
        .then((payload => {
          commit('SET_ALL', payload.data)
          return payload.data
        })).catch(error => {
        return error
      })
    },
    makeAnOrder({commit}, payload) {
      axios.post('/api/orders', payload)
        .then((payload => {
          commit('SET_ORDER', payload.data)
          return payload.data
        })).catch(error => {
        return error
      })
    },
  },
  getters: {
    getAll(state) {
      return state.all
    },
    getOne(state) {
      return state.order
    }
  }
}

export default orders
