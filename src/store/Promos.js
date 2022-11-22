import axios from 'axios'

const promos = {
  namespaced: true,
  state: {
    all: []
  },
  mutations: {
    SET_ALL(state, payload) {
      state.all = payload
    }
  },
  actions: {
    loadAll({ commit }) {
      axios.get('/api/promos')
        .then((payload => {
          commit('SET_ALL', payload.data)
        })).catch(error => {
          return error
        })
    }
  },
  getters: {
    getAll(state) {
      return state.all
    }
  }
}

export default promos
