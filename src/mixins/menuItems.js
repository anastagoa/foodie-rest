export default {
  computed: {
    menuItems () {
      return [
        {
          name: this.$t('menu.coldAppetizers'),
          id: 'cold-appetizers'
        },
        {
          name: this.$t('menu.hotAppetizers'),
          id: 'hot-appetizers'
        },
        {
          name: this.$t('menu.salads'),
          id: 'salads'
        },
        {
          name: this.$t('menu.soups'),
          id: 'soups'
        },
        {
          name: this.$t('menu.meatAndPoultry'),
          id: 'meat-and-poultry'
        },
        {
          name: this.$t('menu.fishAndSeafood'),
          id: 'fish-and-seafood'
        },
        {
          name: this.$t('menu.garnish'),
          id: 'garnish'
        },
        {
          name: this.$t('menu.breadAndPastries'),
          id: 'bread-and-pastries'
        },
        {
          name: this.$t('menu.desserts'),
          id: 'desserts'
        },
        {
          name: this.$t('menu.drinks'),
          id: 'drinks'
        },
      ]
    }
  }
}
