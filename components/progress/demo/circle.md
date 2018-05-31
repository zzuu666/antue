---
order: 1
title:
  zh-CN: 进度圈
  en-US: Circular progress bar
---

## zh-CN

圈形的进度。

## en-US

A circular progress bar.

```` html
<template>
  <div>
    <ant-progress type="circle" :percent="75" />
    <ant-progress type="circle" :percent="70" status="exception" />
    <ant-progress type="circle" :percent="100" />
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

<style>
.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
````
