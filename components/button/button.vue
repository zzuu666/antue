<template>
  <button
    :class="classes"
    @click="handleClick"
    @mouseup="handleMouseUp"
    @mousedown="handleMouseDown">
    <atu-icon v-if="icon" :type="icon" />
    <span v-if="!shape && justText">
      <slot></slot>
    </span>
    <slot v-if="!shape && !justText"></slot>
  </button>
</template>

<script>
import AtuIcon from '../icon'

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
    shape: String,
    size: {
      type: String,
      default: 'default'
    },
    type: String
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
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-loading`]: !!this.loading,
          [`${prefixCls}-background-ghost`]: !!this.ghost,
          [`${prefixCls}-clicked`]: !!this.clicked,
          [`${prefixCls}-icon-only`]: !this.children && this.icon && !this.loading
        }

      ]
    }
  },
  components: {
    AtuIcon
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
    const children = this.$slots.default
    children && children.length === 1 && children[0].text && (this.justText = true)
  }
}
</script>

