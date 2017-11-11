---
order: 3
title:
  zh-CN: 跳转
  en-US: Jumper
---

## zh-CN

快速跳转到某一页。

## en-US

Jump to a page directly.

```` html
<template>
  <div>
    <ant-page :total="600" :current="6" showQuickJumper></ant-page>
  </div>
</template>

<script>
  import AntPage from '@/pagination'
  export default {
    components: {
      AntPage
    }
  }
</script>
````
