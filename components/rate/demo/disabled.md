---
order: 3
title:
  zh-CN: 只读
  en-US: Read only
---

## zh-CN

只读，无法进行鼠标交互。

## en-US

Read only, can't use mouse to interact.

```` html
<template>
  <div>
    <ant-rate :disabled="disabled"></ant-rate>
  </div>
</template>
<script>
import AntRate from '@/rate'
export default {
  components: {
    AntRate
  },
  data () {
    return {
      disabled: true
    }
  }
}
</script>
````
