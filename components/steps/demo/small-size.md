---
order: 1
title:
  zh-CN: 迷你版
  en-US: Mini version
---

## zh-CN

迷你版的步骤条，通过设置 `<Steps size="small">` 启用.

## en-US

By setting like this: `<Steps size="small">`, you can get a mini version.

```` html
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

````
