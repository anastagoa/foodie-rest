<template>
  <div class="about-page">
    <div class="container">
      <div class="about-page__content">
        <div class="about-page__info">
          <div class="about-page__info-title">
            About the restaurant
          </div>
          <div class="about-page__info-text">
            <p class="about-page__info-text-p">
              Foodie is an author's cuisine restaurant delivery. You have a great opportunity to taste gourmet restaurant dishes in your home. Dishes are created depending on the seasonality of local products and the inspiration of our chef. Special attention is paid to creativity, high-quality products and aesthetics.
            </p>

            <p class="about-page__info-text-p">
              Foodie will give you a new gastronomic experience.
            </p>

            <router-link
              tag="button"
              to="/menu/cold-appetizers"
              class="about-page__btn-wrapper"
            >
              <CustomButton
                label="Menu"
                class="about-page__btn"
              />
            </router-link>
          </div>
        </div>

        <div class="about-page__img-wrapper">
          <div class="about-page__img" />
          <div class="about-page__img" />
        </div>
      </div>
    </div>

    <div class="about-page__attachment" />

    <Info />
  </div>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton'
import Info from '@/components/ui/Info'
import { useMeta } from 'vue-meta'

export default {
  name: 'About',
  components: { Info, CustomButton },
  setup() {
    useMeta({
      title: 'About'
    })
  }
}
</script>

<style lang="scss" scoped>

.about-page {
  .about-page__content {
    position: relative;
    margin: 0 auto 100px auto;
    padding: 120px 0;
    max-width: 1200px;

    .about-page__info {
      padding: 56px 110px 48px 48px;
      margin-bottom: 15px;

      width: 580px;
      background-color: #FFFFFF;
      box-shadow: 0 0 8px 0 rgb(0 0 0 / 5%);
      text-align: center;

      .about-page__info-title {
        margin-bottom: 40px;

        font-size: 33px;
        line-height: 1;
        font-weight: 600;
        color: #304246;
        text-transform: uppercase;
      }

      .about-page__info-text {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.2rem;
        color: #304246;
        text-align: justify;

        .about-page__info-text-p {
          &:last-of-type {
            margin-bottom: 35px;
          }
        }
      }

      .about-page__btn-wrapper {
        display: block;
        text-align: center;

        .about-page__btn {
          width: 30%;
        }
      }
    }

    .about-page__img-wrapper {
      position: absolute;

      bottom: -20px;
      right: 40px;
      display: flex;
      gap: 30px;

      .about-page__img {
        width: 310px;
        height: 490px;
        box-shadow: 0 0 8px 0 rgb(0 0 0 / 5%);
        opacity: 1;

        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;

        &:hover {
          opacity: 0.8;
          transition: all .3s ease;
        }

        &:first-of-type {
          background-image: url('../src/assets/img/about-1.jpg'); //https://unsplash.com/photos/vLv9bQzykIA
        }

        &:last-of-type {
          background-image: url('../src/assets/img/about-2.jpg'); //https://unsplash.com/photos/kP8QyKwd1r0
        }
      }
    }
  }

  .about-page__attachment {
    width: 100%;
    height: 450px;
    margin-bottom: 70px;

    background-image: url('../src/assets/img/promo.png'); //https://unsplash.com/photos/rtJCcnZgdRg
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
    background-attachment: fixed;
  }
}


@media(max-width: 1199px) {
  .about-page {
    .about-page__content {
      padding: 120px 0 0 0;
      max-width: 950px;

      .about-page__info {
        padding: 64px 80px 48px 32px;
        width: 470px;
      }

      .about-page__img-wrapper {
        top: calc(50% - 120px);
        right: 10px;
        gap: 15px;

        .about-page__img {
          width: 245px;
          height: 370px;
        }
      }
    }

    .about-page__attachment {
      height: 400px;
    }
  }
}

@media(max-width: 991px) {
  .about-page {
    .about-page__content {
      margin: 0 auto 50px auto;
      padding: 240px 0 0 0;
      max-width: 640px;

      .about-page__info {
        padding: 36px 56px 20px 36px;
        margin: 0 auto;
      }

      .about-page__img-wrapper {
        top: 50px;
        right: calc(50% - 180px);
        gap: 15px;

        .about-page__img {
          width: 170px;
          height: 204px;
        }
      }
    }

    .about-page__attachment {
      height: 350px;
    }
  }
}

@media(max-width: 512px) {
  .about-page {
    .about-page__content {
      max-width: 100%;
      width: 100%;

      .about-page__info {
        padding: 36px 56px 20px 36px;
        margin: 0 auto;
        width: 100%;

        .about-page__info-title {
          margin-bottom: 25px;
          font-size: 23px;
        }
      }

      .about-page__img-wrapper {
        top: 50px;
        right: calc(50% - 145px);
        gap: 10px;

        .about-page__img {
          width: 140px;
          height: 204px;
        }
      }
    }

    .about-page__attachment {
      height: 300px;
    }
  }
}
</style>
