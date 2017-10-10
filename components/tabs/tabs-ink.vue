<template>
  <div :class="classes"></div>
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
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}-ink-bar`,
        this.animated ? `${prefixCls}-ink-bar-animated` : `${prefixCls}-ink-bar-no-animated`
      ]
    }
  }
}
</script>
