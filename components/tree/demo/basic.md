---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

最简单的用法，展示可选中，展开等功能。

## en-US

The most basic usage, showing checkable, expandable and selectable.

```` html
<template>
  <div>
    <ant-tree
      :treeData="treeData"
      defaultExpandAll
      @select="handleSelect"
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
    handleSelect (selectedKeys, info) {
      console.log('selected:', selectedKeys, info)
    }
  }
}
</script>
````
