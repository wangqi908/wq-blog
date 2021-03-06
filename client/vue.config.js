'use strict'
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const cdn = {
  css: [
    'https://cdn.bootcss.com/github-markdown-css/2.8.0/github-markdown.min.css',
    'https://cdn.bootcss.com/highlight.js/9.12.0/styles/github-gist.min.css'
  ],
  js: [
    'https://cdn.bootcss.com/vue/2.6.10/vue.js',
    'https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.js',
    'https://cdn.bootcss.com/vuex/3.1.1/vuex.js',
    'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.js'
  ]
}
const { BASE_DIR, PROD_URL } = require('./config')
const IS_PROD = process.env.NODE_ENV === 'production'
// const publicPath = process.env.NODE_ENV === 'production' ? `/${BASE_DIR}` : '/'

module.exports = {
  publicPath: '/',
  outputDir: BASE_DIR,
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 8089,
    open: true,
    proxy: {
      '/blog': {
        target: PROD_URL,
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    // 公用代码提取，使用cdn加载
    // 用cdn方式引入
    config.externals = {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      axios: 'axios'
    }

    const plugins = []

    if (IS_PROD) {
      plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'blog'),
          routes: ['/', '/index', '/post', '/post/view'],
          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            headless: false,
            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            renderAfterDocumentEvent: 'render-event'
          })
        })
      )
    }
    config.plugins = [...config.plugins, ...plugins]
  },
  chainWebpack: config => {
    config.plugins.delete('preload') // 移除 prefetch 插件
    config.plugins.delete('prefetch') // 移除 preload 插件
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@a', resolve('src/assets'))
      .set('@c', resolve('src/components'))
      .set('@u', resolve('src/utils'))
      .set('@api', resolve('src/api'))
    // 生产环境注入cdn
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      args[0].title = '王琦的博客'
      return args
    })
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/style/variables.scss";`
      }
    }
  }
}
