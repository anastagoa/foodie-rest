<template>
  <div class="menu-category">
    <MenuNavbar />

    <Spinner v-if="!category"/>

    <div v-else>
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

import MenuNavbar from '@/components/ui/MenuNavbar'
import DishBox from '@/components/ui/DishBox'
import Spinner from '@/components/ui/Spinner'
import { useMeta } from 'vue-meta'

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'MenuCategory',
  components: { MenuNavbar, DishBox, Spinner },
  setup() {
    useMeta({
      title: 'Menu'
    })

    const store = useStore()
    const route = useRoute()
    const currentPathId = computed(() => { return route.params.id })
    const cart = computed(() => { return store.state.cart })
    const categories = computed(() => { return store.state.categories.all })
    const lang = computed(() => { return store.state.lang.current })
    const currentCategories = computed(() => { return categories.value.filter(item => item.lang === lang.value) })

    const category = computed(() => {
      return currentCategories.value.find(item => item.id === currentPathId.value)
    })

    const loadCategories = () => {
      store.dispatch('categories/loadAll')
    }
    loadCategories()

    const addToCart = (dish) => store.dispatch('cart/addToCart', dish)

    return {
      currentPathId,
      categories,
      category,
      cart,
      lang,
      currentCategories,
      loadCategories,
      addToCart
    }
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
    padding: 25px;
    .menu-category__dishes {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px
    }
  }
}

@media(max-width: 600px) {
  .menu-category {
    padding: 30px 15px;
    .menu-category__dishes {
      grid-template-columns: 100%;
    }
  }
}
</style>
