import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
// import './assets/weui/weui.wxss'
import App from '@/App'
import store from '@/store'
import fly from './utils/fly'
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
Vue.prototype.$http = fly

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
