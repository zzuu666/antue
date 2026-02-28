---
order: 2
title:
  zh-CN: 不可用
  en-US: Disabled
---

## zh-CN

点击按钮切换可用状态。

## en-US

Click the button to toggle between available and disabled states.

```` html
<template>
  <div>
    <atu-input-number :min="1" :max="10" :value="3" disabled></atu-input-number>
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
