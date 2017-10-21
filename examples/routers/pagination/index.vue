<template>
  <container title="Pagination 分页" profile="采用分页的形式分隔长列表，每次只加载一个页面。">
    <h2>何时使用</h2>
    <p>当加载/渲染所有数据将花费很多时间时；</p>
    <p>可切换页码浏览数据。</p>
    <h2>代码演示</h2>
    <code-show title="基本使用" desc="基本使用">
      <base-demo></base-demo>
    </code-show>
    <code-show title="更多" desc="更多分页">
      <more-demo></more-demo>
    </code-show>
  </container>
</template>

<script>
  import Container from '../../common/container'
  import CodeShow from '../../common/code-show'
  import ARow from '@/row'
  import ACol from '@/col'
  import BaseDemo from './demo/base'
  import MoreDemo from './demo/more'

  export default {
    components: {
      Container,
      ARow,
      ACol,
      BaseDemo,
      CodeShow,
      MoreDemo
    }
  }
</script>

<style lang="less" scoped>
  .code-show {
    margin-top: 20px;
  }
</style>
