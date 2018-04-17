<template>
  <atu-steps size="small">
    <atu-steps-step title="step 1" description="This is a description." />
    <atu-steps-step title="step 2" description="This is a description." />
    <atu-steps-step title="step 3" description="This is a description." />
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

