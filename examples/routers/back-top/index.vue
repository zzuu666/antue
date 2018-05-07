<template>
  <container title="BackTop 回到顶部" profile="返回页面顶部的操作按钮。" style="height: 18000px">
    <h2>何时使用</h2>
    <p>当页面内容区域比较长时；</p>
    <p>当用户需要频繁返回顶部查看相关内容时。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="基本使用" desc="基本使用">
          <base-demo></base-demo>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="自定义" desc="可以获得是否固定的状态。">
          <custom-demo></custom-demo>
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
  import BaseDemo from './demo/basic'
  import CustomDemo from './demo/custom'

  export default {
    components: {
      Container,
      ARow,
      ACol,
      BaseDemo,
      CustomDemo,
      CodeShow
    }
  }
</script>

<style lang="less" scoped>
  .code-show {
    margin-top: 20px;
  }
</style>
