<template>
  <div class="home">
    <div class="home__banner">
      <div class="home_banner-filter" />

      <div class="home__title">
        <div class="home__title-rest">
          {{ $t('main.restaurant') }}
        </div>
        <div class="home__title-home">
          {{ $t('main.home') }}
        </div>
      </div>

      <div
        class="home__arrow-cover"
        @click="scrollDown"
      >
        <img
          alt="arrow-down"
          src="@/assets/img/arrow-down-white.svg"
        >
      </div>
    </div>

    <div
      ref="scrollTopButton"
      class="home__arrow-up"
      @click="scrollToTop"
    >
      <img
        class="arrow-up"
        alt="arrow-up"
        src="@/assets/img/arrow-up.svg"
      >
    </div>

    <Info />

    <MenuNavbar />

    <Promo />
  </div>
</template>

<script>

import {mapGetters} from "vuex";
import Promo from './Promo'
import MenuNavbar from '@/components/ui/MenuNavbar'
import Info from '@/components/ui/Info'


export default {
  name: "Home",
  components: { Promo, MenuNavbar, Info },
  computed: {
    ...mapGetters({
      categories: 'categories/getAll',
      promos: 'promos/getAll'
    }),
  },
  created () {
    this.$store.dispatch('categories/loadAll')
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton;

      if (window.scrollY > 200) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollDown() {
      let pageHeight = window.innerHeight;
      window.scrollBy({top: pageHeight - 75, behavior: "smooth" });
      //@TODO check adaptive
    }
  },
}
</script>

<style lang="scss" scoped>

.home {
  width: 100%;
  height: 100%;
  position: relative;

  .home__banner {
    margin-bottom: 60px;

    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url('../src/assets/img/main-banner.png'); //https://unsplash.com/photos/1Qt-W4BGrgc
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    position: relative;

    .home_banner-filter {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.60), rgba(0,0,0,0.70));
    }

    .home__arrow-cover {
      position: absolute;
      z-index: 9;
      bottom: 25px;
      right: 0;
      left: 0;
      text-align: center;

      animation: bounce 2s ease infinite;

      @keyframes bounce {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(10px);
        }
        100% {
          transform: translateY(0);
        }
      }

      img {
        width: 30px;
        height: 30px;
      }
    }

    .home__title {
      position: absolute;
      top: 50%;
      text-align: center;
      margin: 0 auto;

      .home__title-rest {
        font-size: 64px;
        font-weight: 500;
        color: white;
        text-transform: uppercase;
      }

      .home__title-home {
        font-size: 40px;
        font-weight: 300;
        color: white;
        opacity: 0.5;
        text-transform: lowercase;
      }
    }
  }

  .home__arrow-up {
    position: fixed;
    bottom: 150px;
    right: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50%;
    border: 1px solid white;
    z-index: 99;
    cursor: pointer;
    opacity: 0;

    .arrow-up {
      width: 35px;
      height: 35px;
    }

    &.visible {
      opacity: 1;
    }
  }
}

@media(max-width: 991px) {
  .home {
    .home__banner {
      .home__title {
        .home__title-rest {
          font-size: 50px;
        }
        .home__title-home {
          font-size: 30px;
        }
      }
    }

    .home__arrow-up {
      bottom: 80px;
    }
  }
}

@media(max-width: 512px) {
  .home {
    .home__banner {
      .home__title {
        .home__title-rest {
          font-size: 40px;
        }
        .home__title-home {
          font-size: 20px;
        }
      }
    }
    .home__arrow-up {
      bottom: 30px;
      right: 30px;

      width: 40px;
      height: 40px;
    }
  }
}
</style>
