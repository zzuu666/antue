<template>
  <container
    title="Checkbox 多选框"
    profile="多选框。">
    <h2>何时使用</h2>
    <p>在一组可选项中进行多项选择时；</p>
    <p>单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</p>
    <h2>代码演示</h2>

    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="基本用法" desc="简单的 checkbox。">
          <demo-base></demo-base>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="不可用" desc="checkbox 不可用。">
          <checkbox-disabled></checkbox-disabled>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="受控的 Checkbox" desc="联动 checkbox。">
          <controll-checkbox></controll-checkbox>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="Checkbox 组" desc="方便的从数组生成 Checkbox 组。">
          <checkbox-group></checkbox-group>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="全选" desc="在实现全选效果时，你可能会用到 indeterminate 属性。">
          <check-all></check-all>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="布局" desc="Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。">
          <check-layout></check-layout>
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
  import DemoBase from './demo/base'
  import CheckboxDisabled from './demo/disabled'
  import ControllerCheckbox from './demo/controller'
  import CheckboxGroup from './demo/group'
  import CheckAll from './demo/check-all'
  import CheckLayout from './demo/layout'

  export default {
    components: {
      Container,
      CodeShow,
      ARow,
      ACol,
      DemoBase,
      CheckboxDisabled,
      ControllerCheckbox,
      CheckboxGroup,
      CheckAll,
      CheckLayout
    }
  }
</script>

<style lang="less" scoped>

</style>

