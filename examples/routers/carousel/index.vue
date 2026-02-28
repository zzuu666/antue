<template>
  <container title="Carousel 走马灯" profile="旋转木马，一组轮播的区域。">
    <h2>何时使用</h2>
    <p>当有一组平级的内容。当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</p>
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
