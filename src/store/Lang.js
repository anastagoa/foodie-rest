import { defaultLocale } from '@/i18n'

const lang = {
  namespaced: true,
  state: {
    current: defaultLocale
  },
  mutations: {
    SET_CURRENT(state, payload) {
      state.current = payload
      window.localStorage.setItem('currentLang', JSON.stringify(state.current));
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
