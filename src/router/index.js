import { createRouter, createWebHistory } from 'vue-router'

import Home from '/pages/Home.vue'
import About from '/pages/About.vue'
import Promo from '/pages/Promo.vue'
import Contacts from '/pages/Contacts.vue'
import MenuCategory from '@/components/MenuCategory'
import NotFound from '@/components/NotFound.vue'

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
  },
  {
    path: '/menu/:id',
    name: 'MenuCategory',
    component: MenuCategory,
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: NotFound
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      window.scrollTo(0, 0);
    }
  }
})

export default router
