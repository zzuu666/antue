---
order: 2
title:
  zh-CN: 简洁卡片
  en-US: Simple card
---

## zh-CN

只包含内容区域。

## en-US

A simple card only containing a content area.

```` html
<template>
  <div>
    <ant-card style="width: 300px">
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
