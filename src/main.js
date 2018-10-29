// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入lib-flexible
import 'lib-flexible/flexible.js'
// 引入路由
import router from './router/router.js'
// 引入返回主页组件
import GoHome from "./components/common/gohome/GoHome"
// 引入footer组件
// Vue.config.productionTip = false
Vue.component("GoHome",GoHome)

/* eslint-disable no-new */
new Vue({
  // 注册路由
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
