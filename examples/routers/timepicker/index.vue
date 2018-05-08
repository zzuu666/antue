<template>
  <container
    title="TimePicker 时间选择框">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-value />
    </code-show>
    <code-show>
      <demo-size />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoBasic from './demo/basic'
import DemoValue from './demo/value'
import DemoSize from './demo/size'

// import moment from 'moment'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoValue,
    DemoSize
  }
}
</script>

