---
order: 1
title:
  zh-CN: 日期格式
  en-US: Date Format
---

## zh-CN

使用 `format` 属性，可以自定义日期显示格式。

## en-US

We can set the date format by `format`.

```` html
<template>
  <div>
    <ant-date-picker
      v-model="value"
      format="YYYY/MM/DD"
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
