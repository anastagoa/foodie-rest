<template>
  <div class="lang-select">
    <div
      v-for="(lang, key) in allLocales"
      :key="key"
      class="lang-select__options"
      @click="switchLocale(lang)"
    >
      <span
        class="lang-select__option"
        :class="[lang === currentLang ? 'lang-select__options_active' : '']"
      >
        {{ lang }}
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    currentLang: {
      type: String,
      required: true,
    },
    allLocales: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      langSwitcherIsOpened: false,
    }
  },
  methods: {
    switchLocale(lang) {
      this.$emit('setLang', lang)
    },
  }
}

</script>

<style lang="scss" scoped>

.lang-select {
  display: flex;
  gap: 0 10px;

  .lang-select__options {
    &:first-of-type {
      padding-right: 10px;
      border-right: 1px solid black;
    }

    .lang-select__option {
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;
      &.lang-select__options_active {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
      &:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: all 0.7s ease-in-out;
      }
    }
  }
}

@media(max-width: 512px) {
  .lang-select {
    gap: 0 5px;

    .lang-select__options {
      &:first-of-type {
        padding-right: 5px;
      }
    }
  }
}
</style>




