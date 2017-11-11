---
order: 1
title:
  zh-CN: 更多
  en-US: More
---

## zh-CN

更多分页。

## en-US

More pages.

```` html
<template>
  <div>
    <ant-page :total="600" :current="6"></ant-page>
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
