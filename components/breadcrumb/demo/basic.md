---
order: 0
title:
  zh-CN: 基本
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

The simplest use

```` html
<template>
 <div>
   <breadcrumb>
     <breadcrumb-item>Home</breadcrumb-item>
     <breadcrumb-item><a href="">Application Center</a></breadcrumb-item>
     <breadcrumb-item :to="{path: '/'}">Application List</breadcrumb-item>
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
