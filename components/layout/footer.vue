<template>
  <div :class="`${prefixCls}-footer`" :style="footerStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ant-footer',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-layout'
    },
    footerStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
