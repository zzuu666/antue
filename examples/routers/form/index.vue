<template>
  <container title="Form 表单" profile="具有数据收集、校验和提交功能的表单。">
    <h2>何时使用</h2>
    <p>用于创建一个实体或收集信息。需要对输入的数据类型进行校验时。</p>
    <h2>代码演示</h2>
    <code-show title="基本使用" desc="基本的表单数据域控制展示。">
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
