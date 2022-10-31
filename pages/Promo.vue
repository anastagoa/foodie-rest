<template>
  <div
    class="promo-page"
    :class="[{home : $route.path === '/'}]"
  >
    <div class="container">
      <div class="promo-page__title">
        {{ $t('main.promo') }}
      </div>
      <swiper
        v-if="$route.path === '/'"
        :modules="modules"
        :navigation="{nextEl: null, prevEl: null}"
        loop
        :breakpoints="breakpoints"
        :autoplay="{ infinite: true }"
      >
        <swiper-slide
          v-for="promo in promos"
          :key="promo.id"
        >
          <div class="swiper-wrapper">
            <promo-box :promo="promo" />
          </div>
        </swiper-slide>
      </swiper>

      <div
        v-else
        class="promo-page__promos"
      >
        <div
          v-for="promo in promos"
          :key="promo.id"
        >
          <promo-box :promo="promo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';

import {mapGetters} from "vuex";
import PromoBox from '@/components/ui/PromoBox'


export default {
  name: 'Promo',
  components: { PromoBox, Swiper, SwiperSlide },
  setup() {
    // const onSwiper = (swiper) => {
    //   console.log(swiper);
    // };
    return {
      // onSwiper,
      breakpoints: {
        300: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          centeredSlides: true,
          initialSlide: 2
        },
        513: {
          slidesPerView: 2,
          spaceBetween: 10,
          initialSlide: 1
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
          initialSlide: 1
        }
      },
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
  computed: {
    ...mapGetters({
      promos: 'promos/getAll'
    }),
  },
  created () {
    this.$store.dispatch('promos/loadAll')
  }
}
</script>

<style lang="scss" scoped>

.promo-page {
  margin-bottom: 30px;
  padding: 120px 0 50px 0;

  .promo-page__title {
    margin-bottom: 20px;

    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    color: #4f4f4f;
  }

  .promo-page__promos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  &.home {
    padding: 20px 0;
    .promo-page__title {
      display: none;
    }
  }
}

@media(max-width: 512px) {
  .container {
    padding: 0;
  }
}

</style>
