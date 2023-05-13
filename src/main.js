//引入Vue
import Vue from 'vue'
//引入app
import App from './App.vue'
//引入插件
import plugins from './plugins'
//引入路由
import router from './routers/index'
//引入vuex创建的实列
import store  from './vuex/store'

import 'lib-flexible/flexible.js'
//注册插件

import 'animate.css'
Vue.use(plugins)



Vue.config.productionTip = false

import { globalHunhe } from './mixin'


Vue.mixin(globalHunhe)


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
