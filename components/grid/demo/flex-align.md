---
order: 5
title:
  zh-CN: Flex 对齐
  en-US: Flex Alignment
---

## zh-CN

Flex 子元素垂直对齐。

## en-US

Flex child elements vertically aligned.

```` html
<template>
  <div id="components-grid-demo-flex-align">
    <a-row type="flex" class="grid-row grid-row-flex" justify="center" align="top">
      <a-col class="height-100" :span="4">col-4</a-col>
      <a-col class="height-50" :span="4">col-4</a-col>
      <a-col class="height-100" :span="4">col-4</a-col>
      <a-col class="height-50" :span="4">col-4</a-col>
    </a-row>
    <a-row type="flex" class="grid-row grid-row-flex" justify="space-around" align="middle">
      <a-col class="height-100" :span="4">col-4</a-col>
      <a-col class="height-50" :span="4">col-4</a-col>
      <a-col class="height-100" :span="4">col-4</a-col>
      <a-col class="height-50" :span="4">col-4</a-col>
    </a-row>
    <a-row type="flex" class="grid-row grid-row-flex" justify="space-between" align="bottom">
      <a-col class="height-100" :span="4">col-4</a-col>
      <a-col class="height-50" :span="4">col-4</a-col>
      <a-col class="height-100" :span="4">col-4</a-col>
      <a-col class="height-50" :span="4">col-4</a-col>
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
