---
order: 4
title: 
  zh-CN: 分隔符
  en-US: Configuring the Separator
---

## zh-CN

使用 `separator=">"` 可以自定义分隔符。

## en-US

The separator can be customized by setting the separator property: separator=">"

```` html
<template>
  <div>
    <breadcrumb separator=">">
      <breadcrumb-item>Home</breadcrumb-item>
      <breadcrumb-item href="">Application Center</breadcrumb-item>
      <breadcrumb-item href="">Application List</breadcrumb-item>
      <breadcrumb-item>An Application</breadcrumb-item>
    </breadcrumb>
  </div>
</template>

<script>
  import Breadcrumb from '@/breadcrumb'
  export default {
    components: {
      Breadcrumb,
      BreadcrumbItem: Breadcrumb.Item
    }
  }
</script>
````
