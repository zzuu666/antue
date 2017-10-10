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
      const activeNode = this.activeNode
      const style = {
        dispaly: 'none'
      }
      if (activeNode) {
        style.dispaly = 'block'
        style.width = `${activeNode.offsetWidth}px`
        style.transform = `translate3d(${this.offset}px,0,0)`
      }
      return style
    }
  }
}
</script>
