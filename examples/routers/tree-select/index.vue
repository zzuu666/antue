<template>
  <container title="TreeSelect 树选择" profile="树型选择控件。">
    <h2>何时使用</h2>
    <p>类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect。</p>
    <h2>代码演示</h2>
    <code-show title="基本" desc="最简单的用法。">
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
