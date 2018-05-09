<template>
  <atu-transition type="fade">
    <div :class="prefixCls" @click="scrollToTop" v-if="visible">
      <div :class="`${prefixCls}-content`" v-if="$slots.default === undefined">
        <atu-icon :class="`${prefixCls}-icon`" type="to-top"/>
      </div>
      <slot></slot>
    </div>
  </atu-transition>
</template>

<script>
import AtuTransition from '@/transition'
import AtuIcon from '@/icon'
import getScroll from '../_util/getScroll'
import getRequestAnimationFrame from '../_util/getRequestAnimationFrame'

const reqAnimFrame = getRequestAnimationFrame()

const easeInOutCubic = (t, b, c, d) => {
  const cc = c - b
  t /= d / 2
  if (t < 1) {
    return cc / 2 * t * t * t + b
  } else {
    return cc / 2 * ((t -= 2) * t * t + 2) + b
  }
}

export default {
  data () {
    return {
      visible: false
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-back-top'
    },
    target: {
      type: Function,
      default: () => window
    },
    time: {
      type: Number,
      default: 10
    },
    visibilityHeight: {
      type: Number,
      default: 400
    }
  },
  mounted () {
    const getTarget = this.target
    this.scrollEvent = getTarget().addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  destroyed () {
    if (this.scrollEvent) {
      this.scrollEvent.remove()
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = getScroll(this.target(), true)
      this.visible = scrollTop > this.visibilityHeight
    },
    getCurrentScrollTop () {
      const getTarget = this.target
      const targetNode = getTarget()
      if (targetNode === window) {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
      }
      return targetNode.scrollTop
    },
    setScrollTop (value) {
      const getTarget = this.target
      const targetNode = getTarget()
      if (targetNode === window) {
        document.body.scrollTop = value
        document.documentElement.scrollTop = value
      } else {
        targetNode.scrollTop = value
      }
    },
    scrollToTop (e) {
      const scrollTop = this.getCurrentScrollTop()
      const startTime = Date.now()
      const frameFunc = () => {
        const timestamp = Date.now()
        const time = timestamp - startTime
        this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450))
        if (time < 450) {
          reqAnimFrame(frameFunc)
        }
      }
      reqAnimFrame(frameFunc)
      this.$emit('click', e)
    }
  },
  components: {
    AtuTransition,
    AtuIcon
  }
}
</script>
