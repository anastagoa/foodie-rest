<template>
  <div
    class="sidebar"
    @mouseleave="closeSidebar"
  >
    <div class="sidebar__top">
      <div class="sidebar__cross">
        <img
          alt="close-menu"
          src="@/assets/img/cross.svg"
          @click="closeSidebar"
        >
      </div>

      <div class="sidebar__title">
        {{ $t('menu.mainMenu') }}
      </div>
      <ul class="sidebar__list">
        <li
          v-for="item in menuItems"
          :key="item.id"
          class="sidebar__item"
          :class="[activeItem(item.id) ? 'sidebar__item_active' : '']"
          @click="selectCategory(item.id)"
        >
          {{ $t(item.name) }}
        </li>
      </ul>

      <div class="sidebar__title">
        {{ $t('main.info') }}
      </div>

      <router-link
        v-for="link in menuLinks"
        :key="link.id"
        tag="a"
        :to="link.path"
        class="sidebar__list"
      >
        <li
          class="sidebar__item"
          :class="[link.path === currentPath ? 'sidebar__item_active' : '']"
        >
          {{ $t(link.title) }}
        </li>
      </router-link>
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
import menuLinks from '@/mixins/menuLinks'

export default {
  name: 'Sidebar',
  mixins: [ menuItems, menuLinks ],
  computed: {
    currentPath() {
      return this.$route.path
    }
  },
  methods: {
    activeItem(id) {
      return this.currentPath === '/menu/' + `${id}`
    },
    selectCategory (id) {
      this.$router.replace('/menu/' + `${id}`)
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
  padding: 20px 25px 100px 25px;
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
    .sidebar__cross {
      text-align: end;
      margin-bottom: 10px;

      img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }

    .sidebar__title {
      margin-bottom: 5px;
      padding-bottom: 10px;

      color: #6b6a6a;
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .sidebar__list {
      display: flex;
      flex-direction: column;
      padding: 0;

      .sidebar__item {
        padding: 7px 0;

        font-size: 14px;
        font-weight: 400;
        list-style: none;
        text-decoration: none;
        text-transform: uppercase;
        color: #6b6a6a;
        cursor: pointer;

        background-image: linear-gradient(
            to right,
            #c5ccd7,
            #c5ccd7 50%,
            #000 50%
        );
        background-size: 200% 100%;
        background-position: -100%;
        display: inline-block;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;

        &:before {
          position: absolute;
          content: '';
          background: #c5ccd7;
          display: block;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 2px;
          transition: all 0.5s ease-in-out;
        }

        &:hover {
          background-position: 0;

          &:before {
            width: 80%;
          }
        }

        &.sidebar__item_active {
          background-position: 0;

          &:before {
            width: 0;
          }
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

@media(max-width: 512px) {
  .sidebar {
    width: 100%;
  }
}
</style>
