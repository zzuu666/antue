import './style/index.js'
import Vue from 'vue'
import notification from './notification'
import notificationBox from './notification-box'

const NotificationBoxConstructor = Vue.extend(notificationBox)
const NotificationConstructor = Vue.extend(notification)
let boxInstances = {}
let boxEls = {}
let notificationInstances = []
let seed = 1
let prefixCls = 'ant-notification'
let defaultPlacement = 'bottomRight'
// let defaultTop = 24
// let defaultBottom = 24
let defaultDuration = 4.5
let getContainer

const getBoxEl = (placement) => {
  boxInstances[placement] =
    boxInstances[placement] ||
    new NotificationBoxConstructor({
      propsData: {
        prefixCls,
        placement: placement
      }
    })
  boxInstances[placement].vm = boxInstances[placement].$mount()
  boxEls[placement] = boxInstances[placement].vm.$el
  if (getContainer) {
    getContainer().appendChild(boxInstances[placement].vm.$el)
  } else {
    document.body.appendChild(boxInstances[placement].vm.$el)
  }
  return boxEls[placement]
}

const notice = (opt, type) => {
  opt.type = type || ''
  opt.duration = opt.duration >= 0 ? opt.duration : defaultDuration
  opt.placement = opt.placement || defaultPlacement
  opt.onClose = () => {
    close(id)
  }
  opt.moveFrom = /Right$/.test(opt.placement) ? 'right' : 'left'
  const boxEl = getBoxEl(opt.placement)
  const id = `${prefixCls}${seed++}`
  let notificationInstance = new NotificationConstructor({
    propsData: opt
  })
  notificationInstance.id = id
  notificationInstance.vm = notificationInstance.$mount()
  boxEl.querySelector('span').appendChild(notificationInstance.vm.$el)
  notificationInstance.vm.visible = true
  notificationInstances.push(notificationInstance)
  return () => {
    notificationInstance.vm.visible = false
  }
}

const close = (id, userOnClose) => {
  for (let i = 0, len = notificationInstances.length; i < len; i++) {
    if (id === notificationInstances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(notificationInstances[i])
      }
      notificationInstances.splice(i, 1)
      break
    }
  }
}

const notify = {
  open (opt) {
    return notice(opt)
  },
  info (opt) {
    return notice(opt, 'info')
  },
  success (opt) {
    return notice(opt, 'success')
  },
  error (opt) {
    return notice(opt, 'error')
  },
  warning (opt) {
    return notice(opt, 'warning')
  },
  warn (opt) {
    return notice(opt, 'warning')
  },
  config (options) {
    // if (options.top !== undefined) {
    //   defaultTop = options.top
    // }
    // if (options.bottom !== undefined) {
    //   defaultBottom = options.bottom
    // }
    if (options.placement !== undefined) {
      defaultPlacement = options.placement
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer
    }
  },
  destroy () {
    for (let key in boxInstances) {
      if (boxInstances[key]) {
        boxInstances[key].vm.$destroy(true)
        boxEls[key].parentNode.removeChild(boxEls[key])
      }
      boxInstances[key] = null
    }
  }
}

export default notify
