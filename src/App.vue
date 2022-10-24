<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>

import MainLayout from '@/layouts/MainLayout.vue'
import '@/assets/css/styles.scss'

export default {
  components: { MainLayout },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'main') + 'Layout'
    },
  }
}

</script>
<style lang="scss">

</style>
