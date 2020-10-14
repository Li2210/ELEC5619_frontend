// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueGoogleMaps from 'vue2-google-maps'

//设置反向代理,前端请求默认发送到 8443/api
let axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
//全局注册
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: {App},
  template: '<App/>'
})