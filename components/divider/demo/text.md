---
order: 2
title:
  zh-CN: 带文字的分割线
  en-US: Divider with title
---

## zh-CN

分割线中带有文字，可以用 `orientation` 指定文字位置。

## en-US

Divider with inner title, set `orientation` to align it.

```` html
<template>
  <div>
    <atu-divider>Text</atu-divider>
    <atu-divider orientation="left">Left Text</atu-divider>
    <atu-divider orientation="right">Right Text</atu-divider>
  </div>
</template>

<script>
import AtuDivider from '@/divider'

export default {
  components: {
    AtuDivider
  }
}
</script>
````
