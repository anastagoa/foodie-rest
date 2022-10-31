<template>
  <header class="header">
    <div class="header__menu-burger">
      <img
        alt="menu"
        src="@/assets/img/menu-burger.svg"
        @mouseover="openSidebar"
      >
    </div>
    <router-link
      tag="a"
      to="/"
      class="header__logo"
    >
      <img
        alt="logo"
        src="@/assets/img/logo-dark.svg"
      >
    </router-link>

    <nav class="header__menu">
      <ul class="header__links">
        <router-link
          v-for="link in menuLinks"
          :key="link.id"
          tag="a"
          :to="link.path"
          class="header__link"
          :class="[link.path === currentPath ? 'header__link_active' : '']"
        >
          <li>{{ $t(link.title) }}</li>
        </router-link>
      </ul>
    </nav>

    <div
      class="header__authorization"
      @click="openAuthPopup"
    >
      <img
        class="header__login"
        alt="logo"
        src="@/assets/img/auth.svg"
      >
    </div>

    <div
      class="header__cart"
      @click="openCartPopup"
    >
      <div
        v-if="!emptyCart"
        class="cart__not-empty"
      >
        {{ itemsAmount }}
      </div>
      <div
        v-if="!emptyCart"
        class="cart__sum"
        :class="[!emptyCart ? 'cart__sum_visible' : '']"
      >
        <span> = </span>
        <span> &nbsp; </span>
        {{ total }}
        <span> &nbsp; </span>
        <span> ₽ </span>
      </div>
    </div>

    <LangSwitcher
      class="lang-switcher"
      :all-locales="allLocales"
      :current-lang="currentLang"
      @closeSidebar="closeSidebar"
      @setLang="setLang"
    />
    <Sidebar
      v-if="openedSidebar"
      @closeSidebar="closeSidebar"
    />

    <Popup
      v-if="authPopup"
      :title="`${$t('order.auth')}`"
      @closePopup="closeAuthPopup"
    >
      <Authorization />
    </Popup>
    <Popup
      v-if="cartPopup"
      :class="['shopping-cart-popup']"
      :title="`${$t('order.yourOrder')}:`"
      @closePopup="closeCartPopup"
    >
      <ShoppingCart />
    </Popup>
  </header>
</template>

<script>

import {mapGetters} from "vuex";

import LangSwitcher from '@/components/ui/LangSwitcher'
import Popup from '@/components/ui/Popup'
import Sidebar from '@/components/Sidebar'
import menuLinks from '@/mixins/menuLinks'
import Authorization from '@/components/Authorization'
import ShoppingCart from '@/components/ShoppingCart'

export default {
  name: 'Header',
  components: { ShoppingCart, Sidebar, LangSwitcher, Popup, Authorization },
  mixins: [ menuLinks ],
  data () {
    return {
      authPopup: false,
      openedSidebar: false,
      cartPopup: false
    }
  },
  computed: {
    ...mapGetters({
      cart: 'cart/getCart',
      total: 'cart/getTotal'
    }),
    currentLang () {
      return this.$root.$i18n.locale
    },
    allLocales() {
      return process.env.VUE_APP_I18N_SUPPORTED_LOCALES.split(',')
    },
    emptyCart() {
      return this.cart.length === 0
    },
    // totalSum() {
    //   let result = []
    //
    //   this.cart.forEach(item => {
    //     result.push(item.price * item.quantity)
    //   })
    //
    //   return result.reduce((sum, el) => {
    //     return sum + el
    //   })
    // },
    itemsAmount () {
      let result = []

      this.cart.forEach(item => {
        result.push(item.quantity)
      })

      return result.reduce((sum, el) => {
        return sum + el
      })
    }
  },
  methods: {
    openAuthPopup () {
      this.authPopup = true
    },
    closeAuthPopup () {
      this.authPopup = false
    },
    openCartPopup () {
      this.cartPopup = true
    },
    closeCartPopup () {
      this.cartPopup = false
    },
    openSidebar() {
      this.openedSidebar = true
    },
    closeSidebar() {
      this.openedSidebar = false
    },
    setLang(lang) {
      this.$root.$i18n.locale = lang
      this.$store.dispatch('lang/setCurrent', lang)
    }
  },
}

</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  //margin-bottom: 80px;
  padding: 0 10px;

  box-shadow: 0 0 8px 0 rgb(0 0 0 / 30%);
  background: white;

  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns:
    [menuStart] 60px [menuEnd] 10px
    [logoStart] 150px [logoEnd] 20px
    [navStart] minmax(100px, max-content) [navEnd] 1fr
    [authStart] 60px [authEnd] 120px
    [cartStart] 100px [cartEnd] 20px
    [langStart] 30px [langEnd] 45px;


  .header__menu-burger {
    grid-column: menuStart / menuEnd;

    img {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
  }

  .header__logo {
    grid-column: logoStart / logoEnd;

    img {
      width: 150px;
      height: 70px;
      cursor: pointer;
    }
  }

  .header__menu {
    grid-column: navStart / navEnd;

    .header__links {
      display: flex;
      align-items: center;
      gap: 0 25px;

      .header__link {
        font-size: 13px;
        font-weight: 600;
        list-style: none;
        color: black;
        text-transform: uppercase;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: all 0.7s ease-in-out;
        }
        &.header__link_active {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      }
    }
  }

  .header__authorization {
    display: flex;
    align-items: center;
    justify-content: center;

    grid-column: authStart / authEnd;

    .header__login {
      width: 27px;
      height: 27px;
      cursor: pointer;
    }
  }

  .header__cart {
    position: relative;

    background-image: url('../../src/assets/img/shopping-bag.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px;
    width: 55px;
    height: 55px;

    border-radius: 50%;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
    background-color: #FFFFFF;

    grid-column: cartStart / cartEnd;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      transition: all .4s ease;
    }
      .cart__not-empty {
        position: absolute;
        content: '';
        background-color: black;
        border-radius: 50%;
        right: -9px;
        bottom: -8px;
        width: 24px;
        height: 24px;
        font-size: 14px;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    .cart__sum {
      position: absolute;
      content: '';
      left: -110px;
      top: calc(50% - 14px);

      width: 100px;
      height: 34px;
      padding: 12px;
      background-color: black;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
      color: white;
      opacity: 0;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      &::before {
        position: absolute;
        content:'';
        top: calc(50% - 8px);
        right: -16%;

        border: 8px solid transparent;
        border-left-color: black;
      }

      &.cart__sum_visible {
        opacity: 1;
      }
    }
  }
  .lang-switcher {
    grid-column: langStart / langEnd;
  }
}

@media (max-width: 991px) {
  .header {
    position: relative;
    justify-content: space-between;

    grid-template-columns:
    [menuStart] minmax(20px, 40px) [menuEnd] 10px
    [logoStart] minmax(130px, 160px) [logoEnd] 20px
    [authStart] minmax(45px, 70px) [authEnd] 20px
    [langStart] minmax(20px, 40px) [langEnd] 10px;

    .header__logo {
      width: 120px;
    }

    .header__menu {
      display: none;
    }

    .header__cart {
      position: fixed;
      right: 20px;
      top: 100px;
      z-index: 10;
    }
  }
}

@media (max-width: 512px) {
  .header {
    grid-template-columns:
    [menuStart] minmax(20px, 30px) [menuEnd] 10px
    [logoStart] minmax(20px, 30px) [logoEnd] 40px
    [authStart] minmax(25px, 40px) [authEnd] 10px
    [langStart] minmax(20px, 40px) [langEnd] 10px;

    .header__logo {
      width: 100px;
    }
    .header__authorization {
      .header__login {
        width: 24px;
        height: 24px;
      }
    }
    .header__cart {
      background-size: 38px;
      width: 65px;
      height: 65px;
      .cart__not-empty {
        bottom: -12px;
        width: 30px;
        height: 30px;
        font-size: 15px;
      }
    }
  }
}

</style>
