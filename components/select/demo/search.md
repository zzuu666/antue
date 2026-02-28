---
order: 1
title:
  zh-CN: 带搜索框
  en-US: Select with search field
---

## zh-CN

展开后可对选项进行搜索。

## en-US

Search the options while expanded.

```` html
<template>
  <div>
    <ant-select
      v-model="value"
      :options="options"
      showSearch
      placeholder="Search to Select"
      style="width: 200px"
      @search="handleSearch"
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
        { label: 'Tom', value: 'tom' }
      ]
    }
  },
  methods: {
    handleSearch (value) {
      console.log('search:', value)
    }
  }
}
</script>
````
