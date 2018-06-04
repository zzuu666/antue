<template>
  <div :class="`${prefixCls}-content`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    prefixCls: {
      type: String,
      default: 'ant-layout'
    }
  }
}
</script>

