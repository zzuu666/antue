<template>
  <button
    :class="classes"
    :type="htmlType"
    @click="handleClick"
    @mouseup="handleMouseUp"
    @mousedown="handleMouseDown">
    <a-icon v-if="iconType" :type="iconType" />
    <span v-if="!shape && justText">
      <slot></slot>
    </span>
    <slot v-if="!shape && !justText"></slot>
  </button>
</template>

<script>
import AIcon from '../icon'
import { oneOf } from '../_util/proptype'

const SIZEMAP = {
  'small': 'sm',
  'large': 'lg'
}

export default {
  name: 'button',
  props: {
    ghost: {
      type: Boolean,
      default: false
    },
    htmlType: {
      type: String,
      default: 'button'
    },
    icon: String,
    loading: {
      type: [Boolean, Object],
      default: false
    },
    shape: {
      type: String,
      validator (value) {
        return oneOf(value, ['circle', 'circle-outline'])
      }
    },
    size: {
      type: String,
      validator (value) {
        return oneOf(value, ['small', 'large', ''])
      }
    },
    type: {
      type: String,
      validator (value) {
        return oneOf(value, ['primary', 'dashed', 'danger'])
      }
    }
  },
  data () {
    return {
      prefixCls: 'ant-btn',
      clicked: false,
      timeout: null,
      delayTimeout: null,
      isLoading: false,
      justText: false
    }
  },
  computed: {
    children () {
      return this.$slots.default
    },
    classes () {
      const prefixCls = this.prefixCls
      const size = this.size && SIZEMAP[this.size]
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${size}`]: !!size,
          [`${prefixCls}-loading`]: !!this.isLoading,
          [`${prefixCls}-background-ghost`]: !!this.ghost,
          [`${prefixCls}-clicked`]: !!this.clicked,
          [`${prefixCls}-icon-only`]: !this.children && this.icon && !this.loading
        }

      ]
    },
    iconType () {
      return this.isLoading ? 'loading' : this.icon
    }
  },
  components: {
    AIcon
  },
  methods: {
    handleClick (e) {
      this.clicked = true
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => { this.clicked = false }, 500)
      this.$emit('click', e)
    },
    // Handle auto focus when click button in Chrome
    handleMouseUp (e) {
      e.currentTarget.blur()
      this.$emit('mouseup', e)
    },
    handleMouseDown (e) {
      this.$emit('mousedown', e)
    }
  },
  watch: {
    loading (next, cur) {
      cur && this.delayTimeout && clearTimeout(this.delayTimeout)
      if (typeof next !== 'boolean' && next && next.delay) {
        this.delayTimeout = setTimeout(() => (this.isLoading = true), next.delay)
      } else {
        this.isLoading = true
      }
    }
  },
  beforeDestroy () {
    this.timeout && clearTimeout(this.timeout)
    this.delayTimeout && clearTimeout(this.delayTimeout)
  },
  created () {
    this.isLoading = this.loading

    const children = this.$slots.default
    children && children.length === 1 && children[0].text && (this.justText = true)
  }
}
</script>
