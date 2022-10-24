export default {
  computed: {
    menuLinks () {
      return [
        {
          path: '/promo',
          title: 'main.promo'
        },
        {
          path: '/about',
          title: 'main.about'
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
