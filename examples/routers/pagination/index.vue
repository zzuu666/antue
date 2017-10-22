<template>
  <container title="Pagination 分页" profile="采用分页的形式分隔长列表，每次只加载一个页面。">
    <h2>何时使用</h2>
    <p>当加载/渲染所有数据将花费很多时间时；</p>
    <p>可切换页码浏览数据。</p>
    <h2>代码演示</h2>
    <code-show title="基本使用" desc="基础分页。">
      <base-demo></base-demo>
    </code-show>
    <code-show title="更多" desc="更多分页。">
      <more-demo></more-demo>
    </code-show>
    <!--<code-show title="改变" desc="改变每页显示条目数。">-->
      <!--<page-size-demo></page-size-demo>-->
    <!--</code-show>-->
    <code-show title="跳转" desc="快速跳转到某一页。">
      <jump-demo></jump-demo>
    </code-show>
    <code-show title="受控" desc="受控制的页码。">
      <controlled-demo></controlled-demo>
    </code-show>
    <code-show title="上一步和下一步" desc="修改上一步和下一步为文字链接。">
      <custom-demo></custom-demo>
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
  import PageSizeDemo from './demo/pagesize'
  import JumpDemo from './demo/jump'
  import ControlledDemo from './demo/controlled'
  import CustomDemo from './demo/custom'

  export default {
    components: {
      Container,
      ARow,
      ACol,
      BaseDemo,
      CodeShow,
      MoreDemo,
      PageSizeDemo,
      JumpDemo,
      ControlledDemo,
      CustomDemo
    }
  }
</script>

<style lang="less" scoped>
  .code-show {
    margin-top: 20px;
  }
</style>
