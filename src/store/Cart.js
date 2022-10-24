// import axios from 'axios'

const cart = {
  namespaced: true,
  state: {
    cart: [],
    total: null
  },
  mutations: {
    SET_CART (state, payload) {
      // if (state.cart.length) {
      //   state.cart.map(item => {
      //     if (payload.title === item.title) {
      //       item.quantity++
      //     } else {
      //       state.cart.push(payload)
      //     }
      //   })
      // } else {
      //   state.cart.push(payload)
      // }

      if (state.cart.length) {
        let isDishExists = false

        state.cart.map(item => {
          if (payload.title === item.title) {
            isDishExists = true
            item.quantity++
          }
        })
        if (!isDishExists) {
          state.cart.push(payload)
          payload.quantity++
        }
      } else {
        state.cart.push(payload)
        payload.quantity++
      }
    },
    REMOVE_FROM_CART(state, payload) {
      state.cart.splice(payload, 1)
    },
    INCREASE(state, payload) {
      state.cart[payload].quantity++
    },
    DECREASE(state, payload) {
      if(state.cart[payload].quantity > 1) {
        state.cart[payload].quantity--
      }
    },
    SET_TOTAL_PRICE(state, payload) {
      state.total = payload
    }
  },
  actions: {
    addToCart({commit}, payload) {
      commit('SET_CART', payload)
    },
    deleteFromCart({commit}, payload) {
      commit ('REMOVE_FROM_CART', payload)
    },
    increaseCartItem({commit}, payload) {
      commit ('INCREASE', payload)
    },
    decreaseCartItem({commit}, payload) {
      commit ('DECREASE', payload)
    },
    loadTotalPrice({commit}, payload) {
      commit ('SET_TOTAL_PRICE', payload)
    }
  },
  getters: {
    getCart(state) {
      return state.cart
    },
    getTotal(state) {
      return state.total
    }
  }
}

export default cart
