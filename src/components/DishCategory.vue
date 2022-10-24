<template>
  <div class="menu-category">
    <div class="menu-category__title">
      {{ category.title }}
    </div>
    <div class="menu-category__dishes">
      <div
        v-for="(dish, key) in category.dishes"
        :key="key"
        class="menu-category__dish"
      >
        <dish-box
          :dish="dish"
          @addToCart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

import DishBox from '@/components/ui/DishBox'

export default {
  name: 'DishCategory',
  components: { DishBox },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      cart: 'cart/getCart'
    }),
  },
  methods: {
    addToCart(dish) {
      this.$store.dispatch('cart/addToCart', dish)
    },
    // isInCart(dish) {
    //   this.cart.map(item => {
    //     return item.title === dish.title;
    //   })
    // }
  },
}

</script>

<style lang="scss" scoped>

.menu-category {
  padding: 0 35px;
  margin-bottom: 30px;

  .menu-category__title {
    margin-bottom: 20px;

    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    color: #4f4f4f;
    //font-family: Roboto Arial sans-serif;
  }
  .menu-category__dishes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px
  }
}
</style>
