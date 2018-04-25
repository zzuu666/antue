<template>
  <div>
    <div ref="fixedNode" :class="classes" :style="styles">
      <slot></slot>
    </div>
    <div v-show="slot" :style="slotStyle"></div>
  </div>
</template>

<script>
import getScroll from '../_util/getScroll'
import { throttleByAnimationFrameDecorator } from '../_util/throttleByAnimationFrame'

const getTargetRect = (target) => {
  return target !== window ? target.getBoundingClientRect() : {top: 0, left: 0, bottom: 0}
}

const getOffset = (element, target) => {
  const elemRect = element.getBoundingClientRect()
  const targetRect = getTargetRect(target)

  const scrollTop = getScroll(target, true)
  const scrollLeft = getScroll(target, false)

  const docElem = window.document.body
  const clientTop = docElem.clientTop || 0
  const clientLeft = docElem.clientLeft || 0

  return {
    top: elemRect.top - targetRect.top + scrollTop - clientTop,
    left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
    width: elemRect.width,
    height: elemRect.height
  }
}

export default {
  name: 'Affix',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-affix'
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number
    },
    target: {
      type: Function,
      default () {
        return window
      }
    }
  },
  data () {
    return {
      affix: false,
      styles: {},
      slot: false,
      slotStyle: {}
    }
  },
  computed: {
    offsetType () {
      let type = 'top'
      if (this.offsetBottom >= 0) {
        type = 'bottom'
      }
      return type
    },
    classes () {
      return {
        [`${this.prefixCls}`]: this.affix
      }
    }
  },
  watch: {
    target (val, oldVal) {
      const oldTarget = oldVal()
      const newTarget = val()
      oldTarget.removeEventListener('scroll', this.handleScroll, false)
      oldTarget.removeEventListener('resize', this.handleScroll, false)
      newTarget.addEventListener('scroll', this.handleScroll, false)
      newTarget.addEventListener('resize', this.handleScroll, false)
    }
  },
  mounted () {
    const target = this.target()
    target.addEventListener('scroll', this.handleScroll, false)
    target.addEventListener('resize', this.handleScroll, false)
  },
  beforeDestroy () {
    const target = this.target()
    target.removeEventListener('scroll', this.handleScroll, false)
    target.removeEventListener('resize', this.handleScroll, false)
  },
  methods: {
    @throttleByAnimationFrameDecorator
    handleScroll () {
      const target = this.target()
      const affix = this.affix
      const scrollTop = getScroll(target || window, true)
      const elOffset = getOffset(this.$el, target || window)
      // console.log(scrollTop)
      const windowHeight = window.innerHeight
      const elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight
      const targetRect = getTargetRect(target)

      // Fixed Top
      if ((elOffset.top - this.offsetTop) < scrollTop && this.offsetType === 'top' && !affix) {
        this.affix = true
        this.slotStyle = {
          width: this.$refs.fixedNode.clientWidth + 'px',
          height: this.$refs.fixedNode.clientHeight + 'px'
        }
        this.slot = true
        this.styles = {
          top: `${targetRect.top + this.offsetTop}px`,
          left: `${targetRect.left + elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }
        this.$emit('change', true)
      } else if ((elOffset.top - this.offsetTop) > scrollTop && this.offsetType === 'top' && affix) {
        this.slot = false
        this.slotStyle = {}
        this.affix = false
        this.styles = null
        this.$emit('change', false)
      } else if (this.offsetType === 'top' && affix) {
        this.styles = {
          top: `${targetRect.top + this.offsetTop}px`,
          left: `${targetRect.left + elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }
      }

      // Fixed Bottom
      if ((elOffset.top + this.offsetBottom + elHeight) > (scrollTop + windowHeight) && this.offsetType === 'bottom' && !affix) {
        this.affix = true
        this.styles = {
          bottom: `${this.offsetBottom}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }
        this.$emit('change', true)
      } else if ((elOffset.top + this.offsetBottom + elHeight) < (scrollTop + windowHeight) && this.offsetType === 'bottom' && affix) {
        this.affix = false
        this.styles = null
        this.$emit('change', false)
      } else if (this.offsetType === 'bottom' && affix) {
        this.styles = {
          bottom: `${this.offsetBottom}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }
      }
    }
  }
}
</script>
