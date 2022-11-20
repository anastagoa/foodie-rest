<template>
  <div class="dish-info">
    <div class="dish-info__img" />
    <div class="dish-info__content">
      <div class="dish-info__title">
        {{ item.title }}
      </div>
      <div class="dish-info__amount">
        <div class="dish-info__price">
          ${{ item.price }}
        </div>
        <CustomButton
          label="Add"
          class="counter-btn"
          @click="addToCart(item)"
        />
      </div>
      <div class="dish-info__weight">
        {{ item.weight }}
        g
        /
        {{ item.kcal }}
        kcal
      </div>
      <div class="dish-info__ingredients">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script>

import CustomButton from '@/components/ui/CustomButton'

export default {
  name: 'DishInfo',
  components: { CustomButton },
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      item: {}
    }
  },
  mounted () {
    this.item = Object.assign({}, this.dish);
  },
  methods: {
    addToCart (dish) {
      this.$store.dispatch('cart/addToCart', dish)
    },
  },
}

</script>

<style lang="scss" scoped>

.dish-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 450px;
  gap: 0 20px;

  overflow: hidden;

  .dish-info__img {
    width: 100%;
    height: 100%;

    background: -webkit-linear-gradient(to bottom, #bdc3c7, rgba(197, 197, 197, 0.55));
    background: linear-gradient(to bottom, #bdc3c7, rgba(197, 197, 197, 0.55));
  }

  .dish-info__content {

    .dish-info__title {
      margin-bottom: 10px;

      font-size: 24px;
      font-weight: 500;
      line-height: 1.35;
    }
    .dish-info__weight {
      margin-bottom: 15px;

      font-size: 16px;
      font-weight: 300;
      color: #4f4f4f
    }
    .dish-info__ingredients {
      margin-bottom: 12px;

      color: #222222;
      font-size: 16px;
      line-height: 1.35;
      font-weight: 300;

      max-height: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 9;
      -webkit-box-orient: vertical;
    }

    .dish-info__amount {
      display: grid;
      grid-template-columns: calc(70% - 5px) calc(30% - 5px);
      gap: 0 10px;

      align-items: center;

      margin-bottom: 20px;
      padding: 20px 5px;
      border-top: 1px solid #dbdbe1;
      border-bottom: 1px solid #dbdbe1;

      .dish-info__price {
        font-size: 20px;
        font-weight: 500;
      }
      .counter-btn {
        width: 100%;
      }
    }
  }
}

@media (max-width: 1199px) {
  .dish-info {
    grid-template-rows: 400px;
  }
}

@media (max-width: 991px) {
  .dish-info {
    grid-template-columns: 100%;
    grid-template-rows: 350px 1fr;
    gap: 20px 0;

    .dish-info__content {
      .dish-info__ingredients {
        max-height: 150px;
        -webkit-line-clamp: 6;
      }
      .dish-info__amount {
        padding: 15px 5px;
      }
    }
  }
}
@media (max-width: 512px) {
  .dish-info {
    grid-template-rows: 250px 1fr;
  }
}
</style>
