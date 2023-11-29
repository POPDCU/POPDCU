const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  assetsDir: 'static',
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production' ? '/your-app-name/' : '/',

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'https://port-0-popdcu-back-test-3yl7k2blopd9kw1.sel5.cloudtype.app',
        ws: true,
        changeOrigin: true
      },
    }
  }
})
