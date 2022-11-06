<template>
  <div class="main-container">
    <metainfo />
    <Header />
    <router-view class="router-view" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useMeta } from 'vue-meta'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  },
  setup() {
    useMeta({
      title: 'Foodie'
    })
  }
}

</script>

<style scoped>

</style>
