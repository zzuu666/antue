<template>
  <container
    title="Timeline 时间轴">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-color />
    </code-show>
    <code-show>
      <demo-custom />
    </code-show>
    <code-show>
      <demo-pending />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoBasic from './demo/basic'
import DemoColor from './demo/color'
import DemoCustom from './demo/custom'
import DemoPending from './demo/pending'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoColor,
    DemoCustom,
    DemoPending
  }
}
</script>
