---
order: 2
title:
  zh-CN: 固定
  en-US: Fixed Anchor
---

## zh-CN

不浮动，状态不随页面滚动变化。

## en-US

Do not change state when page is scrolling.

``` html
<template>
  <div id="components-anchor-demo-fixed">
    <Anchor :affix="false">
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
      <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
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

```
