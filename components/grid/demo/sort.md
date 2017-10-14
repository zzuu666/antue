---
order: 3
title:
  zh-CN: 栅格排序
  en-US: Grid sort
---

## zh-CN

列排序。

通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

## en-US

By using `push` and` pull` class you can easily change column order.

```` html
<template>
  <div id="components-grid-demo-sort">
    <a-row>
      <a-col :push="6" :span="18">col-18 push-6</a-col>
      <a-col :pull="18" :span="6">col-6 pull-18</a-col>
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
