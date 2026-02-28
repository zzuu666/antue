---
order: 1
title:
  zh-CN: 带搜索框
  en-US: Search
---

## zh-CN

带搜索框的穿梭框。

## en-US

Transfer with a search box.

```` html
<template>
  <div>
    <ant-transfer
      :dataSource="dataSource"
      :targetKeys="targetKeys"
      showSearch
      @change="handleChange"
      @search="handleSearch"
    />
  </div>
</template>

<script>
import AntTransfer from '@/transfer'

export default {
  components: {
    AntTransfer
  },
  data () {
    return {
      targetKeys: [],
      dataSource: [
        { key: '1', title: 'content1' },
        { key: '2', title: 'content2' },
        { key: '3', title: 'content3' },
        { key: '4', title: 'content4' }
      ]
    }
  },
  methods: {
    handleChange (targetKeys) {
      this.targetKeys = targetKeys
    },
    handleSearch (direction, value) {
      console.log('search:', direction, value)
    }
  }
}
</script>
````
