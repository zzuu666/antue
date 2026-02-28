<template>
  <container title="Alert 警告提示" profile="警告提示，展现需要关注的信息。">
    <h2>何时使用</h2>
    <p>当某个页面需要向用户显示警告的信息时。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="基本" desc="最简单的用法，适用于简短的警告提示。">
          <demo-basic></demo-basic>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="含有辅助性文字介绍" desc="含有辅助性文字介绍的警告提示。">
          <demo-desc></demo-desc>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="图标" desc="可口的图标让信息类型更加醒目。">
          <demo-icon></demo-icon>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="可关闭" desc="显示关闭按钮，点击可关闭警告提示。">
          <demo-closable></demo-closable>
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
  import DemoDesc from './demo/description'
  import DemoIcon from './demo/icon'
  import DemoClosable from './demo/closable'

  export default {
    components: {
      Container, ARow, ACol, CodeShow,
      DemoBasic, DemoDesc, DemoIcon, DemoClosable
    }
  }
</script>

<style lang="less" scoped>
  .code-show { margin-top: 20px; }
</style>
