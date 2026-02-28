---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

基本使用。

## en-US

Basic usage.

```` html
<template>
  <div>
    <ant-select
      v-model="value"
      :options="options"
      placeholder="请选择"
      style="width: 200px"
      @change="handleChange"
    />
  </div>
</template>

<script>
import AntSelect from '@/select'

export default {
  components: {
    AntSelect
  },
  data () {
    return {
      value: undefined,
      options: [
        { label: 'Jack', value: 'jack' },
        { label: 'Lucy', value: 'lucy' },
        { label: 'Disabled', value: 'disabled', disabled: true },
        { label: 'Tom', value: 'tom' }
      ]
    }
  },
  methods: {
    handleChange (value) {
      console.log('selected:', value)
    }
  }
}
</script>
````
