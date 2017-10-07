---
order: 0
title:
  zh-CN: 典型卡片
  en-US: Basic card
---

## zh-CN

包含标题、内容、操作区域。

## en-US

A basic card containing a title, content and an extra corner content.

````vue
<template>
  <div>
    <ant-card :title="title" style="width: 300px">
      <a href="#" slot="extra">More</a>
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
