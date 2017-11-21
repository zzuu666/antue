---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法，浮层的大小由内容区域决定。

## en-US

The most basic example. The size of the floating layer depends on the contents region.

```` html
<template>
  <atu-popover title="Title" content="test">
    <atu-button type="primary">Hover me</atu-button>
    <div slot="content">
      <p>content</p>
      <p>content</p>
    </div>
  </atu-popover>
</template>

<script>
import AtuPopover from '@/popover'
import AtuButton from '@/button'

export default {
  components: {
    AtuPopover,
    AtuButton
  }
}
</script>
````
