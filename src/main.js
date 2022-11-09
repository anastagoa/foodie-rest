import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainLayout from '@/layouts/MainLayout.vue'
// import { createI18n, useI18n } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import { languages } from '@/i18n'
import { defaultLocale } from '@/i18n'
import { createMetaManager } from 'vue-meta'

import axios from 'axios' //delete

const messages = Object.assign(languages)

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: ['en', 'ru'],
  messages
})


// check

const loadedLanguages = ['en']

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (lang) {
  if (typeof lang === 'undefined') {
    lang = window.navigator.userLanguage || window.navigator.language;
    lang = lang.slice(0,2);
  }
  if (loadedLanguages.includes(lang)) {
    if (i18n.locale !== lang) setI18nLanguage(lang)
    return Promise.resolve()
  }
  return fetch(`https://EXAMPLE.de/locales?lang=${lang}`)
    .then(response => response.json())
    .then(msgs => {
      loadedLanguages.push(lang)
      i18n.setLocaleMessage(lang, msgs)
      return setI18nLanguage(lang)
    });
}
// createApp(App, {
//   setup() {
//     const {t} = useI18n()
//     return {t}
//   }
// })

createApp(App)
  .component('MainLayout',  MainLayout)
  .use(store)
  .use(router)
  .use(i18n)
  .use(createMetaManager())
  // .use(metaPlugin)
// })
  .mount('#app')

