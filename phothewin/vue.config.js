const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

const API_URL = {
  production: JSON.stringify('https://www.phothewin.com/api/endpoint.php'),
  development: JSON.stringify('http://localhost/api/endpoint.php')
}

// check environment mode
const environment =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        API_URL: API_URL[environment]
      })
    ]
  }, 
  devServer: {
    port: 80, // or your backend port
    proxy: 'http://localhost:80/' // or your backend url
}
})