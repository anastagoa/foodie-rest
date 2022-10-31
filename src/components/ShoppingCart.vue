<template>
  <div class="shopping-cart">
    <div
      class="shopping-cart__dishes"
      :class="[emptyCart ? 'empty': '']"
    >
      <div v-if="!emptyCart">
        <div
          v-for="(item, index) in cart"
          :key="item.id"
          class="shopping-cart__dish"
        >
          <dish-box-cart
            :item="item"
            @deleteFromCart="deleteFromCart(item, index)"
            @decreaseNum="decreaseNum(item, index)"
            @increaseNum="increaseNum(item, index)"
          />
        </div>
      </div>
      <div
        v-else
        class="shopping-cart_empty"
      >
        <div class="shopping-cart_empty-title">
          {{ $t('cart.empty') }}
        </div>
        <div class="shopping-cart_empty-description">
          {{ $t('cart.choose') }}
        </div>
      </div>
    </div>
    <div
      v-if="!emptyCart"
      class="shopping-cart__total"
    >
      {{ $t('order.total') }}:
      {{ totalCost }}
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

import DishBoxCart from '@/components/ui/DishBoxCart'
export default {
  name: 'ShoppingCart',
  components: { DishBoxCart },
  computed: {
    ...mapGetters({
      cart: 'cart/getCart',
    }),
    emptyCart() {
      return this.cart.length === 0
    },
    totalCost() {
      let result = []

      this.cart.forEach(item => {
        result.push(item.price * item.quantity)
      })

      result = result.reduce((sum, el) => {
        return sum + el
      })

      return result
    }
  },
  methods: {
    deleteFromCart(item, index) {
      let params = {
        item: item,
        index: index
      }

      this.$store.dispatch('cart/deleteFromCart', params)
    },
    increaseNum(item, index) {
      let params = {
        item: item,
        index: index
      }
      this.$store.dispatch('cart/increaseCartItem', params)
    },
    decreaseNum(item, index) {
      let params = {
        item: item,
        index: index
      }
      this.$store.dispatch('cart/decreaseCartItem', params)
    }
  },
}
</script>

<style lang="scss" scoped>
.shopping-cart {

  .shopping-cart__dishes {
    margin-bottom: 15px;

    border-top: 1px solid rgba(183, 182, 182, 0.69);
    border-bottom: 1px solid rgba(183, 182, 182, 0.69);

    &.empty {
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 300px;
    }
  }
  .shopping-cart__total {
    font-size: 19px;
    font-weight: 600;
    text-align: end;
  }

  .shopping-cart_empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    .shopping-cart_empty-title {
      font-size: 19px;
      font-weight: 600;
    }
    .shopping-cart_empty-description {
      font-size: 15px;
      font-weight: 400;
      color: rgba(135, 135, 135, 0.7);
    }
  }
}
</style>
