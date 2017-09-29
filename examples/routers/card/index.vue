<template>
  <container
    title="Card 卡片"
    profile="通用卡片容器。">
    <h2>何时使用</h2>
    <p>最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12" style="margin-bottom: 20px">
      <a-col :span="24">
        <code-show title="典型卡片" desc="包含标题、内容、操作区域。">
          <base-demo title="Card title" extra="more"></base-demo>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12" style="margin-bottom: 20px">
      <a-col :span="24">
        <code-show title="无边框" desc="在灰色背景上使用无边框的卡片。">
          <base-demo title="Card title" extra="more" :bordered="false"></base-demo>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12" style="margin-bottom: 20px">
      <a-col :span="24">
        <code-show title="简洁卡片" desc="只包含内容区域。">
          <base-demo></base-demo>
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
  export default {
    components: {
      Container,
      ARow,
      ACol,
      BaseDemo,
      CodeShow
    }
  }
</script>

<style lang="less" scoped>

</style>
