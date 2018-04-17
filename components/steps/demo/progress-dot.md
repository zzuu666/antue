---
order: 8
title:
  zh-CN: 点状步骤条
  en-US: Dot Style
---

## zh-CN

包含步骤点的进度条。

## en-US

Steps with progress dot style.

```` html
<template>
  <atu-steps progress-dot :current="1">
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
