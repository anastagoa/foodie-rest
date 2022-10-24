import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainLayout from '@/layouts/MainLayout.vue'
// import { createI18n, useI18n } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import { languages } from '@/i18n'
import { defaultLocale } from '@/i18n'

const messages = Object.assign(languages)

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
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

