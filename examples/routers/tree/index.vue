<template>
  <container title="Tree 树形控件" profile="文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。">
    <h2>何时使用</h2>
    <p>几乎可以在需要用树形结构展示的任何地方使用。</p>
    <h2>代码演示</h2>
    <code-show title="基本" desc="最简单的用法，展示可选中，默认展开等功能。">
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
