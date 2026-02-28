<template>
  <container title="Divider 分割线" profile="区隔内容的分割线。">
    <h2>何时使用</h2>
    <p>对不同章节的文本段落进行分割。对行内文字/链接进行分割，例如表格的操作列。</p>
    <h2>代码演示</h2>
    <code-show title="基本" desc="默认为水平分割线，可在中间加入文字。可设置为虚线以及竖直分割线。">
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
