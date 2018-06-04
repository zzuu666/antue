<template>
  <div :class="[`${prefixCls}`, {[`${prefixCls}-has-sider`] : hasSider}]" :style='layoutStyle'>
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
    },
    layoutStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>

