var shopify = require('gulp-shopify-theme').create()
var config = require('../config.json')

shopify.init(config)

module.exports = shopify
