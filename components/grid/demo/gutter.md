---
order: 1
title:
  zh-CN: 区块间隔
  en-US: Grid Gutter
---

## zh-CN

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔。(n 是自然数)

## en-US

You can use the `gutter` property of `Row` as grid spacing, we recommend set it to `(16 + 8n) px`. (`n` stands for natural number.)

```` html
<template>
  <div id="components-grid-demo-gutter">
    <a-row class="grid-row" :gutter="16">
      <a-col :span="6">
        <p>col-6</p>
      </a-col>
      <a-col :span="6">
        <p>col-6</p>
      </a-col>
      <a-col :span="6">
        <p>col-6</p>
      </a-col>
      <a-col :span="6">
        <p>col-6</p>
      </a-col>
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
