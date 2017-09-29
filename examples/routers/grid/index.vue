<template>
  <container
    title="Grid 栅格"
    profile="按钮用于开始一个即时操作。">
    <h2>何时使用</h2>
    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
    <h2>代码演示</h2>
    
    <a-row :gutter="12">
      <a-col :span="24">
        <code-show title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-basic></demo-basic>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-gutter></demo-gutter>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-offset></demo-offset>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-sort></demo-sort>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-flex></demo-flex>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-align></demo-align>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-order></demo-order>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-reponsive></demo-reponsive>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-reponsive-more></demo-reponsive-more>
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
import DemoGutter from './demo/gutter'
import DemoOffset from './demo/offset'
import DemoSort from './demo/sort'
import DemoFlex from './demo/flex'
import DemoAlign from './demo/flex-align'
import DemoOrder from './demo/flex-order'
import DemoReponsive from './demo/reponsive'
import DemoReponsiveMore from './demo/reponsive-more'

export default {
  components: {
    Container,
    ARow,
    ACol,
    CodeShow,
    DemoBasic,
    DemoGutter,
    DemoOffset,
    DemoSort,
    DemoFlex,
    DemoAlign,
    DemoOrder,
    DemoReponsive,
    DemoReponsiveMore
  }
}
</script>

<style lang="less">
.grid-row {
  margin: 8px 0;
  &-flex {
    padding: 8px 0;
    background-color: #f5f5f5;
  }
}
.grid-col {
  background-color: #00a0e9;
  color: #fff;
  padding: 16px 0;
  &:nth-child(odd) {
    background-color: rgba(0,160,233,.7)
  }
}
</style>

