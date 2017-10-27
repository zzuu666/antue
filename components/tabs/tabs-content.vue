<template>
  <div
    :class="classes"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabsContent',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-tabs'
    },
    activeIndex: {
      type: Number
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls

      return [
        `${prefixCls}-content`,
        `${prefixCls}-content-animated`
      ]
    },
    style () {
      const marginLeft = this.activeIndex > -1 ? this.activeIndex * 100 : 0
      const style = {
        marginLeft: `-${marginLeft}%`
      }
      return style
    }
  },
  updated () {
    this.$emit('contentUpdate')
  }
}
</script>
