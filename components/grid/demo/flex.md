---
order: 4
title:
  zh-CN: Flex 布局
  en-US: Flex Layout
---

## zh-CN

Flex 布局基础。

使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。

## en-US

Use `row-flex` define` flex` layout, its child elements depending on the value of the `start`,` center`, `end`,` space-between`, `space-around`, which are defined in its parent node layout mode.

```` html
<template>
  <div id="components-grid-demo-flex">
    <p>sub-element align left</p>
    <a-row type="flex" class="grid-row grid-row-flex">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
    <p>sub-element align center</p>
    <a-row type="flex" class="grid-row grid-row-flex" justify="center">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
    <p>sub-element align right</p>
    <a-row type="flex" class="grid-row grid-row-flex" justify="end">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
    <p>sub-element monospaced arrangement</p>
     <a-row type="flex" class="grid-row grid-row-flex" justify="space-between">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
    <p>sub-element align full</p>
     <a-row type="flex" class="grid-row grid-row-flex" justify="space-around">
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
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
