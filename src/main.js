// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import i18n from './i18n/index'
import '@/icons'

Vue.config.productionTip = false

import '@/plugins/vant'
import 'reset-css'
// 全局引入rem.js, 自动将px转为rem
import '@/config/rem'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  i18n,
  template: '<App/>'
})
