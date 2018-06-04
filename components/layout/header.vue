<template>
  <div :class="`${prefixCls}-header`" :style="headerStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-layout'
    },
    headerStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>

