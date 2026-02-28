---
order: 1
title:
  zh-CN: 三种大小
  en-US: Sizes
---

## zh-CN

三种大小的数字输入框，当 `size` 分别为 `large` 和 `small` 时，输入框高度为 `32px` 和 `22px`，默认高度为 `28px`。

## en-US

There are three sizes available to a numeric input box. By default, the size is `28px`. The two additional sizes are `large` and `small` which means `32px` and `22px`, respectively.

```` html
<template>
  <div>
    <atu-input-number size="small" :min="1" :max="10" :value="3"></atu-input-number>
    <atu-input-number :min="1" :max="10" :value="3"></atu-input-number>
    <atu-input-number size="large" :min="1" :max="10" :value="3"></atu-input-number>
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
