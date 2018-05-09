---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

## en-US

Click `TimePicker`, and then we could select or input a time in panel.

```` html
<template>
  <time-picker
    :value="time"
    @change="handleChange"/>
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
      time: moment('00:00:00', 'HH:mm:ss')
    }
  },
  methods: {
    handleChange (value, string) {
      this.time = value
      console.log(string)
    }
  }
}
</script>

````
