// Prevent Node from caching these files
// ref: http://stackoverflow.com/a/16060619/918060
function req (module) {
  delete require.cache[require.resolve(module)]
  return require(module)
}

var exportsArray = [
  req('./partials/themeInfo'),
  req('./partials/socialMedia'),
  req('./partials/search'),
  req('./partials/currencyConversion')
]

module.exports = exportsArray
