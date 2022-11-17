<template>
  <div
    class="dish-box"
    @click="openPopup($event)"
  >
    <div class="dish-box__img" />
    <div class="dish-box__content">
      <div class="dish-box__info">
        <div class="dish-box__title">
          {{ item.title }}
        </div>
        <div class="dish-box__weight">
          {{ item.weight }}
          {{ $t('dish.gram') }}
          /
          {{ item.kcal }}
          {{ $t('dish.kcal') }}
        </div>

        <div class="dish-box__amount">
          <div class="dish-box__price">
            {{ item.price }}
            <span> ₽ </span>
          </div>
          <div
            class="add-button"
            @click="addToCart(item)"
          />
        </div>
      </div>
    </div>

    <Popup
      v-if="openedPopup"
      @closePopup="closePopup"
      @addToCart="addToCart"
    >
      <DishInfo :dish="item" />
    </Popup>
  </div>
</template>

<script>

import Popup from '@/components/ui/Popup'
import DishInfo from '@/components/DishInfo'
import { ref, toRefs, watch  } from 'vue'

export default {
  name: 'DishBox',
  components: { DishInfo, Popup },
  props: {
    dish: {
      type: Object,
      required: true
    },
  },
  emits: ['addToCart'],
  setup(props, { emit }) {
    const openedPopup = ref(false)
    const { dish } = toRefs(props)
    const item = ref(Object.assign({}, dish.value))

    watch(dish, (newValue) => {
      item.value = Object.assign({}, newValue)
    })

    const closePopup = () => openedPopup.value = false

    const addToCart = () => emit('addToCart', item.value)

    const openPopup = (event) => {
      let addBtn = document.querySelectorAll('.add-button')

      openedPopup.value = !Array.from(addBtn).find(btn => {
        return btn === event.target
      })
    }

    return {
      openedPopup,
      item,
      openPopup,
      closePopup,
      addToCart
    }
  }
}
</script>

<style lang="scss" scoped>

.dish-box {
  display: grid;
  grid-template-columns: 100%;

  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  background-color: #FFFFFF;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 14px 0 rgb(0 0 0 / 30%);
    transition: all 0.2s linear 0s;
  }

  .dish-box__img {
    width: 100%;
    height: 180px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background: -webkit-linear-gradient(to bottom, #bdc3c7, rgba(197, 197, 197, 0.55));
    background: linear-gradient(to bottom, #bdc3c7, rgba(197, 197, 197, 0.55));
  }

  .dish-box__content {
    padding: 20px;

    .dish-box__info {
      .dish-box__title {
        margin-bottom: 10px;
        height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;

        color: #4f4f4f;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.3;
      }

      .dish-box__weight {
        margin-bottom: 15px;

        font-size: 14px;
        font-weight: 400;
        color: #9a9aa4;
      }
      .dish-box__amount {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-top: 10px;
        border-top: 1px solid #dbdbe1;

        .dish-box__price {
          font-size: 18px;
          font-weight: 500;
        }
        .add-button {
          position: relative;

          width: 33px;
          height: 33px;
          border: 1px solid #4f4f4f;
          border-radius: 8px;

          background: #4f4f4f;
          cursor: pointer;

          &::before {
            position: absolute;
            content: "";
            display: block;
            width: 12px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid #fff;
          }

          &::after {
            position: absolute;
            content: "";
            display: block;
            height: 12px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 1px solid #fff;
          }

          &:hover {
            background: transparent;
            transition: all .7s ease;

            &::before {
              border: 1px solid #4f4f4f;
            }

            &::after {
              border: 1px solid #4f4f4f;
            }
          }
        }
      }
    }
  }
}

</style>
