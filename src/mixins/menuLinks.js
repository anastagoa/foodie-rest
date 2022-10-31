export default {
  computed: {
    menuLinks () {
      return [
        {
          path: '/about',
          title: 'main.about'
        },
        {
          path: '/promo',
          title: 'main.promo'
        },
        {
          path: '/contacts',
          title: 'main.contacts'
        },
      ]
    },
    currentPath() {
      return this.$route.path
    },
  }
}
