<template>
  <div :class="classes">
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
    animated: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls

      return [
        `${prefixCls}-content`,
        this.animated ? `${prefixCls}-content-animated` : `${prefixCls}-content-no-animated`
      ]
    }
  }
}
</script>
