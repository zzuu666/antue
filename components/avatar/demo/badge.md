---
order: 3
title:
  zh-CN: 带徽标的头像
  en-US: With Badge
---

## zh-CN

通常用于消息提示。

## en-US

Usually used for messages remind.

```` html
<template>
  <div>
    <Badge :count="1"><Avatar shape="square" icon="user"/></Badge>
    <Badge dot><Avatar shape="square" icon="user"/></Badge>
  </div>
</template>
<script>
  import Avatar from '@/avatar'
  import Badge from '@/badge'
  export default {
    components: {
      Avatar,
      Badge
    }
  }
</script>
<style>
  #components-avatar-demo-type .ant-avatar {
    margin-top: 16px;
    margin-right: 16px;
  }
</style>
````
