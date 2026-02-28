<template>
  <container title="Drawer 抽屉" profile="屏幕边缘滑出的浮层面板。">
    <h2>何时使用</h2>
    <p>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。</p>
    <h2>代码演示</h2>
    <code-show title="基本" desc="基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。">
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
