module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = (app) => {
//   presets: ['@vue/cli-plugin-babel/preset']
//   app.use(
//     createProxyMiddleware('/job01/autosuggest', {
//       target: 'https://hiring.zumata.xyz',
//       changeOrigin: true,
//     })
//   )
// }
