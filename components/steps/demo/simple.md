---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

简单的步骤条。

## en-US

The most basic step bar.

```` html
<template>
  <atu-steps :current="1">
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
