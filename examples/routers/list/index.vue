<template>
  <container title="List 列表" profile="最基础的列表展示，可承载文字、列表、图片、段落。">
    <h2>何时使用</h2>
    <p>最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。</p>
    <h2>代码演示</h2>
    <code-show title="简单列表" desc="列表拥有大、中、小三种尺寸。">
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
