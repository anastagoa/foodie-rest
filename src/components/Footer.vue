<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__left">
          <router-link
            tag="a"
            to="/"
          >
            <img
              class="footer__logo"
              alt="logo"
              src="@/assets/img/logo-light.svg"
            >
          </router-link>

          <div class="footer__rights">
            © 2022 Foodie
          </div>
        </div>

        <div class="footer__right">
          <div class="footer__links">
            <div class="footer__links-title">
              {{ $t('main.info') }}
            </div>
            <router-link
              v-for="link in menuLinks"
              :key="link.id"
              tag="a"
              :to="link.path"
              class="footer__link"
              :class="[link.path === currentPath ? 'header__link_active' : '']"
            >
              <div>{{ $t(link.title) }}</div>
            </router-link>
          </div>

          <div class="footer__social-media">
            <div class="footer__social-text">
              {{ $t('main.social') }}
            </div>
            <a
              href=""
              class="footer__social-link"
            >
              <img
                src="@/assets/img/vk.svg"
                alt="vk"
              >
            </a>
            <a
              href=""
              class="footer__social-link"
            >
              <img
                src="@/assets/img/telegram.svg"
                alt="telegram"
              >
            </a>
          </div>

          <div class="footer__info">
            <div class="footer__tel">
              +7 (495) XXX-XX-XX
            </div>
            <div class="footer__time">
              <div class="footer__time-block">
                <div class="footer__time-text">
                  {{ $t('order.accept') }}
                </div>
                <div class="footer__time-info">
                  {{ $t('order.acceptTime') }}
                </div>
              </div>
              <div class="footer__time-block">
                <div class="footer__time-text">
                  {{ $t('order.delivery') }}
                </div>
                <div class="footer__time-info">
                  {{ $t('order.deliveryTime') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

import menuLinks from '@/mixins/menuLinks'

export default {
  name: 'Footer',
  mixins: [ menuLinks ],
}
</script>

<style lang="scss" scoped>

.footer {
  //position: absolute;
  //left: 0;
  //bottom: 0;
  width: 100%;
  background-color: #111111;

  .footer__content {
    display: grid;
    grid-template-columns: 25% 75%;
    padding: 40px 20px 20px 20px;  //delete

    .footer__left {
      display: flex;
      flex-direction: column;
      gap: 20px;
      //justify-content: space-between;

      .footer__logo {
        width: 150px;
        height: 70px;
        cursor: pointer;
      }
      .footer__rights {
        font-size: 14px;
        font-weight: 500;
        color: white;
        text-transform: uppercase;
      }
    }

    .footer__right {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      .footer__links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        margin: 0;

        .footer__links-title {
          font-size: 14px;
          font-weight: 600;
          color: white;
          opacity: 0.7;
          text-transform: uppercase;
        }

        .footer__link {
          font-size: 13px;
          font-weight: 600;
          list-style: none;
          color: white;
          text-transform: uppercase;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
            text-underline-offset: 2px;
            transition: all 0.7s ease-in-out;
          }

          &.footer__link_active {
            text-decoration: underline;
            text-underline-offset: 2px;
          }
        }
      }

      .footer__social-media {
        .footer__social-text {
          margin-bottom: 5px;

          font-size: 14px;
          font-weight: 600;
          color: white;
          opacity: 0.7;
          text-transform: uppercase;
        }
        .footer__social-link {
          margin-bottom: 5px;

          text-decoration: none;
          cursor: pointer;

          img {
            margin-right: 15px;
            width: 35px;
            height: 35px;
          }
        }
      }
    }

    .footer__info {
      .footer__tel {
        margin-bottom: 20px;

        font-size: 18px;
        font-weight: 700;
        color: #FFFFFF;
      }
      .footer__time {
        .footer__time-block {
          margin-bottom: 10px;

          .footer__time-text {
            margin-bottom: 5px;

            font-size: 16px;
            font-weight: 300;
            color: #FFFFFF;
            opacity: 0.7;
          }
          .footer__time-info {
            font-size: 17px;
            font-weight: 700;
            color: #FFFFFF;
          }
        }
      }
    }
  }
}

</style>
