<template>
  <container title="Transfer 穿梭框" profile="双栏穿梭选择框。">
    <h2>何时使用</h2>
    <p>用直观的方式在两栏中移动元素，完成选择行为。</p>
    <h2>代码演示</h2>
    <code-show title="基本用法" desc="最基本的用法，展示了 dataSource、targetKeys、每行的渲染函数 render 以及回调函数 change 的用法。">
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
