---
order: 2
title:
  zh-CN: 多选
  en-US: Multiple selection
---

## zh-CN

多选，从已有条目中选择。

## en-US

Multiple selection, selecting from existing items.

```` html
<template>
  <div>
    <ant-select
      v-model="value"
      :options="options"
      multiple
      placeholder="Please select"
      style="width: 300px"
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
      value: [],
      options: [
        { label: 'Jack', value: 'jack' },
        { label: 'Lucy', value: 'lucy' },
        { label: 'Tom', value: 'tom' },
        { label: 'Jerry', value: 'jerry' },
        { label: 'Kate', value: 'kate' }
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
