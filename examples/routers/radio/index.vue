<template>
  <container title="Radio 单选框" profile="单选框。">
    <h2>何时使用</h2>
    <p>用于在多个备选项中选中单个状态。</p>
    <p>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="基本" desc="最简单的用法。">
          <base-demo></base-demo>
        </code-show>
        <code-show title="单选组合" desc="一组互斥的Radio配合使用。">
          <group-demo></group-demo>
        </code-show>
        <code-show title="RadioGroup 组合 - 配置方式" desc="通过配置 options 参数来渲染单选框。">
          <group-options-demo></group-options-demo>
        </code-show>
        <code-show title="单选组合 - 配合 name 使用" desc="可以为 RadioGroup 配置 name 参数，为组合内的 input 元素赋予相同的 name 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。">
          <group-with-name-demo></group-with-name-demo>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="不可用" desc="Radio不可用。">
          <disabled-demo></disabled-demo>
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
  import DisabledDemo from './demo/disable'
  import GroupDemo from './demo/group'
  import GroupOptionsDemo from './demo/group-options'
  import GroupWithNameDemo from './demo/group-with-name'

  export default {
    components: {
      Container,
      ARow,
      ACol,
      CodeShow,
      BaseDemo,
      DisabledDemo,
      GroupDemo,
      GroupOptionsDemo,
      GroupWithNameDemo
    }
  }
</script>

<style lang="less" scoped>
  .code-show {
    margin-top: 20px;
  }
</style>
