import Vue from 'vue/dist/vue.js'

/**
 * 创建一个可以传入props属性组件的实例
 * @param {*} component 组件
 * @param {*} propsData props
 * @return {vm} 拥有传入 props 属性的 Vue 实例
 */
export const creatComponentVm = (component, propsData) => {
  const Constructor = Vue.extend(component)
  const vm = new Constructor({ propsData }).$mount()
  return vm
}

/**
 * 模仿事件，多用于测试组件的点击等事件。
 * @param {HTMLDOM} dom 原生dom 例如 vm.$el
 * @param {*} event 需要模仿的事件
 */
export const simulateEvent = (dom, event) => {
  const e = new Event(event)
  return dom.dispatchEvent(e)
}

/**
 * 利用 Vue SSR 创建一个 renderer(vm, (err, str) => {})
 */
export const renderer = () => {
  const renderer = require('vue-server-renderer').createRenderer()
  return renderer
}

/**
 * 渲染一个 vm 实例的字符串，用于 jest 的快照测试
 * @param {*} vm vm 实例
 * @param {*} callback 回调函数
 */
export const renderVmString = (vm, callback) => {
  const renderer = require('vue-server-renderer').createRenderer()
  renderer.renderToString(vm, (err, str) => {
    return err ? new Error(err) : callback(str)
  })
}

/**
 * 创建一个 Vue 实例
 * @param {*} options 参数 template/mothods etc.
 */
export const creatVueVm = (options) => {
  const vm = new Vue(options)
  return vm
}
/**
 * Vue 提供的 nextTick 方法
 * 一些依赖 DOM 更新结果的断言必须在nextTick中执行
 * @param {*} callback
 */
export const nextTick = (callback) => {
  Vue.nextTick(() => {
    callback()
  })
}
