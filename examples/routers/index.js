import Vue from 'vue'
import Router from 'vue-router'
import Button from './button'
import Menu from './menu'
import Icon from './icon'
import Input from './input/index'

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
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/input',
      component: Input
    }
  ]
})

export default router
