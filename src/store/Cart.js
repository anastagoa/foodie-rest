// import axios from 'axios'

let cartItems = window.localStorage.getItem('cartItems');
let cartCount = window.localStorage.getItem('cartCount');

const cart = {
  namespaced: true,
  state: {
    cart: cartItems ? JSON.parse(cartItems) : [],
    total: cartCount ? parseInt(cartCount) : 0,
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
        let found = false

        state.cart.map(item => {
          if (payload.title === item.title) {
            found = true
            item.quantity++
          }
        })
        if (!found) {
          state.cart.push(payload)
          payload.quantity++
        }
      } else {
        state.cart.push(payload)
        payload.quantity++
        state.total = payload.price //check
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
      // if(!state.cart.length) {
      //   state.total = payload
      // } else {
        state.total += payload
      // }
    },
    SAVE_CART(state) {
      window.localStorage.setItem('cartItems', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', JSON.stringify(state.total));
    }
  },
  actions: {
    addToCart({commit}, payload) {
      commit('SET_CART', payload)
      // commit('SET_TOTAL_PRICE', payload.price)
      commit('SAVE_CART')
    },
    deleteFromCart({commit}, payload) {
      commit ('REMOVE_FROM_CART', payload)
      // commit('SET_TOTAL_PRICE')
      commit('SAVE_CART')
    },
    increaseCartItem({commit}, payload) {
      commit ('INCREASE', payload)
    },
    decreaseCartItem({commit}, payload) {
      commit ('DECREASE', payload)
    },
    updateTotalPrice({commit}, payload) {
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
