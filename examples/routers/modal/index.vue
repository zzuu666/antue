<template>
  <container title="Modal 对话框" profile="模态对话框。">
    <h2>何时使用</h2>
    <p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="基本" desc="第一个对话框。">
          <demo-basic></demo-basic>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="自定义页脚" desc="自定义了页脚的按钮，或不需要默认确认取消按钮。">
          <demo-footer></demo-footer>
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="居中显示" desc="使用 centered 属性垂直居中展示对话框。">
          <demo-centered></demo-centered>
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
  import DemoFooter from './demo/footer'
  import DemoCentered from './demo/centered'

  export default {
    components: {
      Container, ARow, ACol, CodeShow,
      DemoBasic, DemoFooter, DemoCentered
    }
  }
</script>

<style lang="less" scoped>
  .code-show { margin-top: 20px; }
</style>
