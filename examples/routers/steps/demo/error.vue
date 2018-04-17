<template>
  <atu-steps :current="1" status="error">
    <atu-steps-step title="Finished" description="This is a description." />
    <atu-steps-step title="In Process" description="This is a description." />
    <atu-steps-step title="Waiting" description="This is a description." />
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
