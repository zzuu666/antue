<template>
  <div :class="prefixCls" :style="styles"></div>
</template>

<script>
export default {
  name: 'messageBox',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-message-box'
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

