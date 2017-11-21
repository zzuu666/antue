<template>
  <container
    title="Tooltip 提示">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-slot />
    </code-show>
    <code-show>
      <demo-placement />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoBasic from './demo/basic'
import DemoSlot from './demo/slot'
import DemoPlacement from './demo/placement'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoSlot,
    DemoPlacement
  }
}
</script>
