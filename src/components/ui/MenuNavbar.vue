<template>
  <div class="container">
    <div class="menu-navbar">
      <ul class="menu-navbar__list">
        <li
          v-for="item in menuItems"
          :key="item.id"
          class="menu-navbar__item"
          :class="[activeItem(item.id) ? 'menu-navbar__item_active' : '']"
          @click="selectCategory(item.id)"
        >
          {{ $t(item.name) }}
        </li>
      </ul>

      <swiper
        class="menu-navbar__list_mobile"
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="10"
        :navigation="{nextEl: null, prevEl: null}"
      >
        <swiper-slide
          v-for="item in menuItems"
          :key="item.id"
          class="menu-navbar__item_mobile"
          :class="[activeItem(item.id) ? 'menu-navbar__item_active' : '']"
          @click="selectCategory(item.id)"
        >
          {{ $t(item.name) }}
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

import menuItems from '@/mixins/menuItems.js'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';

import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'MainMenu',
  components: { Swiper, SwiperSlide },
  mixins: [ menuItems ],
  emits: ['closeSidebar'],
  setup(_, { emit }) {
    const router = useRouter()
    const route = useRoute()

    const currentPath = computed(() => { return route.path })

    const selectCategory = (id) => {
      router.replace('/menu/' + `${id}`)
      emit('closeSidebar')
    }

    const activeItem = (id) => {
      return currentPath.value === '/menu/' + `${id}`
    }

    return {
      currentPath,
      activeItem,
      selectCategory,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
}
</script>

<style lang="scss" scoped>
.menu-navbar {
  margin-bottom: 30px;

  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 35px rgb(0 0 0 / 8%);

  .menu-navbar__list {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;
    margin: 0;

    .menu-navbar__item {
      padding: 22px 10px;
      font-size: 14px;
      line-height: 14px;
      font-weight: 600;
      color: #c5ccd7;
      list-style: none;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #878787;
        transition: all 0.3s ease;
      }

      &.menu-navbar__item_active {
        color: #4f4f4f;
      }
    }
  }
  .menu-navbar__list_mobile {
    display: none;
  }
}

@media(max-width: 991px) {
  .container {
    padding: 0;
    .menu-navbar {
      border-radius: 0;
      .menu-navbar__list {
        display: none;
      }

      .menu-navbar__list_mobile {
        display: flex;
        align-items: center;

        .menu-navbar__item_mobile {
          width: max-content;
          padding: 22px 15px;
          font-size: 14px;
          font-weight: 600;
          color: #c5ccd7;
          list-style: none;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            color: #878787;
            transition: all 0.3s ease;
          }

          &.menu-navbar__item_active {
            color: #4f4f4f;
          }
        }
      }
    }
  }
}
</style>
