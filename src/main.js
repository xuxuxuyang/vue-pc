import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
//把axios挂载到Vue的原型上方便调用
Vue.prototype.$http = axios
//配置请求的根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
