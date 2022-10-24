<template>
  <div class="popup">
    <div class="popup__box">
      <div class="popup__top-block">
        <div class="popup__top-title">
          {{ title }}
        </div>
        <div
          class="popup__top-cross"
          @click.stop="closePopup"
        >
          <img
            src="@/assets/img/cross.svg"
            alt="cross"
            class="popup__cross-img"
          >
        </div>
      </div>
      <div class="popup__content-block">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null
    },
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
  }
}
</script>

<style lang="scss" scoped>

.popup {
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .9);

  .popup__box {
    position: relative;

    //width: 620px;
    width: 70%;
    min-height: 430px;
    padding: 30px 10px;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    background-color: #FFFFFF;
    opacity: 1;

    .popup__top-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      margin-bottom: 20px;
      padding: 0 30px;

      .popup__top-title {
        margin: 0;
        color: #040608;
        opacity: 1;
        font-weight: 700;
        font-size: 24px;
      }

      .popup__top-cross {
        .popup__cross-img {
          width: 35px;
          height: 35px;
          cursor: pointer;
        }
      }
    }

    .popup__content-block {
      padding: 0 30px;
      margin-bottom: 20px;
      height: 100%;
    }
  }

  &.shopping-cart-popup {
    .popup__box {
      margin: 65px auto 0 auto;
      width: 45%;
      height: 100%;
      border-radius: 0;
      overflow-y: scroll;
    }
  }
}

@media (max-width: 768px) {
  .popup {
    .popup__box {
      width: 490px;
    }
  }
}

@media (max-width: 512px) {
  .popup {
    .popup__box {
      width: 90%;
      max-height: 500px;
      padding: 20px 0;

      overflow: hidden;

      .popup__top-block {
        margin-bottom: 5px;
        padding: 0 20px;

        .popup__top-title {
          font-size: 20px;
        }
      }

      .popup__content-block {
        padding: 0 20px 10px 20px;
      }
    }
  }
}

</style>
