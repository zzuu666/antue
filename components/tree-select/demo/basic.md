---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

```` html
<template>
  <div>
    <ant-tree-select
      v-model="value"
      :treeData="treeData"
      placeholder="请选择"
      style="width: 300px"
      @change="handleChange"
    />
  </div>
</template>

<script>
import AntTreeSelect from '@/tree-select'

export default {
  components: {
    AntTreeSelect
  },
  data () {
    return {
      value: undefined,
      treeData: [
        { title: 'Node 1', value: '0-0', key: '0-0', children: [
          { title: 'Child Node 1', value: '0-0-1', key: '0-0-1' },
          { title: 'Child Node 2', value: '0-0-2', key: '0-0-2' }
        ]},
        { title: 'Node 2', value: '0-1', key: '0-1' }
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
