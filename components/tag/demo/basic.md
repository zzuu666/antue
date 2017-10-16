---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `onClose` `afterClose` 两个事件。

## en-US

Usage of basic Tag, and it could be closable by set `closable` property. Closable Tag supports `onClose` `afterClose` events.

```` html
<template>
  <div>
    <atu-tag>Tag 1</atu-tag>
    <atu-tag closable @afterClose="test">Tag 2</atu-tag>
  </div>
</template>

<script>
import AtuTag from '@/tag'
export default {
  components: {
    AtuTag
  },
  methods: {
    test () {
      console.log('666')
    }
  }
}
</script>

````
