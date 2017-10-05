<template>
  <div :class="`${prefixCls}-grid`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      prefixCls: {
        type: String,
        default: 'ant-card'
      }
    }
  }
</script>
