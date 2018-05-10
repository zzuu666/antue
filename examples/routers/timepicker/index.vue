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
    <code-show>
      <demo-disabled />
    </code-show>
    <code-show>
      <demo-disable-options />
    </code-show>
    <code-show>
      <demo-addon />
    </code-show>
    <code-show>
      <demo-hide-column />
    </code-show>
    <code-show>
      <demo12-hours />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoBasic from './demo/basic'
import DemoValue from './demo/value'
import DemoSize from './demo/size'
import DemoDisabled from './demo/disabled'
import DemoDisableOptions from './demo/disable-options'
import DemoAddon from './demo/addon'
import DemoHideColumn from './demo/hide-column'
import Demo12Hours from './demo/12hours'

// import moment from 'moment'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoValue,
    DemoSize,
    DemoDisabled,
    DemoDisableOptions,
    DemoAddon,
    DemoHideColumn,
    Demo12Hours
  }
}
</script>

