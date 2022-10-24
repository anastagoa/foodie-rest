<template>
  <div
    class="sidebar"
    @mouseleave="closeSidebar"
  >
    <div class="sidebar__top">
      <div class="sidebar__title">
        {{ $t('menu.mainMenu') }}
      </div>
      <ul
        v-for="item in menuItems"
        :key="item.id"
        class="sidebar__list"
      >
        <li
          class="sidebar__item"
          :class="[activeItem(item.url) ? 'sidebar__item_active' : '']"
          @click="selectCategory(item.id)"
        >
          {{ $t(item.name) }}
        </li>
      </ul>
    </div>

    <div class="sidebar__bottom">
      <div class="sidebar__tel">
        +7 (495) XXX-XX-XX
      </div>
      <div class="sidebar__time">
        <div class="sidebar__time-block">
          <div class="sidebar__time-text">
            {{ $t('order.accept') }}
          </div>
          <div class="sidebar__time-info">
            {{ $t('order.acceptTime') }}
          </div>
        </div>
        <div class="sidebar__time-block">
          <div class="sidebar__time-text">
            {{ $t('order.delivery') }}
          </div>
          <div class="sidebar__time-info">
            {{ $t('order.deliveryTime') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import menuItems from '@/mixins/menuItems.js'

export default {
  name: 'Sidebar',
  mixins: [ menuItems ],
  computed: {
    currentPath() {
      return this.$route.path
    }
  },
  methods: {
    activeItem(url) {
      return this.currentPath === '/menu' + `${url}`
    },
    selectCategory (id) {
      this.$emit('scrollToElement', id)
      this.$emit('closeSidebar')
    },
    closeSidebar() {
      this.$emit('closeSidebar')
    },
  }
}
</script>

<style lang="scss" scoped>

.sidebar {
  position: fixed;
  //left: -300px;
  //left: 300px;
  left: 0;
  top: 74px;
  height: 100%;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px 0;

  box-shadow: 4px 0 5px -2px #888;
  background-color: white;
  transition: all .7s ease;
  padding: 35px 25px 100px 25px;
  overflow-y: scroll;
  z-index: 4;
  animation: slide 1s ease;

  @keyframes slide {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(0);
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .sidebar__top {
    .sidebar__title {
      margin-bottom: 25px;

      color: #6b6a6a;
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .sidebar__list {
      padding: 0;
      margin: 0;

      &:last-of-type {
        border-bottom: 1px solid rgba(183, 182, 182, 0.69);
      }

      .sidebar__item {
        padding: 15px 0;
        border-top: 1px solid rgba(183, 182, 182, 0.69);

        font-size: 16px;
        font-weight: 400;
        list-style: none;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          color: #f3be19;

          //text-decoration: underline;
          //text-underline-offset: 4px;
          transition: all .7s ease;
        }

        &.sidebar__item_active {
          color: #f3be19;

          //text-decoration: underline;
          //text-underline-offset: 4px;
        }
      }
    }
  }

  .sidebar__bottom {
    .sidebar__tel {
      margin-bottom: 10px;

      font-size: 16px;
      font-weight: 500;
    }
    .sidebar__time {
      .sidebar__time-block {
        margin-bottom: 6px;

        .sidebar__time-text {
          margin-bottom: 5px;

          font-size: 14px;
          font-weight: 300;
          opacity: 0.7;
        }
        .sidebar__time-info {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
}

</style>
