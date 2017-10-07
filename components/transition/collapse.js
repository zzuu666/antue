class Collapse {
  constructor () {
    this.props = {
      'enter-active-class': 'ant-motion-collapse ant-motion-collapse-active',
      'leave-active-class': 'ant-motion-collapse ant-motion-collapse-active'
    }
    this.on = {
      beforeEnter (el) {
        el.style.height = 0
        el.style.opacity = 0
      },
      enter (el) {
        el.style.height = `${el.scrollHeight}px`
        el.style.opacity = 1
      },
      afterEnter (el) {
        el.style.height = ''
        el.style.opacity = ''
      },
      beforeLeave (el) {
        el.style.height = `${el.offsetHeight}px`
        el.style.opacity = 1
      },
      leave (el) {
        el.scrollHeight && (el.style.height = 0)
      },
      afterLeave (el) {
        el.style.height = ''
        el.style.opacity = ''
      }
    }
  }
}

export default Collapse
