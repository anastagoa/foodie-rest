<template>
  <div class="container">
    <div class="main-info">
      <div class="main-info__item">
        <img
          class="main-info__item-img"
          alt="item-img"
          src="@/assets/img/fork.svg"
        >
        <div class="main-info__item-text">
          {{ $t('order.accept') }}
          <br>
          {{ $t('order.acceptTime') }}
        </div>
      </div>
      <div class="main-info__item">
        <img
          class="main-info__item-img"
          alt="item-img"
          src="@/assets/img/clock.svg"
        >
        <div class="main-info__item-text">
          {{ $t('order.delivery') }}
          <br>
          {{ $t('order.deliveryTime') }}
        </div>
      </div>
      <div class="main-info__item">
        <img
          class="main-info__item-img"
          alt="item-img"
          src="@/assets/img/smartphone.svg"
        >
        <div class="main-info__item-text">
          {{ $t('main.contacts') }}:
          <br>
          +7 (495) XXX-XX-XX
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style lang="scss" scoped>

.main-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;

  .main-info__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    .main-info__item-img {
      width: 60px;
      height: 60px;
    }

    .main-info__item-text {
      text-align: center;
      font-size: 20px;
      font-weight: 200;
    }
  }
}
</style>
