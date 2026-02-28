<template>
  <container title="Upload 上传" profile="文件选择上传和拖拽上传控件。">
    <h2>何时使用</h2>
    <p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p>
    <h2>代码演示</h2>
    <code-show title="点击上传" desc="经典款式，用户点击按钮弹出文件选择框。">
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
