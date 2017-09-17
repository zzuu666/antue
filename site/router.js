import Vue from 'vue'
  import Router from 'vue-router'
  import zhButton from './docs/button/index-zh'
import ehButton from './docs/button/index-en'
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/component/zh-CN/button',
      component: zhButton,
      name: 'button-zh'
    },
    {
      path: '/component/en-US/button',
      component: ehButton,
      name: 'button-en'
    },
  ]
})

export default router