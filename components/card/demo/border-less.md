---
order: 1
title:
  zh-CN: 无边框
  en-US: No border
---

## zh-CN

在灰色背景上使用无边框的卡片。

## en-US

A borderless card on a gray background.

````vue
<template>
  <div style="background: #ECECEC; padding: 30px">
    <ant-card style="width: 300px" :bordered="false">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </ant-card>
  </div>
</template>

<script>
  import AntCard from '@/card'
  export default {
    components: {
      AntCard
    }
  }
</script>
````
