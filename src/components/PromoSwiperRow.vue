<template>
  <div class="promo-swiper">
    <div class="container">
      <swiper
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
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";
import PromoBox from '@/components/ui/PromoBox'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';

export default {
  name: 'PromoSwiperRow',
  components: { PromoBox, Swiper, SwiperSlide },
  setup() {
    return {
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

.promo-swiper {
  margin-bottom: 40px;
}

@media(max-width: 512px) {
  .promo-swiper {
    margin-bottom: 40px;
    .container {
      padding: 0;
    }
  }
}
</style>
