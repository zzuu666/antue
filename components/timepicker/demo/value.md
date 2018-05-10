---
order: 1
title:
  zh-CN: 受控组件
  en-US: Under Control
---

## zh-CN

对于 Vue 来说，配合 `v-model` 可以实现受控组件。

## en-US

For Vue, use `v-model` the component could be controlled.

```` html
<template>
  <time-picker v-model="time"/>
</template>

<script>
import TimePicker from '@/timepicker'

export default {
  components: {
    TimePicker
  },
  data () {
    return {
      time: null
    }
  }
}
</script>

````
