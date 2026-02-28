---
order: 1
title:
  zh-CN: 多选
  en-US: Multiple Selection
---

## zh-CN

多选的树选择。

## en-US

Multiple selection usage.

```` html
<template>
  <div>
    <ant-tree-select
      v-model="value"
      :treeData="treeData"
      multiple
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
      value: [],
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
