<template>
  <container>
    <code-show>
      <demo-basic></demo-basic>
    </code-show>
    <code-show>
      <demo-disabled></demo-disabled>
    </code-show>
    <code-show>
      <demo-icon></demo-icon>
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoBasic from './demo/basic'
import DemoDisabled from './demo/disabled'
import DemoIcon from './demo/icon'

export default {
  data () {
    return {
      active: 1
    }
  },
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoDisabled,
    DemoIcon
  }
}
</script>
