---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。

## en-US

Simplest Usage. Badge will be hidden when `count` is `0`, but we can use `showZero` to show it.

```` html
<template>
  <div class="badge-container">
    <ant-badge :count="5">
      <a href="#" class="head-example"></a>
    </ant-badge>
    <ant-badge :count="0" showZero>
      <a href="#" class="head-example"></a>
    </ant-badge>
  </div>
</template>
<script>
import AntBadge from '@/badge'

export default {
  components: {
    AntBadge
  }
}
</script>
<style lang="less" scoped>
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
}
</style>
````

<style>
.ant-badge:not(.ant-badge-status) {
  margin-right: 16px;
}
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background: #eee;
  display: inline-block;
}
</style>
