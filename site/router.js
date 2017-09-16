import Vue from 'vue'
  import Router from 'vue-router'
  import zhbutton from './docs/button/index-zh'
import ehbutton from './docs/button/index-en'
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/component/zh-CN',
      children: [{
      path: 'button',
      component: zhbutton,
      name: 'button-zh'
    },]
    },
    {
      path: '/component/en-US',
      children: [{
      path: 'button',
      component: ehbutton,
      name: 'button-en'
    },]
    }
  ]
})

export default router