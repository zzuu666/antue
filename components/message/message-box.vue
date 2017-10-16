<template>
  <div :class="prefixCls" :style="styles"></div>
</template>

<script>
export default {
  name: 'messageBox',
  data () {
    return {
      prefixCls: 'ant-message-box',
      styles: {}
    }
  }
}
</script>

