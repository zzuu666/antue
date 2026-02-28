<template>
  <container title="InputNumber 数字输入框" profile="通过鼠标或键盘，输入范围内的数值。">
    <h2>何时使用</h2>
    <p>当需要获取标准数值时。</p>
    <h2>代码演示</h2>
    <code-show title="基本" desc="数字输入框。">
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
