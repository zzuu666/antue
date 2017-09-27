---
order: 1
title:
  zh-CN: 半星
  en-US: Half star
---

## zh-CN

支持选中半星。

## en-US

Support select half star.

```` html
<template>
  <div>
    <ant-rate :allow-half="allowHalf"></ant-rate>
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
      allowHalf: true
    }
  }
}
</script>
````
