<template>
  <container title="Table 表格" profile="展示行列数据。">
    <h2>何时使用</h2>
    <p>当有大量结构化的数据需要展现时；</p>
    <p>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12">
      <a-col :span="24">
        <code-show title="基本用法" desc="简单的表格，最后一列是各种操作。">
          <base-demo></base-demo>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="带边框" desc="添加表格边框线。">
          <bordered-demo></bordered-demo>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="可选择" desc="通过 rowSelection 配置行选择功能。">
          <selection-demo></selection-demo>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="排序" desc="对某一列数据进行排序，通过指定列的 sorter 函数即可启动排序按钮。">
          <sort-demo></sort-demo>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="筛选" desc="对某一列数据进行筛选，使用列的 filters 属性来指定筛选菜单。">
          <filter-demo></filter-demo>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :span="24">
        <code-show title="三种尺寸" desc="通过 size 属性配置三种不同尺寸的表格。">
          <size-demo></size-demo>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :span="24">
        <code-show title="自定义渲染" desc="通过 render 函数自定义列的渲染内容。">
          <custom-render-demo></custom-render-demo>
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
  import BorderedDemo from './demo/bordered'
  import SelectionDemo from './demo/selection'
  import SortDemo from './demo/sort'
  import FilterDemo from './demo/filter'
  import SizeDemo from './demo/size'
  import CustomRenderDemo from './demo/custom-render'

  export default {
    components: {
      Container,
      ARow,
      ACol,
      CodeShow,
      BaseDemo,
      BorderedDemo,
      SelectionDemo,
      SortDemo,
      FilterDemo,
      SizeDemo,
      CustomRenderDemo
    }
  }
</script>

<style lang="less" scoped>
  .code-show {
    margin-top: 20px;
  }
</style>
