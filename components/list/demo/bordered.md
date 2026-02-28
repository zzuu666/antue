---
order: 1
title:
  zh-CN: 带边框列表
  en-US: Bordered list
---

## zh-CN

带边框和头部、底部的列表。

## en-US

List with header, footer and border.

```` html
<template>
  <div>
    <ant-list bordered header="Header" footer="Footer">
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
