export default {
  computed: {
    menuLinks () {
      return [
        {
          path: '/about',
          title: 'about'
        },
        {
          path: '/promo',
          title: 'promo'
        },
        {
          path: '/contacts',
          title: 'contacts'
        },
      ]
    },
    currentPath() {
      return this.$route.path
    },
  }
}
