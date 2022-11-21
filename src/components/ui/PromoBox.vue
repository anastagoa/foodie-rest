<template>
  <div class="promo-box">
    <div class="promo-box__layer">
      <div
        class="promo-box__img"
        :style="{ backgroundImage: `url(${currentImage()})` }"
      />
      <div class="promo-box__content">
        <div class="promo-box__title">
          {{ promo.title }}
        </div>
        <div class="promo-box__description">
          {{ promo.description }}
        </div>
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
    }
  },
  methods: {
    currentImage () {
      return require(`../../assets/img/promos/${this.promo.img}`)
    }
  }
}
</script>

<style lang="scss" scoped>

.promo-box {
  width: 100%;
  height: 250px;

  text-align: center;
  overflow: hidden;
  cursor: pointer;

  .promo-box__layer {
    position: relative;
    z-index: 1;
    height: 250px;
    width: 100%;
    background: rgba(5, 5, 5, 0.9);

    .promo-box__img {
      position: relative;
      width: 100%;
      height: 100%;
      opacity: 0.3;

      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }

    .promo-box__content {
      position: absolute;
      top: 40%;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 0 20px;

      color: #fff;
      text-transform: uppercase;
      text-align: center;

      .promo-box__title {
        font-size: 20px;
        font-weight: 300;
      }
      .promo-box__description {
        font-size: 15px;
        opacity: 0;
      }
    }
  }

  &:hover {
    .promo-box__layer {
      .promo-box__img {
        opacity: 0.1;
      }

      .promo-box__content {
        .promo-box__title {
          transform: translate3d(0,-20px,0);
          transition: all 0.7s ease;
        }
        .promo-box__description {
          transition: all 0.7s ease;
          opacity: 0.7;
        }
      }
    }
  }
}

</style>
