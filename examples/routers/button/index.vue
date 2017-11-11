<template>
  <container
    title="Button 按钮"
    profile="按钮用于开始一个即时操作。">
    <h2>何时使用</h2>
    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
    <h2>代码演示</h2>

    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="按钮类型" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-base></demo-base>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="图标按钮" desc="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。">
          <icon-base></icon-base>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="按钮组" desc="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。">
          <button-group></button-group>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="按钮组" desc="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。">
          <button-disabled></button-disabled>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="幽灵按钮" desc="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。">
          <button-ghost></button-ghost>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="幽灵按钮" desc="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。">
          <button-size></button-size>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="幽灵按钮" desc="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。">
          <button-loading></button-loading>
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
import IconBase from './demo/icon'
import ButtonGroup from './demo/button-group'
import ButtonDisabled from './demo/disabled'
import ButtonGhost from './demo/ghost'
import ButtonSize from './demo/size'
import ButtonLoading from './demo/loading'

export default {
  components: {
    Container,
    ARow,
    ACol,
    DemoBase,
    IconBase,
    CodeShow,
    ButtonGroup,
    ButtonDisabled,
    ButtonGhost,
    ButtonSize,
    ButtonLoading
  }
}
</script>

<style lang="less" scoped>

</style>

