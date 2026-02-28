---
order: 1
title:
  zh-CN: 各种大小
  en-US: Size
---

## zh-CN

小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

## en-US

A small `Spin` is used for loading text, default sized `Spin` for loading a card-level block, and large `Spin` used for loading a page.

```` html
<template>
  <div>
    <atu-spin size="small"></atu-spin>
    <atu-spin></atu-spin>
    <atu-spin size="large"></atu-spin>
  </div>
</template>

<script>
import AtuSpin from '@/spin'

export default {
  components: {
    AtuSpin
  }
}
</script>
````
