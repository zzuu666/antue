<template>
  <container title="Calendar 日历" profile="按照日历形式展示数据的容器。">
    <h2>何时使用</h2>
    <p>当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。</p>
    <h2>代码演示</h2>
    <code-show title="基本" desc="一个通用的日历面板，支持年/月切换。">
      <demo-basic></demo-basic>
    </code-show>
  </container>
</template>

<script>
  import Container from '../../common/container'
  import CodeShow from '../../common/code-show'
  import DemoBasic from './demo/basic'

  export default {
    components: {
      Container,
      CodeShow,
      DemoBasic
    }
  }
</script>

<style lang="less" scoped>
  .code-show { margin-top: 20px; }
</style>
