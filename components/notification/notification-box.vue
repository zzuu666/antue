<template>
  <div :class="`${prefixCls} ${prefixCls}-${placement}`">
    <span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'notificationBox',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-notification'
    },
    placement: {
      type: String,
      validator (value) {
        return ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'].includes(value)
      },
      default: 'bottomRight'
    }
  }
}
</script>
<style lang="less" scoped>
.ant-notification-topLeft{
  top: 24px;
  left: 0;
}
.ant-notification-topRight{
  top: 24px;
  right: 0;
}
.ant-notification-bottomLeft{
  bottom: 24px;
  left: 0;
}
.ant-notification-bottomRight{
  bottom: 24px;
  right: 0;
}
</style>


