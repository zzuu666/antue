<template>
  <container title="Cascader 级联选择" profile="级联选择框。">
    <h2>何时使用</h2>
    <p>需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。</p>
    <h2>代码演示</h2>
    <code-show title="基本" desc="省市区级联。">
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
