import Vue from 'vue'
import App from './App'
import router from './routers'
import '../components/style/index.js'
import './index.less'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
