<template>
  <div :class="prefixCls" :style="style">
    {crumbs}
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
