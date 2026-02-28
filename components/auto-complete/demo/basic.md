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
    <ant-auto-complete
      :dataSource="dataSource"
      placeholder="input here"
      style="width: 200px"
      @search="handleSearch"
    />
  </div>
</template>

<script>
import AntAutoComplete from '@/auto-complete'

export default {
  components: {
    AntAutoComplete
  },
  data () {
    return {
      dataSource: []
    }
  },
  methods: {
    handleSearch (value) {
      this.dataSource = !value
        ? []
        : [value, value + value, value + value + value]
    }
  }
}
</script>
````
