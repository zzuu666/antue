---
order: 2
title:
  zh-CN: RadioGroup 垂直
  en-US: Vertical RadioGroup
---

## zh-CN

垂直的 RadioGroup，配合更多输入框选项。

## en-US

Vertical RadioGroup, with more radios.

```` html
<template>
  <div>
    <radio-group v-model="checkedValue">
      <radio value="1" :style="radioStyle">Option A</radio>
      <radio value="2" :style="radioStyle">Option B</radio>
      <radio value="3" :style="radioStyle">Option C</radio>
      <radio value="4" :style="radioStyle">
        More...
        <atu-input v-if="this.checkedValue === '4'" style="width: 100px; margin-left: 10px"></atu-input>
      </Radio>
    </radio-group>
  </div>
</template>

<script>
  import Radio from '@/radio'
  import AtuInput from '@/input'
  export default {
    data () {
      return {
        checkedValue: '1',
        radioStyle: {
          display: 'block',
          height: '30px',
          lineHeight: '30px'
        }
      }
    },
    components: {
      Radio,
      RadioGroup: Radio.Group,
      AtuInput
    }
  }
</script>
````
