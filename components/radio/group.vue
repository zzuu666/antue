<template>
  <div :class="`${this.prefixCls}-group`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      prefixCls: {
        type: String,
        default: 'ant-radio'
      }
    }
  }
</script>

<style>

</style>
