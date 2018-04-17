---
order: 3
title:
  zh-CN: 步骤切换
  en-US: Switch Step
---

## zh-CN

通常配合内容及按钮使用，表示一个流程的处理进度。

## en-US

Cooperate with the content and buttons, to represent the progress of a process.

```` html
<template>
  <div>
    <atu-steps :current="current">
      <atu-steps-step
        v-for="step in steps"
        :key="step.title"
        :title="step.title"
        :description="step.content" />
    </atu-steps>
    <div class="steps-content">{{ steps[current].content }}</div>
    <div class="steps-action">
      <atu-button type="primary" @click="handleNext">Next</atu-button>
      <atu-button @click="handlePrev">Previous</atu-button>
    </div>
  </div>
</template>

<script>
import AtuButton from '@/button'
import AtuSteps from '@/steps'
const AtuStepsStep = AtuSteps.Step

export default {
  components: {
    AtuButton,
    AtuSteps,
    AtuStepsStep
  },
  data () {
    return {
      steps: [
        {
          title: 'First',
          content: 'First-content'
        }, {
          title: 'Second',
          content: 'Second-content'
        }, {
          title: 'Last',
          content: 'Last-content'
        }
      ],
      current: 0
    }
  },
  methods: {
    handleNext () {
      this.current = Math.min(this.steps.length - 1, this.current + 1)
    },
    handlePrev () {
      this.current = Math.max(0, this.current - 1)
    }
  }
}
</script>

<style lang="less" scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
.steps-action {
  margin-top: 24px;
}
</style>
````
