---
order: 3
title:
  zh-CN: 禁用
  en-US: disabled
---

## zh-CN

禁用时间选择。

## en-US

A disabled state of the `TimePicker`.


```` html
<template>
  <time-picker v-model="time" disabled/>
</template>

<script>
import TimePicker from '@/timepicker'
import moment from 'moment'

export default {
  components: {
    TimePicker
  },
  data () {
    return {
      time: moment('12:08:23', 'HH:mm:ss')
    }
  }
}
</script>

````
