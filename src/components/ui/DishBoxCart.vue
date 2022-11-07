<template>
  <div class="dish-mini-box">
    <div class="dish-mini-box__img" />
    <div class="dish-mini-box__content">
      <div class="dish-mini-box__title">
        {{ product.title }}
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
            src="@/assets/img/delete.svg"
            alt="cross"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
  created () {
    this.product = Object.assign({}, this.item);
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
  grid-template-columns: calc(10% - 10px) calc(90% - 10px);
  align-items: center;
  gap: 20px;

  &:hover {
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 10%);
    transition: all .7s ease;
  }

  .dish-mini-box__img {
    width: 70px;
    height: 70px;

    background: -webkit-linear-gradient(to bottom, #bdc3c7, rgba(197, 197, 197, 0.55));
    background: linear-gradient(to bottom, #bdc3c7, rgba(197, 197, 197, 0.55));
  }

  .dish-mini-box__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    grid-template-areas: 'title counter';
    gap: 20px;

    padding: 10px;
    margin: 20px 0;

    .dish-mini-box__title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.35;
      grid-area: title;
    }
  }

  .dish-mini-box__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: counter;

    .dish-mini-box__price {
      font-size: 16px;
      font-weight: 600;
    }

    .dish-mini-box__cross {
      img {
        width: 25px;
        height: 25px;
        cursor: pointer;
      }
    }
  }
}

@media(max-width: 512px) {
  .dish-mini-box {
    margin: 5px 0;
    grid-template-columns: calc(20% - 5px) calc(80% - 5px);
    gap: 10px;

    .dish-mini-box__content {
      grid-template-columns: 100%;
      grid-template-areas: 'title' 'counter';
      gap: 5px;
      //
      //padding: 10px;
      margin: 10px 0;
    }
  }
}

@media(max-width: 370px) {
  .dish-mini-box {
    margin: 5px 0;
    grid-template-columns: calc(25% - 5px) calc(75% - 5px);
    gap: 10px;

    .dish-mini-box__content {
      grid-template-columns: 100%;
      grid-template-areas: 'title' 'counter';
      gap: 5px;

      margin: 10px 0;
      .dish-mini-box__title {
        font-size: 16px;
        line-height: 16px;
      }
    }
  }
}
</style>
