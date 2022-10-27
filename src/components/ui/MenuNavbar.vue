<template>
  <div class="container">
    <div class="menu-navbar">
      <ul
        class="menu-navbar__list"
      >
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
    </div>
  </div>
</template>

<script>

import menuItems from '@/mixins/menuItems.js'

export default {
  name: 'MainMenu',
  mixins: [ menuItems ],
  computed: {
    currentPath() {
      return this.$route.path
    }
  },
  methods: {
    activeItem (id) {
      return this.currentPath === '/menu/' + `${id}`
    },
    selectCategory (id) {
      this.$router.replace('/menu/' + `${id}`)
      this.$emit('closeSidebar')
    },
  }
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
    //gap: 5px;

    padding: 0 10px;
    margin: 0;

    .menu-navbar__item {
      padding: 22px 10px;
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

</style>
