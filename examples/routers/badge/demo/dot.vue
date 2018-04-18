<template>
  <div class="badge-container">
    <ant-badge dot>
      <ant-icon type="notification" />
    </ant-badge>
    <ant-badge dot>
      <a href="#">Link something</a>
    </ant-badge>
  </div>
</template>
<script>
import AntBadge from '@/badge'
import AntIcon from '@/icon'
export default {
  components: {
    AntBadge,
    AntIcon
  }
}
</script>
<style lang="less" scoped>
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
}
</style>
