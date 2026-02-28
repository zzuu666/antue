---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

最基本的用法。

## en-US

The most basic usage of Transfer.

```` html
<template>
  <div>
    <ant-transfer
      :dataSource="dataSource"
      :targetKeys="targetKeys"
      @change="handleChange"
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
      targetKeys: ['3', '4'],
      dataSource: [
        { key: '1', title: 'content1' },
        { key: '2', title: 'content2' },
        { key: '3', title: 'content3' },
        { key: '4', title: 'content4' },
        { key: '5', title: 'content5' },
        { key: '6', title: 'content6' }
      ]
    }
  },
  methods: {
    handleChange (targetKeys, direction, moveKeys) {
      this.targetKeys = targetKeys
    }
  }
}
</script>
````
