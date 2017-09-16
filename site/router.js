import Vue from 'vue'
  import Router from 'vue-router'
  import zhButton from './docs/button/index-zh'
import ehButton from './docs/button/index-en'
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      component: zhButton
    },
    {
      path: '/component/zh-CN',
      children: [{
      path: 'button',
      component: zhButton,
      name: 'button-zh'
    },]
    },
    {
      path: '/component/en-US',
      children: [{
      path: 'button',
      component: ehButton,
      name: 'button-en'
    },]
    }
  ]
})

export default router