<template>
  <button
    :class="[
      prefixCls,
      type ? `${prefixCls}-${type}` : ``,
      shape ? `${prefixCls}-${shape}` : ``,
      size ? `${prefixCls}-${size}` : ``,
      isLoading ? `${prefixCls}-loading` : ``,
      ghost ? `${prefixCls}-background-ghost` : ``,
      clicked ? `${prefixCls}-clicked` : ``,
      !children && icon && !loading ? `${prefixCls}-icon-only` : ``
    ]"
    @click="handleClick"
    @mouseup="handleMouseUp"
    @mousedown="handleMouseDown">
    <span>
      <atu-icon v-if="icon" :type="icon" />
      <slot v-if="!shape"></slot>
    </span>
  </button>
</template>

<script>
import AtuIcon from '../icon'

export default {
  data () {
    return {
      prefixCls: 'ant-btn',
      clicked: false,
      timeout: null,
      delayTimeout: null,
      isLoading: false
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
  props: {
    type: String,
    htmlType: {
      type: String,
      default: 'button'
    },
    icon: String,
    shape: String,
    size: {
      type: String,
      default: 'default'
    },
    loading: {
      type: [Boolean, Object],
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
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
  computed: {
    children () {
      return this.$slots.default
    }
  },
  beforeDestroy () {
    this.timeout && clearTimeout(this.timeout)
    this.delayTimeout && clearTimeout(this.delayTimeout)
  },
  mounted () {
    console.log(this)
  }
}
</script>

