import { createRouter, createWebHistory } from 'vue-router'

import Home from '/pages/Home.vue'
import About from '/pages/About.vue'
import Promo from '../../pages/Promo.vue'
import Contacts from '../../pages/Contacts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/promo',
    name: 'promo',
    component: Promo
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
  }
  // scrollBehavior(to) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     };
  //   }
  // }
})

export default router
