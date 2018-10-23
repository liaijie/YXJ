// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入lib-flexible
import 'lib-flexible/flexible.js'
// 引入路由
import router from './router/router.js'


// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 注册路由
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
