---
order: 2
title:
  zh-CN: 左右偏移
  en-US: Column offset
---

## zh-CN

列偏移。

使用 `offset` 可以将列向右侧偏。例如，`:offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。

## en-US

`Offset` can set the column to the right side. For example, using `:offset="4"` can set the element shifted to the right four columns width.

```` html
<template>
  <div id="components-grid-demo-offset">
    <a-row>
      <a-col :span="8">col-8</a-col>
      <a-col offset="8" :span="8">col-8</a-col>
    </a-row>
    <a-row class="grid-row">
      <a-col offset="6" :span="6">col-6</a-col>
      <a-col offset="6" :span="6">col-6</a-col>
    </a-row>
    <a-row class="grid-row">
      <a-col offset="6" :span="12">col-12 offset-6</a-col>
    </a-row>
  </div>
</template>

<script>
import ARow from '@/row'
import ACol from '@/col'

export default {
  components: {
    ARow,
    ACol
  }
}
</script>

````
