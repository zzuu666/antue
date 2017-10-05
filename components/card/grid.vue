<template>
  <div :class="[`${prefixCls}-grid`, className]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      prefixCls: {
        type: String,
        default: 'ant-card'
      },
      className: String
    }
  }
</script>
