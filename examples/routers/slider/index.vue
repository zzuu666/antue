<template>
  <container title="Slider 滑动输入条" profile="滑动型输入器，展示当前值和可选范围。">
    <h2>何时使用</h2>
    <p>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</p>
    <h2>代码演示</h2>
    <code-show title="基本" desc="基本滑动条。当 range 为 true 时，渲染为双滑块。">
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
