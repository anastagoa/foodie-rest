<template>
  <div class="promo-page">
    <div class="container">
      <div class="promo-page__title">
        Promo
      </div>

      <Spinner v-if="!promos.length"/>

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

import {mapGetters} from "vuex";
import PromoBox from '@/components/ui/PromoBox'
import { useMeta } from 'vue-meta'
import Spinner from '@/components/ui/Spinner'

export default {
  name: 'Promo',
  components: { Spinner, PromoBox },
  setup() {
    useMeta({
      title: 'Promo'
    })
  },
  computed: {
    ...mapGetters({
      promos: 'promos/getAll',
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
}

@media(max-width: 1199px) {
  .promo-page {
    .promo-page__promos {
      gap: 10px;
    }
  }
}

@media(max-width: 991px) {
  .promo-page {
    padding-top: 60px;
    .promo-page__promos {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }
}

@media(max-width: 512px) {
  .promo-page {
    .promo-page__promos {
      grid-template-columns: 100%;
      gap: 10px;
    }
  }
}

</style>
