---
order: 6
title:
  zh-CN: 步骤运行错误
  en-US: Error status
---

## zh-CN

使用 Steps 的 `status` 属性来指定当前步骤的状态。

## en-US

By using `status` of `Steps`, you can specify the state for current step.

```` html
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
````
