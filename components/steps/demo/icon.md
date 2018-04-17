---
order: 2
title:
  zh-CN: 带图标的步骤条
  en-US: With icon
---

## zh-CN

通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。

## en-US

You can use your own custom icons by setting the property `icon` for `Steps.Step`.

```` html
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


````
