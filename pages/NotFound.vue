<template>
  <div class="not-found">
    <div class="not-found__text">
      Page not found
    </div>

    <router-link
      tag="button"
      to="/"
      class="not-found__btn"
    >
      <CustomButton
        label="Go to the home page"
        class="counter-btn"
      />
    </router-link>
  </div>
</template>

<script>

import CustomButton from '@/components/ui/CustomButton.vue'
export default {
  name: 'NotFound',
  components: { CustomButton}
}
</script>

<style lang="scss" scoped>

.not-found {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  padding: 100px 0;

  .not-found__text {
    font-size: 20px;
    font-weight: 400;
  }
  .not-found__btn {

  }
}
</style>
