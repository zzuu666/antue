<template>
  <container
    title="Steps 步骤条">
    <code-show>
      <demo-basic />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoBasic from './demo/basic'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic
  }
}
</script>
