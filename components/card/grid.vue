<template>
  <div :class="`${prefixCls}-grid`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'cardGrid',
    props: {
      prefixCls: {
        type: String,
        default: 'ant-card'
      }
    }
  }
</script>
