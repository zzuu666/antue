---
order: 0
title:
  zh-CN: 进度条
  en-US: Progress bar
---

## zh-CN

标准的进度条。

## en-US

A standard progress bar.

```` html
<template>
  <div>
    <ant-progress :percent="30"></ant-progress>
    <ant-progress :percent="50" status="active"></ant-progress>
    <ant-progress :percent="70" status="exception"></ant-progress>
    <ant-progress :percent="100"></ant-progress>
    <ant-progress :percent="50" :show-info="false"></ant-progress>
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
