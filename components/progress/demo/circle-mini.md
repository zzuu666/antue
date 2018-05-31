---
order: 3
title:
  zh-CN: 小型进度圈
  en-US: Mini size circular progress bar
---

## zh-CN

小一号的圈形进度。

## en-US

A smaller circular progress bar.

```` html
<template>
  <div>
    <ant-progress type="circle" :percent="30" :width="80" />
    <ant-progress type="circle" :percent="70" :width="80" status="exception" />
    <ant-progress type="circle" :percent="100" :width="80" />
  </div>
</template>
<script>
  import AntProgress from '@/progress'

  export default {
    components: {
      AntProgress
    }
  }
</script>
````
