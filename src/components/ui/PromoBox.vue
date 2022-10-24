<template>
  <div class="promo-box">
    <div class="promo-box__img" />
    <div class="promo-box__content">
      <div class="promo-box__title">
        {{ promo.title }}
      </div>
      <div class="promo-box__description">
        {{ promo.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoBox',
  props: {
    promo: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>

.promo-box {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
  cursor: pointer;

  .promo-box__img {
    width: 100%;
    height: 150px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-image: url('../../assets/img/dish.svg');
    background-repeat: repeat;
    background-position: 100% 100%;
    background-size: 10px;
    //background-image: url('../../../src/assets/img/main-banner.jpg');
    //background-repeat: no-repeat;
    //background-position: center center;
    //background-size: cover;
  }

  .promo-box__content {
    padding: 15px;

    .promo-box__title {
      margin-bottom: 10px;

      font-size: 22px;
      font-weight: 500;
      line-height: 1.35;
    }

    .promo-box__description {
      font-size: 16px;
      line-height: 1.35;
      font-weight: 300;

      max-height: 100px;
      height: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
