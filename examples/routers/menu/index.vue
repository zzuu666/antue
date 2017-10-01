<template>
  <container >
    <a-row :gutter="12">
      <a-col :span="24">
        <code-show class="menu-code" title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-horizontal></demo-horizontal>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show class="menu-code" title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-inline></demo-inline>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show class="menu-code" title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-inline-collapsed></demo-inline-collapsed>
        </code-show>
      </a-col>
      <a-col :span="24">
        <code-show class="menu-code" title="基础栅格" desc="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
          <demo-vertical></demo-vertical>
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
import DemoHorizontal from './demo/horizontal'
import DemoInline from './demo/inline'
import DemoInlineCollapsed from './demo/inline-collapsed'
import DemoVertical from './demo/vertical'

export default {
  components: {
    Container,
    CodeShow,
    ARow,
    ACol,
    DemoHorizontal,
    DemoInline,
    DemoInlineCollapsed,
    DemoVertical
  }
}
</script>


