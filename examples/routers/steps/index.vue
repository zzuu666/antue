<template>
  <container
    title="Steps 步骤条">
    <!-- <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-small-size />
    </code-show> -->
    <code-show>
      <demo-icon />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoBasic from './demo/basic'
import DemoSmallSize from './demo/small-size'
import DemoIcon from './demo/icon'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoSmallSize,
    DemoIcon
  }
}
</script>
