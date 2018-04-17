<template>
  <container
    title="Steps 步骤条">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-small-size />
    </code-show>
    <code-show>
      <demo-icon />
    </code-show>
    <code-show>
      <demo-next-step />
    </code-show>
    <code-show>
      <demo-vertical />
    </code-show>
    <code-show>
      <demo-vertical-small />
    </code-show>
    <code-show>
      <demo-error />
    </code-show>
    <code-show>
      <demo-progress-dot />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoBasic from './demo/basic'
import DemoSmallSize from './demo/small-size'
import DemoIcon from './demo/icon'
import DemoNextStep from './demo/next-step'
import DemoVertical from './demo/vertical'
import DemoVerticalSmall from './demo/vertical-small'
import DemoError from './demo/error'
import DemoProgressDot from './demo/progress-dot'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoSmallSize,
    DemoIcon,
    DemoNextStep,
    DemoVertical,
    DemoVerticalSmall,
    DemoError,
    DemoProgressDot
  }
}
</script>
