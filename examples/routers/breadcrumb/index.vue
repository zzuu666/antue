<template>
  <container
    title="Breadcrumb 面包屑"
    profile="显示当前页面在系统层级结构中的位置，并能向上返回">
    <h2>何时使用</h2>
    <p>当系统拥有超过两级以上的层级结构时；</p>
    <p>当系统拥有超过两级以上的层级结构时；</p>
    <p>当需要向上导航的功能。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12" style="margin-bottom: 20px">
    <a-col :span="24">
      <code-show title="典型卡片" desc="包含标题、内容、操作区域。">
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
  export default {
    components: {
      Container,
      ARow,
      ACol,
      CodeShow
    }
  }
</script>

<style lang="less" scoped>

</style>
