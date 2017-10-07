---
order: 5
title:
  zh-CN: 预加载的卡片
  en-US: Loading card
---

## zh-CN

数据读入前会有文本块样式。

## en-US

Shows a loading indicator while the contents of the card is being fetched.

````vue
<template>
  <div>
    <ant-card title="Card title" style="width: 34%" :loading="true">
      Whatever content 
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
