<template>
  <div class="main-container">
    <Header />
    <router-view class="router-view" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  }
}

</script>

<style scoped>

</style>
