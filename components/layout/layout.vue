<template>
  <div :class="[`${prefixCls}`, {[`${prefixCls}-has-sider`] : hasSider}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'layout',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-layout'
    },
    hasSider: {
      type: Boolean,
      default: false
    }
  }
}
</script>
