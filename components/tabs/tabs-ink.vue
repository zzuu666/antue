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
    activeNode: {
      type: HTMLDivElement
    },
    animated: {
      type: Boolean,
      default: true
    },
    offset: {
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
      const verticalStyle = (node, offset) => {
        return {
          transform: `translate3d(0, ${offset}px, 0)`,
          height: `${node.offsetHeight}px`
        }
      }
      const horizontalStyle = (node, offset) => {
        return {
          transform: `translate3d(${offset}px, 0, 0)`,
          width: `${node.offsetWidth}px`
        }
      }
      const activeNode = this.activeNode
      return activeNode
        ? this.vertical
          ? verticalStyle(activeNode, this.offset)
          : horizontalStyle(activeNode, this.offset)
        : {}
    }
  }
}
</script>
