import Vue from 'vue'
import Router from 'vue-router'
import Button from './button'
import Menu from './menu'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/button',
      component: Button
    },
    {
      path: '/menu',
      component: Menu
    }
  ]
})

export default router
