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
    <code-show>
      <demo-slide></demo-slide>
    </code-show>
    <code-show>
      <demo-extra></demo-extra>
    </code-show>
    <code-show>
      <demo-size></demo-size>
    </code-show>
    <code-show>
      <demo-position></demo-position>
    </code-show>
    <code-show>
      <demo-card></demo-card>
    </code-show>
    <code-show>
      <demo-editable-card></demo-editable-card>
    </code-show>
    <code-show>
      <demo-custom-add></demo-custom-add>
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoBasic from './demo/basic'
import DemoDisabled from './demo/disabled'
import DemoIcon from './demo/icon'
import DemoSlide from './demo/slide'
import DemoExtra from './demo/extra'
import DemoSize from './demo/size'
import DemoPosition from './demo/position'
import DemoCard from './demo/card'
import DemoEditableCard from './demo/editable-card'
import DemoCustomAdd from './demo/custom-add'

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
    DemoIcon,
    DemoSlide,
    DemoExtra,
    DemoSize,
    DemoPosition,
    DemoCard,
    DemoEditableCard,
    DemoCustomAdd
  }
}
</script>
