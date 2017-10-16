<template>
  <container
    title="Tag 标签">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-colorful />
    </code-show>
    <code-show>
      <demo-checkable />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import ARow from '@/row'
import Icon from '@/icon'
import ACol from '@/col'
import DemoBasic from './demo/basic'
import DemoColorful from './demo/colorful'
import DemoCheckable from './demo/checkable'

export default {
  components: {
    Container,
    ARow,
    ACol,
    CodeShow,
    DemoBasic,
    DemoColorful,
    DemoCheckable,
    Icon
  }
}
</script>

