<template>
    <span>
      <span :class="`${prefixCls}-link`">
        <slot></slot>
      </span>
      <span :class="`${prefixCls}-separator`">{{separator}}</span>
    </span>
</template>

<script>
  export default {
    name: 'breadcrumb-item',
    props: {
      prefixCls: {
        type: String,
        default: 'ant-breadcrumb'
      },
      separator: {
        type: String,
        default: '/'
      }
    }
  }
</script>

<style>

</style>
