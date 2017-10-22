<template>
  <div :class="classes" :style="style"></div>
</template>

<script>
export default {
  name: 'tabsInk',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    animated: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number
    },
    size: {
      type: Number
    },
    vertical: {
      type: Boolean
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-ink-bar`,
        this.animated ? `${prefixCls}-ink-bar-animated` : `${prefixCls}-ink-bar-no-animated`
      ]
    },
    style () {
      const verticalStyle = (size, offset) => {
        return {
          transform: `translate3d(0, ${offset}px, 0)`,
          height: `${size}px`
        }
      }
      const horizontalStyle = (size, offset) => {
        return {
          transform: `translate3d(${offset}px, 0, 0)`,
          width: `${size}px`
        }
      }
      return this.vertical ? verticalStyle(this.size, this.offset) : horizontalStyle(this.size, this.offset)
    }
  }
}
</script>
