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

``` html
<template>
  <div id="components-anchor-demo-basic">
    <Anchor>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
      <Link href="#api" title="API">
      <Link href="#anchor-props" title="Anchor Props" />
      <Link href="#link-props" title="Link Props" />
      </Link>
    </Anchor>
  </div>
</template>

<script>
import Anchor from '@/anchor'

export default {
  name: 'base-demo',
  components: {
    Anchor,
    Link: Anchor.Link
  }
}
</script>

<style>
.code-box-demo .ant-affix {
  z-index: 11;
}
</style>

```

