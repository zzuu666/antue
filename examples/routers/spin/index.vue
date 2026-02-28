<template>
  <container title="Spin 加载中" profile="用于页面和区块的加载中状态。">
    <h2>何时使用</h2>
    <p>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</p>
    <h2>代码演示</h2>
    <code-show title="基本用法" desc="一个简单的 loading 状态。">
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
