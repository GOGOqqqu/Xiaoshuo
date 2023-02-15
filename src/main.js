import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //引入vuex
import VueAxiosPlugin from 'vue-axios-plugin'


import vant2 from './vant2' //引入自定义插件 用于安装vant2 ui库

import {
  InfiniteLoad
} from 'wot-design' //引入京麦的无限加载
Vue.use(InfiniteLoad)

Vue.config.productionTip = false

Vue.use(vant2)




Vue.use(VueAxiosPlugin, {
  // 请求拦截处理
  reqHandleFunc: config => config,

  reqErrorFunc: error => Promise.reject(error),
  // 响应拦截处理
  resHandleFunc: response => response,
  resErrorFunc: error => Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() { //先装个事件总线
    Vue.prototype.$bus = this
  },
}).$mount('#app')