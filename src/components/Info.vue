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
          We accept orders
          <br>
          from 10:00am to 10:30pm
        </div>
      </div>
      <div class="main-info__item">
        <img
          class="main-info__item-img"
          alt="item-img"
          src="@/assets/img/clock.svg"
        >
        <div class="main-info__item-text">
          Delivery hours:
          <br>
          from 11:00am to 11:30pm
        </div>
      </div>
      <div class="main-info__item">
        <img
          class="main-info__item-img"
          alt="item-img"
          src="@/assets/img/smartphone.svg"
        >
        <div class="main-info__item-text">
          Contacts:
          <br>
          +Х (ХХХ) XXX-XX-XX
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

@media(max-width: 991px) {
  .main-info {
    margin-bottom: 40px;
    .main-info__item {
      .main-info__item-img {
        width: 50px;
        height: 50px;
      }
      .main-info__item-text {
        font-size: 17px;
      }
    }
  }
}

@media(max-width: 512px) {
  .main-info {
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    gap: 10px;

    .main-info__item {
      display: grid;
      grid-template-columns: calc(20% - 5px) calc(80% - 5px);
      align-items: center;
      gap: 10px;

      margin-bottom: 10px;

      .main-info__item-img {
        width: 60px;
        height: 60px;
      }

      .main-info__item-text {
        text-align: start;
        font-size: 18px;
      }
    }
  }
}
</style>
