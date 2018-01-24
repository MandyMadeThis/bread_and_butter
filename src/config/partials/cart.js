module.exports = {
  name: 'Cart',
  settings: [
    {
      type: 'select',
      id: 'cart_type',
      label: 'Cart type',
      options: [
        {
          value: 'drawer',
          label: 'Drawer'
        },
        {
          value: 'page',
          label: 'Page'
        }
      ],
      default: 'drawer'
    },
    {
      type: 'url',
      id: 'empty_cart_link',
      label: 'Empty cart button link'
    }
  ]
}