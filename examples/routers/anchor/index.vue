<template>
  <container title="Anchor 锚点" profile="用于跳转到页面指定位置。" style="height: 18000px">
    <h2>何时使用</h2>
    <p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="基本" desc="最简单的用法" id="components-anchor-demo-basic">
          <base-demo></base-demo>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :span="12"></a-col>
      <a-col :span="12">
        <code-show title="静态位置" desc="不浮动，状态不随页面滚动变化。" id="components-anchor-demo-fixed">
          <fixed-demo></fixed-demo>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <h1 id="API">API</h1>
      <br/><br/>
      <div id="Anchor-Props">
        <h2>Anchor-Props</h2>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div id="Link-Props">
        <h2>Link-Props</h2>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </a-row>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import ARow from '@/row'
import ACol from '@/col'
import BaseDemo from './demo/base'
import FixedDemo from './demo/fixed'

export default {
  components: {
    Container,
    ARow,
    ACol,
    BaseDemo,
    FixedDemo,
    CodeShow
  }
}
</script>

<style lang="less" scoped>
.code-show {
  margin-top: 20px;
}
</style>
