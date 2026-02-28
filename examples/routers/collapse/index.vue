<template>
  <container title="Collapse 折叠面板" profile="可以折叠/展开的内容区域。">
    <h2>何时使用</h2>
    <p>对复杂区域进行分组和隐藏，保持页面的整洁。</p>
    <h2>代码演示</h2>
    <code-show title="折叠面板" desc="可以同时展开多个面板，这个例子默认展开了第一个。">
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
