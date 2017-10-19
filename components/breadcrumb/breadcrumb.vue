<template>
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    props: {
      prefixCls: {
        type: String,
        default: 'ant-breadcrumb'
      }
    }
  }
</script>

<style>

</style>
