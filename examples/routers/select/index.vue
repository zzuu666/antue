<template>
  <container title="Select 选择器" profile="下拉选择器。">
    <h2>何时使用</h2>
    <p>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="基本使用" desc="基本使用。">
          <demo-basic></demo-basic>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="带搜索框" desc="展开后可对选项进行搜索。">
          <demo-search></demo-search>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="多选" desc="多选，从已有条目中选择。">
          <demo-multiple></demo-multiple>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="三种大小" desc="三种大小的选择框。">
          <demo-size></demo-size>
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
  import DemoBasic from './demo/basic'
  import DemoSearch from './demo/search'
  import DemoMultiple from './demo/multiple'
  import DemoSize from './demo/size'

  export default {
    components: {
      Container, ARow, ACol, CodeShow,
      DemoBasic, DemoSearch, DemoMultiple, DemoSize
    }
  }
</script>

<style lang="less" scoped>
  .code-show { margin-top: 20px; }
</style>
