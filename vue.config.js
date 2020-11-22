const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  pwa: {
    shortName                      : 'rzaripov.kz',
    name                           : 'rzaripov.kz',
    themeColor                     : '#42b983',
    msTileColor                    : '#42b983',
    appleMobileWebAppCache         : 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    display                        : 'standalone',
  },
  // publicPath: process.env.NODE_ENV === "development" ? "/vuejs-pwa/" : "",
  css             : { loaderOptions: { css: { url: false } } },
  configureWebpack: { plugins: [new GenerateSW()] },
}
