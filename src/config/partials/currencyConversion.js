module.exports = {
  name: 'Currency conversion',
  settings: [
    {
      type: 'checkbox',
      id: 'currency_conversion_enabled',
      label: 'Enable currency conversion',
      default: false
    },
    {
      type: 'text',
      id: 'currency_conversion_supported_currencies',
      label: 'Supported currencies',
      info: 'List of currencies to display. You must separate each currencies by an empty space, and use the ISO 4217 3-letter code. Example: USD CAD EUR. All the possible values are [listed there](http://bit.ly/1C4cZ3w)',
      default: 'USD CAD EUR GBP'
    },
    {
      type: 'text',
      id: 'currency_conversion_default_currency',
      label: 'Default currency',
      default: 'CAD'
    }
  ]
}