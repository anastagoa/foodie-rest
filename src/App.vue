<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>

import MainLayout from '@/layouts/MainLayout.vue'
import '@/assets/css/styles.scss'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: { MainLayout },
  setup() {
    const route = useRoute()
    const layout = computed(() => {  return (route.meta.layout || 'main') + 'Layout' })

    return {
      layout
    }
  },
}

</script>

