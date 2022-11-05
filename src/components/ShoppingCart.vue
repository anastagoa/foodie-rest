<template>
  <div class="shopping-cart">
    <div
      class="shopping-cart__content"
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

        <div class="shopping-cart__total">
          {{ $t('order.total') }}:
          {{ totalCost }}
          <span> ₽ </span>
        </div>

        <form class="shopping-cart__form">
          <div class="shopping-cart__contacts-title">
            {{ $t('order.contactInfo') }}
          </div>

          <div class="shopping-cart__order-block">
            <label
              for="name"
              class="shopping-cart__order-block-label"
            >
              {{ $t('order.name') }}
            </label>
            <input
              id="name"
              v-model="name"
              type="text"
              required
            >
          </div>
          <div class="shopping-cart__order-block">
            <label
              for="email"
              class="shopping-cart__order-block-label"
            >
              {{ $t('order.email') }}
            </label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
            >
          </div>
          <div class="shopping-cart__order-block">
            <label
              for="telephone"
              class="shopping-cart__order-block-label"
            >
              {{ $t('order.telephone') }}
            </label>
            <input
              id="telephone"
              v-model="telephone"
              type="tel"
              placeholder="+7 ___ ___-____"
              required
            >
          </div>
          <div class="shopping-cart__order-block">
            <label
              for="address"
              class="shopping-cart__order-block-label"
            >
              {{ $t('order.address') }}
            </label>
            <input
              id="address"
              v-model="address"
              type="text"
              required
            >
          </div>
          <div class="shopping-cart__order-block">
            <label
              for="comment"
              class="shopping-cart__order-block-label"
            >
              {{ $t('order.comment') }}
            </label>
            <input
              id="comment"
              v-model="comment"
              type="text"
            >
          </div>
          <CustomButton
            :label="`${$t('order.order')}`"
            class="order-btn"
            @click="onSubmit"
          />
        </form>
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
  </div>
</template>

<script>

import {mapGetters} from "vuex";

import DishBoxCart from '@/components/ui/DishBoxCart'
import CustomButton from '@/components/ui/CustomButton'

export default {
  name: 'ShoppingCart',
  components: { CustomButton, DishBoxCart },
  data() {
    return {
      name: null,
      email: null,
      telephone: null,
      address: null,
      comment: null
    }
  },
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
    onSubmit() {
      let personalData = {
        name: this.name,
        email: this.email,
        telephone: this.telephone,
        address: this.address,
        comment: this.comment
      }
      this.name = null
      this.email = null
      this.telephone = null
      this.address = null
      this.comment = null

      console.log(personalData)
    },
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

  .shopping-cart__content {
    margin-bottom: 15px;
    border-top: 1px solid rgba(183, 182, 182, 0.69);

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
    margin-bottom: 50px;
    padding-top: 15px;
    border-top: 1px solid rgba(183, 182, 182, 0.69);

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

  .shopping-cart__form {
    padding-bottom: 35px;

    .shopping-cart__contacts-title {
      margin-bottom: 20px;

      font-size: 20px;
      font-weight: 500;
      color: #4f4f4f;
    }

    .shopping-cart__order-block {
      margin-bottom: 35px;

      .shopping-cart__order-block-label {
        display: block;
        margin-bottom: 6px;
        font-size: 13px;
        font-weight: 400;
        color: #888888;
      }

      input {
        width: 100%;
        height: 48px;
        padding: 8px 13px 7px;

        border: 1px solid #ececec;
        border-radius: 3px;
        outline: none;
        background-color: #fafafa;
        color: #383838;
        font-size: 14px;

        &#comment {
          height: 100px;
        }

        &:hover,
        &:active,
        &:focus {
          background-color: white;
          border-color: rgba(136, 136, 136, 0.5);
          -webkit-box-shadow: 0 0 0 30px white inset;
          transition: all .4s ease;
        }

        &:-webkit-autofill {
          background-color: #fafafa;
          -webkit-box-shadow: 0 0 0 30px #fafafa inset;
          transition: all .4s ease;

          &:hover {
            background-color: white;
            border-color: rgba(136, 136, 136, 0.5);
          }
        }
      }
    }

    .order-btn {
      width: 100%;
      padding: 17px;
    }
  }
}
</style>
