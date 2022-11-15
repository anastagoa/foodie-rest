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
        :class="[showTotal ? 'cart__sum_visible' : '']"
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
      v-if="cartPopup"
      :class="['shopping-cart-popup']"
      :title="`${$t('order.yourOrder')}:`"
      @closePopup="closeCartPopup"
    >
      <ShoppingCart @closeCartPopup="closeSentCartPopup" />
    </Popup>

    <Popup
      v-if="sentOrder"
      @closePopup="closeSentPopup"
    >
      <SentOrder/>
    </Popup>
  </header>
</template>

<script>

import {mapGetters} from "vuex";

import LangSwitcher from '@/components/ui/LangSwitcher'
import Popup from '@/components/ui/Popup'
import Sidebar from '@/components/Sidebar'
import menuLinks from '@/mixins/menuLinks'
import ShoppingCart from '@/components/ShoppingCart'
import SentOrder from '@/components/ui/SentOrder'

export default {
  name: 'Header',
  components: { SentOrder, ShoppingCart, Sidebar, LangSwitcher, Popup },
  mixins: [ menuLinks ],
  data () {
    return {
      openedSidebar: false,
      cartPopup: false,
      showTotal: false,
      sentOrder: false
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
    itemsAmount () {
      if (!this.emptyCart) {
        let result = []

        this.cart.forEach(item => {
          result.push(item.quantity)
        })

        return result.reduce((sum, el) => {
          return sum + el
        })
      } else {
       return 0
      }
    }
  },
  watch: {
    total () {
      this.showTotal = true

      setTimeout(() => {
        this.showTotal = false
      }, 1000)
    }
  },
  methods: {
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
    },
    openSentPopup() {
      this.sentOrder = true
    },
    closeSentCartPopup() {
      this.cartPopup = false
      this.openSentPopup()
    },
    closeSentPopup() {
      this.sentOrder = false
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
    width: 150px;

    img {
      width: 100%;
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

  .header__cart {
    position: relative;

    background-image: url('../../src/assets/img/shopping-bag.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px;
    width: 55px;
    height: 55px;
    z-index: 4;

    border-radius: 50%;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
    background-color: #FFFFFF;

    grid-column: cartStart / cartEnd;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      transition: all .4s ease;

      .cart__sum {
        transition: all .4s ease;
        opacity: 1;
      }
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
      transition: all .4s ease;

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
        transition: all .4s ease;
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

    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__menu {
      display: none;
    }

    .header__cart {
      position: fixed;
      right: 20px;
      top: 150px;
    }
  }
}

@media (max-width: 512px) {
  .header {

    .header__logo {
      width: 120px;
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
