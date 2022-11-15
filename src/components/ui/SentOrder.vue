<template>
  <div class="sent-order">
    <div class="sent-order__img">
      <img
        alt="done"
        src="@/assets/img/done.svg"
      >
    </div>
    <div class="sent-order__message">
      <div class="sent-order__title">
        {{ $t('order.thanks') }}
      </div>
      <div class="sent-order__text">
        {{ $t('order.contact') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SentOrder'
}
</script>

<style lang="scss" scoped>
.sent-order {
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .sent-order__img {
    margin-bottom: 15px;

    img {
      width: 50px;
      height: 50px;
    }
  }
  .sent-order__message {
    text-align: center;

    .sent-order__title {
      margin-bottom: 15px;

      font-size: 25px;
      font-weight: 600;
      color: #4f4f4f;
    }
    .sent-order__text {
      font-size: 20px;
      font-weight: 400;
      color: #4f4f4f;
      opacity: 0.7;
    }
  }
}
</style>
