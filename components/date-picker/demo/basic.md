---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

最简单的用法，在浮层中可以选择或者输入日期。

## en-US

Basic use case. Users can select or input a date in panel.

```` html
<template>
  <div>
    <ant-date-picker
      v-model="value"
      placeholder="请选择日期"
      style="width: 200px"
      @change="handleChange"
    />
  </div>
</template>

<script>
import AntDatePicker from '@/date-picker'

export default {
  components: {
    AntDatePicker
  },
  data () {
    return {
      value: undefined
    }
  },
  methods: {
    handleChange (date, dateString) {
      console.log('selected:', dateString)
    }
  }
}
</script>
````
