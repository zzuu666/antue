<template>
  <atu-steps>
    <atu-steps-step status="finish" title="Login">
      <atu-icon slot="icon" type="user"/>
    </atu-steps-step>
    <atu-steps-step status="finish" title="Verification">
      <atu-icon slot="icon" type="solution"/>
    </atu-steps-step>
    <atu-steps-step status="process" title="Pay">
      <atu-icon slot="icon" type="credit-card"/>
    </atu-steps-step>
    <atu-steps-step status="wait" title="Done">
      <atu-icon slot="icon" type="smile-o"/>
    </atu-steps-step>
  </atu-steps>
</template>

<script>
import AtuSteps from '@/steps'
import AtuIcon from '@/icon'
const AtuStepsStep = AtuSteps.Step

export default {
  components: {
    AtuIcon,
    AtuSteps,
    AtuStepsStep
  }
}
</script>

