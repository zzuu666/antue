---
order: 1
title:
  zh-CN: 带有图标的
  en-US: With an Icon
---

## zh-CN

图标放在文字前面。

## en-US

The icon should be placed in front of the text.

```` html
<template>
  <div>
    <breadcrumb>
      <breadcrumb-item>
        <Icon type="home" />
      </breadcrumb-item>
      <breadcrumb-item href="">
        <Icon type="user" />
        <span>Application List</span>
      </breadcrumb-item>
      <breadcrumb-item>An Application</breadcrumb-item>
    </breadcrumb>
  </div>
</template>

<script>
  import Breadcrumb from '@/breadcrumb'
  import Icon from '@/icon'
  export default {
    components: {
      Breadcrumb,
      BreadcrumbItem: Breadcrumb.Item,
      Icon
    }
  }
</script>
````
