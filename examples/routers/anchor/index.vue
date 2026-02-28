<template>
  <container title="Anchor 锚点" profile="用于跳转到页面指定位置。">
    <h2>何时使用</h2>
    <p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>
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
