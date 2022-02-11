const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/job01/autosuggest', {
      target: 'https://hiring.zumata.xyz',
      changeOrigin: true,
    })
  )
}
