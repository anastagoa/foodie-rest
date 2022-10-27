<template>
  <div class="contacts-page">
    <div class="container">
      <div class="contacts-page__title">
        {{ $t('main.contacts') }}
      </div>
      <div class="contacts-page__items-wrapper">
        <div class="contacts-page__item">
          <div class="contacts-page__item-title">
            {{ $t('contacts.callCenter') }}
          </div>
          <div class="contacts-page__item-content">
            +7 (495) XXX-XX-XX
          </div>
        </div>
        <div class="contacts-page__item">
          <div class="contacts-page__item-title">
            {{ $t('contacts.pr') }}
          </div>
          <a
            href="mailto:pr@foodie.com"
            class="contacts-page__item-content"
          >
            pr@foodie.com
          </a>
        </div>
        <div class="contacts-page__item">
          <div class="contacts-page__item-title">
            {{ $t('contacts.job') }}
          </div>
          <a
            href="mailto:job@foodie.com"
            class="contacts-page__item-content"
          >
            job@foodie.com
          </a>
        </div>
        <div class="contacts-page__item">
          <div class="contacts-page__item-title">
            {{ $t('contacts.purchasing') }}
          </div>
          <a
            href="mailto:info@foodie.com"
            class="contacts-page__item-content"
          >
            info@foodie.com
          </a>
        </div>
        <div class="contacts-page__item">
          <div class="contacts-page__item-title">
            {{ $t('contacts.marketing') }}
          </div>
          <a
            href="mailto:marketing@foodie.com"
            class="contacts-page__item-content"
          >
            marketing@foodie.com
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang="scss" scoped>

.contacts-page {
  padding: 120px 0;

  .contacts-page__title {
    margin-bottom: 20px;

    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    color: #4f4f4f;
  }

  .contacts-page__items-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;

    .contacts-page__item {
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;

      width: 100%;
      padding: 40px;

      background-color: #FFFFFF;
      border: 0;
      box-shadow: 0 0 8px 0 rgb(0 0 0 / 5%);

      &::before,
      &::after {
        position: absolute;
        content: '';

        width: 0;
        height: 0;

        box-sizing: inherit;
        border: 2px solid transparent;
      }

      &::before {
        top: 0;
        left: 0;
      }

      &::after {
        bottom: 0;
        right: 0;
      }

      &:hover {
        background-color: #f7f7fa;
        box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
        transition: all .7s ease;

        color: rgba(79, 79, 79, 0.8);

        &::before,
        &::after {
          width: 100%;
          height: 100%;
        }

        &::before {
          border-top-color: rgba(79, 79, 79, 0.3);
          border-right-color: rgba(79, 79, 79, 0.3);
          transition: width 0.25s ease-out,
          height 0.25s ease-out 0.25s;
        }

        &::after {
          border-bottom-color: rgba(79, 79, 79, 0.3);
          border-left-color: rgba(79, 79, 79, 0.3);
          transition: border-color 0s ease-out 0.5s,
          width 0.25s ease-out 0.5s,
          height 0.25s ease-out 0.75s;
        }

        .contacts-page__item-content {
          color: rgba(79, 79, 79, 0.8);
          transition: all .7s ease;
        }
      }

      .contacts-page__item-title {
        font-size: 17px;
        font-weight: 600;
      }

      .contacts-page__item-content {
        color: #4f4f4f;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer
      }
    }
  }
}
</style>
