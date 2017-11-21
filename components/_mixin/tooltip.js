import Vue from 'vue'

import Popper from './popper'
import AtuTransition from '../transition'

/**
 * 统一处理浮层提示功能
 */
export default {
  mixins: [Popper],
  props: {
    placement: {
      type: String,
      default: 'top'
    },
    title: String,
    trigger: {
      type: String,
      default: 'hover'
    },
    mouseEnterDelay: {
      type: Number,
      default: 0
    },
    mouseLeaveDelay: {
      type: Number,
      default: 0.1
    }
  },
  data () {
    return {
      visibleArrow: true
    }
  },
  beforeCreate () {
    this.popperVM = new Vue({
      data: { vnode: '' },
      render () {
        return this.vnode
      }
    }).$mount()
  },
  render (h) {
    this.popperVM.vnode = h('atu-transition', {
      props: {
        type: 'fade'
      }
    }, [
      h('div', {
        'class': this.popperCls,
        directives: [
          {
            name: 'show',
            value: this.visible,
            expression: 'show'
          }
        ],
        ref: 'popper'
      }, [
        h('div', {
          'class': [`${this.prefixCls}-content`]
        }, [
          h('atu-tooltip-content', this)
        ])
      ])
    ])
    if (!this.$slots.default || !this.$slots.default.length) return this.$slots.default
    return this.$slots.default[0]
  },
  mounted () {
    if (this.$slots.default && this.$slots.default.length > 0) {
      this.reference = this.$slots.default[0].elm
      if (this.trigger === 'click') {
        this.reference.addEventListener('click', this.toggle)
        document.addEventListener('click', this.clickDocument)
      } else if (this.trigger === 'focus') {
        let flag = false
        // 元素中包含input／textarea优先使用focus和blur事件，其他使用mouse事件
        if (this.reference.nodeName === 'INPUT' ||
          this.reference.nodeName === 'TEXTAREA') {
          this.reference.addEventListener('focus', this.showPopper)
          this.reference.addEventListener('blur', this.closePopper)
          flag = true
        } else if (this.reference.children.length > 0) {
          flag = Array.from(this.reference.children).some((node) => {
            if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
              node.addEventListener('focus', this.showPopper)
              node.addEventListener('blur', this.closePopper)
              return true
            }
            return false
          })
        }
        if (!flag) {
          this.reference.addEventListener('mousedown', this.showPopper)
          this.reference.addEventListener('mouseup', this.closePopper)
          // 处理鼠标一直按下直到移出点击区域时浮层没关闭的情况
          this.reference.addEventListener('blur', this.closePopper)
        }
      } else {
        this.reference.addEventListener('mouseenter', this.showPopper)
        this.reference.addEventListener('mouseleave', this.closePopper)
      }
      this.$nextTick(() => {
        this.popper = this.$refs.popper
        if (this.trigger === 'hover') {
          this.popper.addEventListener('mouseenter', () => {
            clearTimeout(this.timeout)
          })
          this.popper.addEventListener('mouseleave', this.closePopper)
        }
      })
    }
  },
  components: {
    AtuTransition
  },
  computed: {
    popperCls () {
      return [this.prefixCls].concat(this.placementCls)
    },
    currentMouseEnterDelay () {
      return this.mouseEnterDelay * 1000
    },
    currentMouseLeaveDelay () {
      return this.mouseLeaveDelay * 1000
    }
  },
  destroyed () {
    document.removeEventListener('click', this.clickDocument)
  },
  methods: {
    toggle () {
      return this.visible ? this.closePopper() : this.showPopper()
    },
    showPopper () {
      if (this.visible) return
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.visible = true
        this.$emit('onVisibleChange', this.visible)
      }, this.currentMouseEnterDelay)
    },
    closePopper () {
      if (!this.visible) return
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.visible = false
        this.$emit('onVisibleChange', this.visible)
      }, this.currentMouseLeaveDelay)
    },
    /**
     * 点击其他空白位置需要关闭浮层
     * @param e
     */
    clickDocument (e) {
      if (!this.visible ||
        !this.$el ||
        !this.reference ||
        !this.popper ||
        this.$el.contains(e.target) ||
        this.reference.contains(e.target) ||
        this.popper.contains(e.target)) return
      this.closePopper()
    }
  }
}
