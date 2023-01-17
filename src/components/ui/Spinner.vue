<template>
  <div class="spinner-section">
    <div class="spinner" />
  </div>
</template>

<script>
export default {
  name: "Spinner"
}
</script>

<style lang="scss" scoped>

.spinner-section {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 50vh;

  .spinner {
    width: 40px;
    height: 40px;

    border: 4px solid transparent;
    border-top-color: #5d5d5d;
    border-right-color: #5d5d5d;
    border-radius: 50%;

    animation: spinner 1s linear infinite;
  }
}


@keyframes spinner {
  100% {
    transform: rotate(360deg);
  }
}

</style>
