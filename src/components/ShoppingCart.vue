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
          Total:
          ${{ totalCost.toFixed(1) }}
        </div>

        <div class="shopping-cart__shipping-cost">
          Shipping cost is $5, free shipping on orders of $50 or more
        </div>

        <div class="shopping-cart__shipping-cost-total">
          Total amount including shipping cost:
          ${{ totalCostDelivery.toFixed(1) }}
        </div>

        <form class="shopping-cart__form">
          <div class="shopping-cart__contacts-title">
            Contact info
          </div>

          <div class="shopping-cart__order-block">
            <label
              for="name"
              class="shopping-cart__order-block-label"
            >
              Name
            </label>
            <input
              id="name"
              v-model="name"
              type="text"
            >
          </div>
          <div class="shopping-cart__order-block">
            <label
              for="email"
              class="shopping-cart__order-block-label"
            >
              Email
            </label>
            <input
              id="email"
              v-model="email"
              :class="[emailError ? 'error': '']"
              type="email"
            >
            <div
              v-if="emailError"
              class="shopping-cart__error"
            >
              Email is incorrect
            </div>
          </div>
          <div class="shopping-cart__order-block">
            <label
              for="phone"
              class="shopping-cart__order-block-label"
            >
              Telephone number
            </label>
            <input
              id="phone"
              v-model="phone"
              :class="[phoneError ? 'error': '']"
              type="tel"
            >
            <div
              v-if="phoneError"
              class="shopping-cart__error"
            >
              Phone is incorrect
            </div>
          </div>
          <div class="shopping-cart__order-block">
            <label
              for="address"
              class="shopping-cart__order-block-label"
            >
              Address
            </label>
            <input
              id="address"
              v-model="address"
              type="text"
            >
          </div>
          <div class="shopping-cart__order-block">
            <label class="shopping-cart__order-block-label">
              Comment
            </label>
            <textarea
              id="comment"
              v-model="comment"
              placeholder="Your comments to the order (optional)"
            />
          </div>
          <CustomButton
            label="Order"
            class="order-btn"
            @click="checkForm"
          />
        </form>
      </div>

      <div
        v-else
        class="shopping-cart_empty"
      >
        <div class="shopping-cart_empty-title">
          Your cart is empty :(
        </div>
        <div class="shopping-cart_empty-description">
          Please choose some dishes and add them to the cart
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
      name: '',
      email: '',
      phone: '',
      address: '',
      comment: '',
      emailError: false,
      phoneError: false,
      errors: []
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
    },
    totalCostDelivery() {
      if(this.totalCost >= 50) {
        return this.totalCost
      } else {
        return this.totalCost + 5
      }
    },
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
    },
    checkForm() {
      this.errors = []
      let formInputs = document.getElementsByTagName('input')

      Array.from(formInputs).forEach(input => {
        if (input.value === '') {
          input.classList.add('errorInput');
          this.errors.push('Missed data')
        } else {
          input.classList.remove('errorInput');
        }
      });

      this.emailError = !this.validateEmail(this.email);

      this.phoneError = !this.validatePhone(this.phone);

      if(!this.errors.length && !this.emailError && !this.phoneError) this.onSubmit()
    },
    validateEmail(email) {
      let exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return exp.test(String(email).toLowerCase());
    },
    validatePhone(phone) {
      let exp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      return exp.test(String(phone));
    },
    onSubmit() {
      let params = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        comment: this.comment,
        total: this.totalCostDelivery,
        dishes: JSON.stringify(this.cart)
      }

      this.closeCartPopup()

      this.$store.dispatch('orders/makeAnOrder', params).then(() => {
        this.name = ''
        this.email = ''
        this.phone = ''
        this.address = ''
        this.comment = ''
      })
      this.$store.dispatch('cart/deleteCart')
    },
    closeCartPopup() {
      this.$emit('closeCartPopup')
    },
  },
}

</script>

<style lang="scss" scoped>
.shopping-cart {
  .shopping-cart__content {
    margin-bottom: 15px;
    border-top: 1px solid rgba(183, 182, 182, 0.49);
    height: 100%;

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
    margin-bottom: 30px;
    padding-top: 15px;
    border-top: 1px solid rgba(183, 182, 182, 0.49);

    font-size: 17px;
    font-weight: 600;
    opacity: 0.8;
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

  .shopping-cart__shipping-cost {
    margin-bottom: 5px;

    font-size: 15px;
    font-weight: 400;
    color: #5d5d5d;
    opacity: 0.6;
  }

  .shopping-cart__shipping-cost-total {
    margin-bottom: 40px;

    font-size: 17px;
    font-weight: 600;
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

      input, textarea {
        width: 100%;
        height: 48px;
        padding: 8px 13px 7px 13px;

        border: 1px solid #ececec;
        border-radius: 3px;
        outline: none;
        background-color: #fafafa;
        color: #383838;
        font-size: 14px;

        &:hover,
        &:active,
        &:focus {
          background-color: white;
          border-color: rgba(136, 136, 136, 0.5);
          -webkit-box-shadow: 0 0 0 30px white inset;
          transition: all .4s ease;

          &.error,
          &.errorInput {
            border: 1px solid red;
          }
        }

        &.error,
        &.errorInput {
          border: 1px solid red;
        }

        &:invalid {
          border: 1px solid red;
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

      textarea {
        height: 100px;
        resize: none;
      }

      .shopping-cart__error {
        margin-top: 5px;
        font-size: 10px;
        color: red;
      }
    }

    .order-btn {
      width: 100%;
      padding: 17px;
    }
  }
}
</style>
