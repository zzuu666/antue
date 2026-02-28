<template>
  <container title="AutoComplete 自动完成" profile="输入框自动完成功能。">
    <h2>何时使用</h2>
    <p>需要自动完成时。</p>
    <h2>代码演示</h2>
    <code-show title="基本使用" desc="基本使用。通过 dataSource 设置自动完成的数据源。">
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
