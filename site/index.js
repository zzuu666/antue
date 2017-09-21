import Vue from 'vue'
import App from './App'
import router from './router.js'
import '../components/style/index.js'
import './common/theme/index.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
