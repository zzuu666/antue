---
order: 3
title:
  zh-CN: 小数
  en-US: Decimals
---

## zh-CN

和原生的数字输入框一样，设置 `step` 属性可以控制每次改变的精度。

## en-US

A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals can be set with the `precision` prop.

```` html
<template>
  <div>
    <atu-input-number :min="0" :max="10" :step="0.1" :precision="1" :value="0"></atu-input-number>
  </div>
</template>

<script>
import AtuInputNumber from '@/input-number'

export default {
  components: {
    AtuInputNumber
  }
}
</script>
````
