<template>
  <container title="DatePicker 日期选择框" profile="输入或选择日期的控件。">
    <h2>何时使用</h2>
    <p>当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。</p>
    <h2>代码演示</h2>
    <code-show title="基本" desc="最简单的用法，在浮层中可以选择或者输入日期。">
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
