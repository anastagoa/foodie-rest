import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainLayout from '@/layouts/MainLayout.vue'
import { createI18n } from 'vue-i18n'
import { languages } from '@/i18n'
import { defaultLocale } from '@/i18n'
import { createMetaManager } from 'vue-meta'

const messages = Object.assign(languages)

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  missingWarn: false,
  fallbackWarn: false,
  messages
})


createApp(App)
  .component('MainLayout',  MainLayout)
  .use(store)
  .use(router)
  .use(i18n)
  .use(createMetaManager())
  .mount('#app')

