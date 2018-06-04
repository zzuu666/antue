<template>
  <div :class="`${prefixCls}-content`" :style='contentStyle'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    prefixCls: {
      type: String,
      default: 'ant-layout'
    },
    contentStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

