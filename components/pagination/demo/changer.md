---
order: 2
title:
  zh-CN: 改变
  en-US: Changer
---

## zh-CN

改变每页显示条目数。由于select组件尚未完成，暂时无法演示切换效果。

## en-US

Change `pageSize`. Cause lack of select component, can not display change by select different page size. 

```` html
<template>
  <div>
    <ant-page :total="600" :current="6" :page-size="20"></ant-page>
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
