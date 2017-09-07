import Vue from 'vue'
import App from './App'
import router from './routers'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
