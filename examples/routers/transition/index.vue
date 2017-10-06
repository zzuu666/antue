<template>
  <container
    title="Transition 动画">
    <code-show>
      <demo-normal></demo-normal>
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoNormal from './demo/normal'

export default {
  components: {
    Container,
    CodeShow,
    DemoNormal
  }
}
</script>
