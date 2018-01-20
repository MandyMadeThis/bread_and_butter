module.exports = {
  name: 'Search',
  settings: [
    {
      type: 'select',
      id: 'search_mode',
      label: 'Search only...',
      options: [
        {
          value: 'product',
          label: 'Products only'
        },
        {
          value: 'product,page',
          label: 'Products and pages'
        },
        {
          value: 'product,article',
          label: 'Products and articles'
        },
        {
          value: 'product,article,page',
          label: 'Products, articles and pages'
        }
      ],
      default: 'product'
    }
  ]
}
