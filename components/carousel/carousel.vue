<template>
  <div :class="wrapClasses">
    <div :class="`${prefixCls}-slick-list`">
      <div
        :class="`${prefixCls}-slick-track`"
        :style="trackStyle"
      >
        <slot></slot>
      </div>
    </div>
    <ul v-if="dots" :class="dotsClasses">
      <li
        v-for="(item, index) in slideCount"
        :key="index"
        :class="{ 'slick-active': currentSlide === index }"
        @click="goTo(index)"
      >
        <button>{{ index + 1 }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { oneOf } from '../_util/proptype'

export default {
  name: 'carousel',
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },
    dots: {
      type: Boolean,
      default: true
    },
    dotPosition: {
      type: String,
      default: 'bottom',
      validator (value) {
        return oneOf(value, ['top', 'bottom', 'left', 'right'])
      }
    },
    easing: {
      type: String,
      default: 'linear'
    },
    effect: {
      type: String,
      default: 'scrollx',
      validator (value) {
        return oneOf(value, ['scrollx', 'fade'])
      }
    },
    vertical: {
      type: Boolean,
      default: false
    },
    autoplaySpeed: {
      type: Number,
      default: 3000
    },
    prefixCls: {
      type: String,
      default: 'ant-carousel'
    }
  },
  data () {
    return {
      currentSlide: 0,
      slideCount: 0,
      timer: null
    }
  },
  computed: {
    wrapClasses () {
      return [
        this.prefixCls,
        {
          [`${this.prefixCls}-vertical`]: this.vertical
        }
      ]
    },
    dotsClasses () {
      return [
        'slick-dots',
        {
          'slick-dots-top': this.dotPosition === 'top',
          'slick-dots-bottom': this.dotPosition === 'bottom',
          'slick-dots-left': this.dotPosition === 'left',
          'slick-dots-right': this.dotPosition === 'right'
        }
      ]
    },
    trackStyle () {
      if (this.effect === 'fade') {
        return {}
      }
      const offset = -this.currentSlide * 100
      return {
        transform: `translateX(${offset}%)`,
        transition: `transform 0.3s ${this.easing}`,
        display: 'flex'
      }
    }
  },
  methods: {
    next () {
      this.currentSlide = (this.currentSlide + 1) % this.slideCount
    },
    prev () {
      this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount
    },
    goTo (slideNumber) {
      if (slideNumber >= 0 && slideNumber < this.slideCount) {
        this.currentSlide = slideNumber
      }
    },
    startAutoplay () {
      if (this.autoplay && this.slideCount > 0) {
        this.timer = setInterval(() => {
          this.next()
        }, this.autoplaySpeed)
      }
    },
    stopAutoplay () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    updateSlideCount () {
      const children = this.$slots.default
      if (children) {
        this.slideCount = children.filter(c => c.tag).length
      }
    }
  },
  created () {
    this.updateSlideCount()
  },
  mounted () {
    this.startAutoplay()
  },
  beforeDestroy () {
    this.stopAutoplay()
  }
}
</script>
