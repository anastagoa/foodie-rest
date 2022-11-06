import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainLayout from '@/layouts/MainLayout.vue'
// import { createI18n, useI18n } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import { languages } from '@/i18n'
import { defaultLocale } from '@/i18n'
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'

const messages = Object.assign(languages)
// const metaManager = createMetaManager()

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: ['en', 'ru'],
  messages
})

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
  .use(metaPlugin) // optional, only needed for OptionsAPI (see below)

//   .directive(vClickOutside, {
//   mounted(el, binding) {
//     el.clickOutsideEvent = function(event) {
//       if (!(el === event.target || el.contains(event.target))) {
//         binding.value(event, el);
//       }
//     };
//     document.body.addEventListener('click', el.clickOutsideEvent);
//   },
//   unmounted(el) {
//     document.body.removeEventListener('click', el.clickOutsideEvent);
//   }
// })
  .mount('#app')

