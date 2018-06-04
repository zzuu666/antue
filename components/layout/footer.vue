<template>
  <div :class="`${prefixCls}-footer`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'layout-footer',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-layout'
    }
  }
}
</script>
