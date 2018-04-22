<template>
  <container title="Affix 固钉" profile="将页面元素钉在可视范围。" style="height: 18000px">
    <h2>何时使用</h2>
    <p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p>
    <p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="基本使用" desc="基本使用">
          <base-demo></base-demo>
        </code-show>
        <code-show title="滚动容器" desc="用 target 设置 Affix 需要监听其滚动事件的元素，默认为 window。">
          <target-demo></target-demo>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="固定状态改变的回调" desc="可以获得是否固定的状态。">
          <on-change-demo></on-change-demo>
        </code-show>
      </a-col>
    </a-row>
  </container>
</template>

<script>
  import Container from '../../common/container'
  import CodeShow from '../../common/code-show'
  import ARow from '@/row'
  import ACol from '@/col'
  import BaseDemo from './demo/base'
  import OnChangeDemo from './demo/on-change'
  import TargetDemo from './demo/target'

  export default {
    components: {
      Container,
      ARow,
      ACol,
      BaseDemo,
      OnChangeDemo,
      TargetDemo,
      CodeShow
    }
  }
</script>

<style lang="less" scoped>
  .code-show {
    margin-top: 20px;
  }
</style>
