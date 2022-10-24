const lang = {
  namespaced: true,
  state: {
    current: process.env.VUE_APP_I18N_DEFAULT_LOCALE
  },
  mutations: {
    SET_CURRENT(state, payload) {
      state.current = payload
    }
  },
  actions: {
    setCurrent({commit}, payload) {
      commit('SET_CURRENT', payload)
    }
  },
  getters: {
    getCurrent(state) {
      return state.current
    }
  }
}

export default lang
