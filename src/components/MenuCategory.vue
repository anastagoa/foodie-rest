<template>
  <div class="menu-category">
    <MenuNavbar />

    <div v-if="category">
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
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import MenuNavbar from '@/components/ui/MenuNavbar'
import DishBox from '@/components/ui/DishBox'

export default {
  name: 'DishCategory',
  components: { MenuNavbar,
    DishBox
  },
  computed: {
    ...mapGetters({
      cart: 'cart/getCart',
      categories: 'categories/getAll'
    }),
    currentPathId() {
      return this.$route.params.id
    },
    category() {
      return this.categories.find(item => item.id === this.currentPathId)
    }
  },
   created() {
    this.$store.dispatch('categories/loadAll')
  },
  methods: {
    addToCart(dish) {
      this.$store.dispatch('cart/addToCart', dish)
    },
  },
}

</script>

<style lang="scss" scoped>

.menu-category {
  padding: 100px 35px;
  margin-bottom: 30px;

  .menu-category__title {
    margin-bottom: 20px;

    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    color: #4f4f4f;
  }
  .menu-category__dishes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px
  }
}

@media(max-width: 1199px) {
  .menu-category {
    .menu-category__dishes {
      grid-template-columns: repeat(3, 1fr);
      gap: 25px
    }
  }
}

@media(max-width: 991px) {
  .menu-category {
    padding: 0 25px;
    .menu-category__dishes {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px
    }
  }
}

@media(max-width: 600px) {
  .menu-category {
    padding: 0 15px;
    .menu-category__dishes {
      grid-template-columns: 100%;
    }
  }
}
</style>
