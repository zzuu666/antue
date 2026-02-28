---
order: 1
title:
  zh-CN: 垂直分割线
  en-US: Vertical
---

## zh-CN

使用 `type="vertical"` 设置为行内的垂直分割线。

## en-US

Use `type="vertical"` make it vertical.

```` html
<template>
  <div>
    Text
    <atu-divider type="vertical"></atu-divider>
    <a href="#">Link</a>
    <atu-divider type="vertical"></atu-divider>
    <a href="#">Link</a>
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
