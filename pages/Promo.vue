<template>
  <div class="container">
    <div class="promo-page">
      <div class="promo-page__title">
        {{ $t('main.promo') }}
      </div>
      <div class="promo-page__promos">
        <div
          v-for="promo in promos"
          :key="promo.id"
          class="promo-page__promo"
        >
          <promo-box :promo="promo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";
import PromoBox from '@/components/ui/PromoBox'

export default {
  name: 'Promo',
  components: { PromoBox },
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
  //margin-top: 80px;

  .promo-page__title {
    margin-bottom: 20px;

    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    color: #878787;
  }

  .promo-page__promos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
</style>
