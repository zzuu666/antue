---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

```` html
<template>
  <ant-anchor>
    <ant-anchor-link href="#components-anchor-demo-basic" title="Basic demo"></ant-anchor-link>
    <ant-anchor-link href="#components-anchor-demo-static" title="Static demo"></ant-anchor-link>
    <ant-anchor-link href="#API" title="API">
      <ant-anchor-link href="#Anchor-Props" title="Anchor Props"></ant-anchor-link>
      <ant-anchor-link href="#Link-Props" title="Link Props"></ant-anchor-link>
    </ant-anchor-link>
  </ant-anchor>
</template>

<script>
import AntAnchor from '@/anchor'

const AntAnchorLink = AntAnchor.Link

export default {
  components: {
    AntAnchor,
    AntAnchorLink
  }
}
</script>
````
