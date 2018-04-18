<template>
  <div class="badge-container">
    <ant-badge :count="5">
      <a href="#" class="head-example"></a>
    </ant-badge>
    <ant-badge :count="0" showZero>
      <a href="#" class="head-example"></a>
    </ant-badge>
  </div>
</template>
<script>
import AntBadge from '@/badge'

export default {
  components: {
    AntBadge
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
