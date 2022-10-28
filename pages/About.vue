<template>
  <div class="about-page">
    <div class="container">
      <div class="about-page__content">
        <div class="about-page__info">
          <div class="about-page__info-title">
            {{ $t('about.about') }}
          </div>
          <div class="about-page__info-text">
            <p class="about-page__info-text-p">
              {{ $t('about.description') }}
            </p>

            <p class="about-page__info-text-p">
              {{ $t('about.experience') }}
            </p>

            <router-link
              tag="button"
              to="/menu/cold-appetizers"
              class="about-page__btn-wrapper"
            >
              <CustomButton
                :label="`${$t('main.menu')}`"
                class="about-page__btn"
              />
            </router-link>
          </div>
        </div>

        <div class="about-page__img-wrapper">
          <div class="about-page__img"/>
          <div class="about-page__img"/>
        </div>
      </div>
    </div>

    <div class="about-page__parallax" />

    <Info />
  </div>
</template>

<script>
import CustomButton from '@/components/ui/CustomButton'
import Info from '@/components/ui/Info'
export default {
  name: 'About',
  components: { Info, CustomButton }
}
</script>

<style lang="scss" scoped>

.about-page {
  .about-page__content {
    position: relative;
    padding: 120px;
    margin-bottom: 100px;

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
      right: 120px;
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

  .about-page__parallax {
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
</style>
