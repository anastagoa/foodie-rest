<template>
  <div class="dish-mini-box">
    <div class="dish-mini-box__left">
      <div class="dish-mini-box__img" />
      <div class="dish-mini-box__title">
        {{ product.title }}
      </div>
    </div>
    <div class="dish-mini-box__right">
      <Counter
        :quantity="product.quantity"
        @decreaseNum="decreaseNum"
        @increaseNum="increaseNum"
      />
      <div class="dish-mini-box__price">
        {{ product.price }} ₽
      </div>
      <div
        class="dish-mini-box__cross"
        @click="deleteFromCart"
      >
        <img
          src="@/assets/img/cross.svg"
          alt="cross"
        >
      </div>
    </div>
  </div>
</template>

<script>

// import {mapGetters} from "vuex";

import Counter from '@/components/ui/Counter'
export default {
  name: 'DishBoxCart',
  components: { Counter },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      product: {}
    }
  },
  // computed: {
  //   ...mapGetters({
  //     categories: 'categories/getAll'
  //   }),
    // cost() {
    //  return this.num * this.dish.price
    // }
  // }
  async created () {
    this.product = Object.assign({}, this.item);
    // this.product.quantity = 1
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
    increaseNum() {
      this.$emit('increaseNum')
    },
    decreaseNum() {
      this.$emit('decreaseNum')
    }
  }
}
</script>

<style lang="scss" scoped>
.dish-mini-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  padding: 10px;
  margin: 20px 0;

  &:hover {
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 10%);
    transition: all .7s ease;
  }

  .dish-mini-box__left {
    display: flex;
    align-items: center;

    gap: 15px;

    .dish-mini-box__img {
      width: 70px;
      height: 70px;

      background: -webkit-linear-gradient(to bottom, #bdc3c7, rgba(197, 197, 197, 0.55));
      background: linear-gradient(to bottom, #bdc3c7, rgba(197, 197, 197, 0.55));
    }

    .dish-mini-box__title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.35;
    }
  }

  .dish-mini-box__right {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .dish-mini-box__counter {

    }

    .dish-mini-box__price {
      font-size: 16px;
      font-weight: 600;
    }

    .dish-mini-box__cross {
      img {
        width: 28px;
        height: 28px;
        cursor: pointer;
      }
    }
  }
}
</style>
