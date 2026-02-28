---
order: 0
title:
  zh-CN: 简单列表
  en-US: Simple list
---

## zh-CN

简单的列表。

## en-US

Simple list.

```` html
<template>
  <div>
    <ant-list>
      <ant-list-item>Item 1</ant-list-item>
      <ant-list-item>Item 2</ant-list-item>
      <ant-list-item>Item 3</ant-list-item>
    </ant-list>
  </div>
</template>

<script>
import AntList from '@/list'

const AntListItem = AntList.Item

export default {
  components: {
    AntList,
    AntListItem
  }
}
</script>
````
