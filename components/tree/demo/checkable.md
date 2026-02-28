---
order: 1
title:
  zh-CN: 可勾选
  en-US: Checkable
---

## zh-CN

带勾选框的树。

## en-US

Tree with checkboxes.

```` html
<template>
  <div>
    <ant-tree
      :treeData="treeData"
      checkable
      defaultExpandAll
      @check="handleCheck"
    />
  </div>
</template>

<script>
import AntTree from '@/tree'

export default {
  components: {
    AntTree
  },
  data () {
    return {
      treeData: [
        {
          title: 'parent 1',
          key: '0-0',
          children: [
            { title: 'leaf 1-1', key: '0-0-0' },
            { title: 'leaf 1-2', key: '0-0-1' }
          ]
        },
        {
          title: 'parent 2',
          key: '0-1',
          children: [
            { title: 'leaf 2-1', key: '0-1-0' }
          ]
        }
      ]
    }
  },
  methods: {
    handleCheck (checkedKeys, info) {
      console.log('checked:', checkedKeys, info)
    }
  }
}
</script>
````
