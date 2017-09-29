---
order: 6
title: 
  zh-CN: Flex 排序
  en-US: Flex Order
---

## zh-CN

通过 Flex 布局的 Order 来改变元素的排序。

## en-US

To change the element sort by Flex layout order.

```` html
<template>
  <div id="components-grid-demo-flex-order">
    <a-row type="flex" class="grid-row grid-row-flex">
      <a-col class="grid-col" :span="6" :order="3">col-6 1 order-3</a-col>
      <a-col class="grid-col" :span="6" :order="4">col-6 2 order-4</a-col>
      <a-col class="grid-col" :span="6" :order="1">col-6 3 order-1</a-col>
      <a-col class="grid-col" :span="6" :order="2">col-6 4 order-2</a-col>
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
