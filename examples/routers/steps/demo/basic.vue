<template>
  <atu-steps>
    <atu-steps-step title="step 1" description="1" />
    <atu-steps-step title="step 2" description="2" />
    <atu-steps-step title="step 3" description="3" />
  </atu-steps>
</template>

<script>
import AtuSteps from '@/steps'
const AtuStepsStep = AtuSteps.Step

export default {
  components: {
    AtuSteps,
    AtuStepsStep
  }
}
</script>

