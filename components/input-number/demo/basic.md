---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

数字输入框。

## en-US

Numeric-only input box.

```` html
<template>
  <div>
    <atu-input-number :min="1" :max="10" :value="3"></atu-input-number>
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
